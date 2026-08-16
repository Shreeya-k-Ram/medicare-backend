import React, { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {

    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {

        const loadData = async () => {

            if (!token) {
                setError("Please login first.");
                setLoading(false);
                return;
            }

            try {

                const headers = {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                };

                const [patientResponse, doctorResponse, appointmentResponse] =
                    await Promise.all([

                        fetch(
                            "http://localhost:8080/patients",
                            { headers }
                        ),

                        fetch(
                            "http://localhost:8080/doctors",
                            { headers }
                        ),

                        fetch(
                            "http://localhost:8080/appointments",
                            { headers }
                        )

                    ]);

                if (!patientResponse.ok) {
                    throw new Error(
                        `Patients: ${patientResponse.status}`
                    );
                }

                if (!doctorResponse.ok) {
                    throw new Error(
                        `Doctors: ${doctorResponse.status}`
                    );
                }

                if (!appointmentResponse.ok) {
                    throw new Error(
                        `Appointments: ${appointmentResponse.status}`
                    );
                }

                const patientData =
                    await patientResponse.json();

                const doctorData =
                    await doctorResponse.json();

                const appointmentData =
                    await appointmentResponse.json();

                setPatients(patientData);
                setDoctors(doctorData);
                setAppointments(appointmentData);

            } catch (err) {

                console.error(err);
                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        loadData();

    }, [token]);


    // ===============================
    // APPROVE APPOINTMENT
    // ===============================

    const approveAppointment = async (id) => {

        try {

            const response = await fetch(
                `http://localhost:8080/appointments/${id}/approve`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Approve failed: ${response.status}`
                );
            }

            const updatedAppointment =
                await response.json();

            setAppointments(previous =>
                previous.map(appointment =>
                    appointment.id === id
                        ? updatedAppointment
                        : appointment
                )
            );

        } catch (err) {

            console.error(err);
            alert(err.message);

        }
    };


    // ===============================
    // COUNTS
    // ===============================

    const pendingCount =
        appointments.filter(
            appointment =>
                appointment.status === "PENDING"
        ).length;

    const approvedCount =
        appointments.filter(
            appointment =>
                appointment.status === "APPROVED"
        ).length;


    // ===============================
    // LOADING
    // ===============================

    if (loading) {

        return (
            <div className="admin-page">

                <div className="admin-loading">

                    <div className="admin-spinner"></div>

                    <p>
                        Loading admin dashboard...
                    </p>

                </div>

            </div>
        );
    }


    // ===============================
    // ERROR
    // ===============================

    if (error) {

        return (
            <div className="admin-page">

                <div className="admin-error">

                    <h2>
                        Unable to load dashboard
                    </h2>

                    <p>
                        {error}
                    </p>

                </div>

            </div>
        );
    }


    return (

        <div className="admin-page">

            <div className="admin-container">


                {/* HEADER */}

                <header className="admin-header">

                    <div>

                        <p className="admin-label">
                            RUHSHREE HEALTH
                        </p>

                        <h1>
                            Admin Dashboard
                        </h1>

                        <p className="admin-subtitle">
                            Manage your healthcare platform.
                        </p>

                    </div>

                    <div className="admin-badge">
                        ADMIN
                    </div>

                </header>


                {/* STATISTICS */}

                <section className="admin-stats">

                    <div className="admin-stat-card">

                        <span>
                            PATIENTS
                        </span>

                        <strong>
                            {patients.length}
                        </strong>

                        <p>
                            Registered patients
                        </p>

                    </div>


                    <div className="admin-stat-card">

                        <span>
                            DOCTORS
                        </span>

                        <strong>
                            {doctors.length}
                        </strong>

                        <p>
                            Healthcare professionals
                        </p>

                    </div>


                    <div className="admin-stat-card">

                        <span>
                            APPOINTMENTS
                        </span>

                        <strong>
                            {appointments.length}
                        </strong>

                        <p>
                            Total appointments
                        </p>

                    </div>


                    <div className="admin-stat-card pending">

                        <span>
                            PENDING
                        </span>

                        <strong>
                            {pendingCount}
                        </strong>

                        <p>
                            Awaiting approval
                        </p>

                    </div>

                </section>


                {/* APPOINTMENTS */}

                <section className="admin-section">

                    <div className="section-heading">

                        <div>

                            <span>
                                APPOINTMENT MANAGEMENT
                            </span>

                            <h2>
                                Appointments
                            </h2>

                        </div>

                        <div className="appointment-count">

                            {approvedCount} approved ·{" "}
                            {pendingCount} pending

                        </div>

                    </div>


                    <div className="table-container">

                        {appointments.length === 0 ? (

                            <div className="empty">
                                No appointments found.
                            </div>

                        ) : (

                            <table>

                                <thead>

                                <tr>

                                    <th>
                                        Patient
                                    </th>

                                    <th>
                                        Doctor
                                    </th>

                                    <th>
                                        Date
                                    </th>

                                    <th>
                                        Time
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                                </thead>

                                <tbody>

                                {appointments.map(
                                    appointment => (

                                        <tr
                                            key={appointment.id}
                                        >

                                            <td>
                                                <strong>
                                                    {
                                                        appointment.patientName
                                                    }
                                                </strong>
                                            </td>

                                            <td>
                                                Dr.{" "}
                                                {
                                                    appointment.doctorName
                                                }
                                            </td>

                                            <td>
                                                {
                                                    appointment.appointmentDate
                                                }
                                            </td>

                                            <td>
                                                {
                                                    appointment.appointmentTime
                                                }
                                            </td>

                                            <td>

                                                    <span
                                                        className={`status ${
                                                            appointment.status?.toLowerCase()
                                                        }`}
                                                    >
                                                        {
                                                            appointment.status
                                                        }
                                                    </span>

                                            </td>

                                            <td>

                                                {appointment.status ===
                                                "PENDING" ? (

                                                    <button
                                                        className="approve-btn"
                                                        onClick={() =>
                                                            approveAppointment(
                                                                appointment.id
                                                            )
                                                        }
                                                    >
                                                        Approve
                                                    </button>

                                                ) : (

                                                    <span className="approved">
                                                            Approved
                                                        </span>

                                                )}

                                            </td>

                                        </tr>

                                    )
                                )}

                                </tbody>

                            </table>

                        )}

                    </div>

                </section>


                {/* PATIENTS */}

                <section className="admin-section">

                    <div className="section-heading">

                        <div>

                            <span>
                                PATIENT MANAGEMENT
                            </span>

                            <h2>
                                Patients
                            </h2>

                        </div>

                    </div>


                    <div className="table-container">

                        {patients.length === 0 ? (

                            <div className="empty">
                                No patients found.
                            </div>

                        ) : (

                            <table>

                                <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>

                                </tr>

                                </thead>

                                <tbody>

                                {patients.map(
                                    patient => (

                                        <tr
                                            key={patient.id}
                                        >

                                            <td>
                                                <strong>
                                                    {patient.name}
                                                </strong>
                                            </td>

                                            <td>
                                                {patient.age}
                                            </td>

                                            <td>
                                                {patient.gender}
                                            </td>

                                            <td>
                                                {patient.phone}
                                            </td>

                                            <td>
                                                {patient.email}
                                            </td>

                                            <td>

                                                    <span
                                                        className={
                                                            patient.active
                                                                ? "status active"
                                                                : "status inactive"
                                                        }
                                                    >
                                                        {patient.active
                                                            ? "Active"
                                                            : "Inactive"
                                                        }
                                                    </span>

                                            </td>

                                        </tr>

                                    )
                                )}

                                </tbody>

                            </table>

                        )}

                    </div>

                </section>


                {/* DOCTORS */}

                <section className="admin-section">

                    <div className="section-heading">

                        <div>

                            <span>
                                DOCTOR MANAGEMENT
                            </span>

                            <h2>
                                Doctors
                            </h2>

                        </div>

                    </div>


                    <div className="doctor-grid">

                        {doctors.map(
                            doctor => (

                                <div
                                    className="doctor-card"
                                    key={doctor.id}
                                >

                                    <div className="doctor-avatar">

                                        {doctor.name
                                            ?.charAt(0)
                                            .toUpperCase()
                                        }

                                    </div>

                                    <div>

                                        <h3>
                                            Dr. {doctor.name}
                                        </h3>

                                        <p>
                                            {
                                                doctor.specialization
                                            }
                                        </p>

                                        <small>
                                            {
                                                doctor.experience
                                            }{" "}
                                            years experience
                                        </small>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </section>

            </div>

        </div>
    );
}

export default Admin;