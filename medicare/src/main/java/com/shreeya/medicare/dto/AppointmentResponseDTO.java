package com.shreeya.medicare.dto;

import com.shreeya.medicare.entity.Appointment;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentResponseDTO {

    private Long id;

    private String patientName;

    private String doctorName;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String status;

    public AppointmentResponseDTO() {
    }

    public AppointmentResponseDTO(Appointment appointment) {
        this.id = appointment.getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
