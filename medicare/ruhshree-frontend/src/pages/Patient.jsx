import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";
import { API_BASE_URL } from "../services/api";

function Patient() {

    const navigate = useNavigate();

    const [patient, setPatient] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Temporary patient ID for testing
    const patientId = 3;

    useEffect(() => {

        const fetchData = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                setLoading(false);
                return;
            }

            try {
                const patientResponse = await fetch(
                    `${API_BASE_URL}/patients/${patientId}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                if (!patientResponse.ok) {
                    throw new Error(
                        `Failed to load patient: ${patientResponse.status}`
                    );
                }

                const patientData = await patientResponse.json();

                setPatient(patientData);

                const appointmentResponse = await fetch(
                    `${API_BASE_URL}/appointments/patient/${patientId}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                if (!appointmentResponse.ok) {
                    throw new Error(
                        `Failed to load appointments: ${appointmentResponse.status}`
                    );
                }

                const appointmentData =
                    await appointmentResponse.json();

                console.log(
                    "Patient appointments:",
                    appointmentData
                );

                setAppointments(appointmentData);

            } catch (error) {

                console.error(error);

                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        fetchData();

    }, []);

    if (loading) {

        return (
            <div className="patient-page">

                <div className="patient-loading">

                    <div className="patient-loading-spinner"></div>

                    <p>
                        Loading your profile...
                    </p>

                </div>

            </div>
        );
    }

    if (error) {

        return (
            <div className="patient-page">

                <div className="patient-error">

                    <h2>
                        Unable to load your profile
                    </h2>

                    <p>
                        {error}
                    </p>

                </div>

            </div>
        );
    }

    return (

        <div className="patient-page">

            <div className="patient-container">

                <div className="patient-header">

                    <div>

                        <p className="patient-label">
                            RUHSHREE HEALTH
                        </p>

                        <h1>
                            Patient Dashboard
                        </h1>

                        <p className="patient-subtitle">
                            Manage your healthcare journey in one place.
                        </p>

                    </div>


                    <div className="patient-avatar">

                        {patient?.name
                            ? patient.name
                                .charAt(0)
                                .toUpperCase()
                            : "P"
                        }

                    </div>

                </div>

                <section className="patient-section">

                    <div className="patient-section-heading">

                        <div>

                            <p className="patient-section-label">
                                YOUR INFORMATION
                            </p>

                            <h2>
                                Patient Profile
                            </h2>

                            <p>
                                Your personal and healthcare information.
                            </p>

                        </div>

                    </div>


                    {patient && (

                        <div className="patient-profile-card">

                            <div className="patient-profile-item">

                                <span>
                                    Name
                                </span>

                                <strong>
                                    {patient.name || "--"}
                                </strong>

                            </div>


                            <div className="patient-profile-item">

                                <span>
                                    Age
                                </span>

                                <strong>
                                    {patient.age ?? "--"}
                                </strong>

                            </div>


                            <div className="patient-profile-item">

                                <span>
                                    Gender
                                </span>

                                <strong>
                                    {patient.gender || "--"}
                                </strong>

                            </div>


                            <div className="patient-profile-item">

                                <span>
                                    Phone
                                </span>

                                <strong>
                                    {patient.phone || "--"}
                                </strong>

                            </div>


                            <div className="patient-profile-item">

                                <span>
                                    Email
                                </span>

                                <strong>
                                    {patient.email || "--"}
                                </strong>

                            </div>


                            <div className="patient-profile-item">

                                <span>
                                    Address
                                </span>

                                <strong>
                                    {patient.address || "--"}
                                </strong>

                            </div>

                        </div>

                    )}

                </section>

                <section className="patient-section">

                    <div className="book-appointment-card">

                        <div>

                            <p className="patient-section-label">
                                YOUR HEALTHCARE
                            </p>

                            <h2>
                                Need another appointment?
                            </h2>

                            <p>
                                Find a doctor and schedule your next
                                appointment with ease.
                            </p>

                        </div>


                        <button
                            className="book-appointment-button"
                            onClick={() =>
                                navigate("/appointments/book")
                            }
                        >

                            Book another appointment

                            <span>
                                →
                            </span>

                        </button>

                    </div>

                </section>

                <section className="patient-section">

                    <div className="patient-section-heading">

                        <div>

                            <p className="patient-section-label">
                                YOUR CARE
                            </p>

                            <h2>
                                My Appointments
                            </h2>

                            <p>
                                View your appointments and their
                                current status.
                            </p>

                        </div>

                    </div>


                    {appointments.length === 0 ? (

                        <div className="patient-empty-card">

                            <div className="patient-empty-icon">
                                ♡
                            </div>

                            <h3>
                                No appointments yet
                            </h3>

                            <p>
                                Book your first appointment to
                                see it here.
                            </p>

                            <button
                                className="empty-book-button"
                                onClick={() =>
                                    navigate("/appointments/book")
                                }
                            >
                                Book an appointment →
                            </button>

                        </div>

                    ) : (

                        <div className="appointments-list">

                            {appointments.map(
                                (appointment) => (

                                    <div
                                        className="appointment-card"
                                        key={appointment.id}
                                    >

                                        <div className="appointment-doctor">

                                            <div className="appointment-doctor-avatar">

                                                {appointment.doctorName
                                                    ? appointment.doctorName
                                                        .charAt(0)
                                                        .toUpperCase()
                                                    : "D"
                                                }

                                            </div>


                                            <div>

                                                <h3>
                                                    Dr. {appointment.doctorName}
                                                </h3>

                                                <p>
                                                    Medical Specialist
                                                </p>

                                            </div>

                                        </div>

                                        <div className="appointment-info">

                                            <span>
                                                DATE
                                            </span>

                                            <strong>
                                                {appointment.appointmentDate}
                                            </strong>

                                        </div>

                                        <div className="appointment-info">

                                            <span>
                                                TIME
                                            </span>

                                            <strong>
                                                {appointment.appointmentTime}
                                            </strong>

                                        </div>

                                        <div className="appointment-status-container">

                                            <span>
                                                STATUS
                                            </span>

                                            <span
                                                className={`appointment-status ${
                                                    appointment.status
                                                        ?.toLowerCase()
                                                }`}
                                            >

                                                {appointment.status}

                                            </span>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    )}

                </section>


            </div>

        </div>
    );
}

export default Patient;