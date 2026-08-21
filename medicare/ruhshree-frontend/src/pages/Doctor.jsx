import React, { useEffect, useState } from "react";
import "./Doctor.css";
import { API_BASE_URL } from "../services/api";

function Doctor() {
    const [doctor, setDoctor] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const doctorId = 5;

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchDoctorData();
    }, []);

    const fetchDoctorData = async () => {
        try {
            setLoading(true);
            setError("");

            // Fetch doctor profile
            const doctorResponse = await fetch(
                `${API_BASE_URL}/doctors/${doctorId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!doctorResponse.ok) {
                throw new Error(
                    `Failed to load doctor profile: ${doctorResponse.status}`
                );
            }

            const doctorData = await doctorResponse.json();
            setDoctor(doctorData);

            // Fetch doctor's appointments
            const appointmentResponse = await fetch(
                `${API_BASE_URL}/appointments/doctor/${doctorId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!appointmentResponse.ok) {
                throw new Error(
                    `Failed to load appointments: ${appointmentResponse.status}`
                );
            }

            const appointmentData = await appointmentResponse.json();

            setAppointments(appointmentData);

        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Approve appointment
    const approveAppointment = async (appointmentId) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/appointments/${appointmentId}/approve`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Approval failed: ${response.status}`
                );
            }

            const updatedAppointment = await response.json();

            setAppointments((previousAppointments) =>
                previousAppointments.map((appointment) =>
                    appointment.id === appointmentId
                        ? updatedAppointment
                        : appointment
                )
            );

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    // Cancel appointment
    const cancelAppointment = async (appointmentId) => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if (!confirmCancel) {
            return;
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/appointments/${appointmentId}/cancel`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Cancellation failed: ${response.status}`
                );
            }

            const updatedAppointment = await response.json();

            setAppointments((previousAppointments) =>
                previousAppointments.map((appointment) =>
                    appointment.id === appointmentId
                        ? updatedAppointment
                        : appointment
                )
            );

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    if (loading) {
        return (
            <div className="doctor-loading">
                <div className="loading-spinner"></div>
                <p>Loading your dashboard...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="doctor-error-page">
                <div className="error-icon">!</div>
                <h2>Unable to load dashboard</h2>
                <p>{error}</p>

                <button
                    className="retry-button"
                    onClick={fetchDoctorData}
                >
                    Try Again
                </button>
            </div>
        );
    }

    const approvedCount = appointments.filter(
        (appointment) => appointment.status === "APPROVED"
    ).length;

    const pendingCount = appointments.filter(
        (appointment) =>
            appointment.status !== "APPROVED" &&
            appointment.status !== "CANCELLED"
    ).length;

    const cancelledCount = appointments.filter(
        (appointment) => appointment.status === "CANCELLED"
    ).length;

    return (
        <div className="doctor-page">

            <div className="doctor-container">

                <header className="doctor-header">

                    <div>
                        <span className="brand-name">
                            RUHSHREE HEALTH
                        </span>

                        <h1>
                            Welcome back, Dr. {doctor?.name?.replace("Dr. ", "")}
                            <span className="wave"> 👋</span>
                        </h1>

                        <p>
                            Manage your appointments and patient care from one place.
                        </p>
                    </div>

                    <div className="doctor-avatar-large">
                        {doctor?.name
                            ? doctor.name.charAt(doctor.name.startsWith("Dr.") ? 3 : 0)
                            : "D"}
                    </div>

                </header>

                <section className="doctor-stats">

                    <div className="stat-card">

                        <div className="stat-icon blue">
                            📅
                        </div>

                        <div>
                            <span>Total Appointments</span>
                            <strong>{appointments.length}</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon orange">
                            ⏳
                        </div>

                        <div>
                            <span>Pending</span>
                            <strong>{pendingCount}</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon green">
                            ✓
                        </div>

                        <div>
                            <span>Approved</span>
                            <strong>{approvedCount}</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon red">
                            ×
                        </div>

                        <div>
                            <span>Cancelled</span>
                            <strong>{cancelledCount}</strong>
                        </div>

                    </div>

                </section>

                <section className="doctor-profile-card">

                    <div className="section-heading">

                        <div className="section-icon">
                            👨‍⚕️
                        </div>

                        <div>
                            <h2>Your Profile</h2>
                            <p>Your professional information</p>
                        </div>

                    </div>


                    <div className="profile-content">

                        <div className="profile-main">

                            <div className="profile-avatar">
                                {doctor?.name
                                    ? doctor.name.charAt(
                                        doctor.name.startsWith("Dr.") ? 3 : 0
                                    )
                                    : "D"}
                            </div>

                            <div>

                                <h2>
                                    {doctor?.name}
                                </h2>

                                <span className="specialization">
                                    {doctor?.specialization}
                                </span>

                            </div>

                        </div>


                        <div className="profile-details">

                            <div className="profile-detail">

                                <span className="detail-label">
                                    EXPERIENCE
                                </span>

                                <strong>
                                    {doctor?.experience} years
                                </strong>

                            </div>


                            <div className="profile-detail">

                                <span className="detail-label">
                                    EMAIL
                                </span>

                                <strong>
                                    {doctor?.email}
                                </strong>

                            </div>


                            <div className="profile-detail">

                                <span className="detail-label">
                                    PHONE
                                </span>

                                <strong>
                                    {doctor?.phone}
                                </strong>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="appointments-section">

                    <div className="appointments-header">

                        <div>

                            <span className="section-label">
                                PATIENT CARE
                            </span>

                            <h2>
                                Appointments
                            </h2>

                            <p>
                                Appointments scheduled with you.
                            </p>

                        </div>

                        <div className="appointment-count">
                            {appointments.length}{" "}
                            {appointments.length === 1
                                ? "Appointment"
                                : "Appointments"}
                        </div>

                    </div>


                    {appointments.length === 0 ? (

                        <div className="empty-appointments">

                            <div className="empty-icon">
                                📅
                            </div>

                            <h3>
                                No appointments yet
                            </h3>

                            <p>
                                You currently don't have any scheduled appointments.
                            </p>

                        </div>

                    ) : (

                        <div className="appointment-list">

                            {appointments.map((appointment) => {

                                const status =
                                    appointment.status || "BOOKED";

                                return (

                                    <div
                                        className="appointment-card"
                                        key={appointment.id}
                                    >

                                        <div className="appointment-left">

                                            <span className="patient-number">
                                                PATIENT #{appointment.patientId}
                                            </span>

                                            <h3>
                                                Appointment
                                            </h3>

                                            <div className="appointment-info">

                                                <span>
                                                    📅{" "}
                                                    {appointment.appointmentDate}
                                                </span>

                                                <span>
                                                    🕐{" "}
                                                    {appointment.appointmentTime}
                                                </span>

                                            </div>

                                        </div>


                                        <div className="appointment-right">

                                            <span
                                                className={`status-badge ${status.toLowerCase()}`}
                                            >
                                                {status}
                                            </span>


                                            {status !== "APPROVED" &&
                                                status !== "CANCELLED" && (

                                                    <div className="appointment-actions">

                                                        <button
                                                            className="approve-button"
                                                            onClick={() =>
                                                                approveAppointment(
                                                                    appointment.id
                                                                )
                                                            }
                                                        >
                                                            ✓ Approve
                                                        </button>


                                                        <button
                                                            className="cancel-button"
                                                            onClick={() =>
                                                                cancelAppointment(
                                                                    appointment.id
                                                                )
                                                            }
                                                        >
                                                            × Cancel
                                                        </button>

                                                    </div>

                                                )}

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    )}

                </section>

            </div>

        </div>
    );
}

export default Doctor;