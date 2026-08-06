package com.shreeya.medicare.service;

import com.shreeya.medicare.dto.AppointmentRequestDTO;
import com.shreeya.medicare.dto.AppointmentResponseDTO;
import com.shreeya.medicare.entity.Doctor;
import com.shreeya.medicare.entity.Patient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.shreeya.medicare.repository.AppointmentRepository;
import com.shreeya.medicare.repository.PatientRepository;
import com.shreeya.medicare.repository.DoctorsRepository;
import com.shreeya.medicare.entity.Appointment;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;


@Service
public class AppointmentService {

    private static final Logger logger = LoggerFactory.getLogger(AppointmentService.class);

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorsRepository doctorRepository;

    public AppointmentResponseDTO bookAppointment(AppointmentRequestDTO request) {

        logger.info("Booking appointment for patient ID: {} with Doctor ID: {}", request.getPatientId(),
                request.getDoctorId());

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new RuntimeException("Patient Not Found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor Not Found"));

        Optional<Appointment> existingAppointment =
                appointmentRepository.findByDoctorAndAppointmentDateAndAppointmentTime(
                        doctor,
                        request.getAppointmentDate(),
                        request.getAppointmentTime()
                );

        if (existingAppointment.isPresent()) {
            throw new RuntimeException("Doctor already has an appointment at this time.");
        }

        Appointment appointment = new Appointment();

        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setAppointmentTime(request.getAppointmentTime());

        appointment.setStatus("PENDING");

        Appointment savedAppointment = appointmentRepository.save(appointment);

        logger.info("Appointment booked successfully with ID: {}", appointment.getId());

        return convertToDTO(savedAppointment);
    }

    private AppointmentResponseDTO convertToDTO(Appointment appointment) {

        AppointmentResponseDTO dto = new AppointmentResponseDTO();

        dto.setId(appointment.getId());
        dto.setPatientName(appointment.getPatient().getName());
        dto.setDoctorName(appointment.getDoctor().getName());
        dto.setAppointmentDate(appointment.getAppointmentDate());
        dto.setAppointmentTime(appointment.getAppointmentTime());
        dto.setStatus(appointment.getStatus());

        return dto;
    }

    public AppointmentResponseDTO approveAppointment(Long id) {

        logger.info("Approving appointment with ID: {}", id);

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment Not Found"));

        appointment.setStatus("APPROVED");

        Appointment updatedAppointment = appointmentRepository.save(appointment);

        logger.info("Appointment {} approved successfully", id);
        return convertToDTO(updatedAppointment);
    }

    public AppointmentResponseDTO cancelAppointment(Long id) {

        logger.info("Canceling appointment ID: {}", id);

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment Not Found"));

        appointment.setStatus("CANCELLED");
        Appointment updatedAppointment = appointmentRepository.save(appointment);

        logger.info("Appointment {} cancelled successfully", id);

        return convertToDTO(updatedAppointment);
    }

    public List<AppointmentResponseDTO> getAllAppointments() {

        List<Appointment> appointments = appointmentRepository.findAll();
        List<AppointmentResponseDTO> response = new ArrayList<>();

        for (Appointment appointment : appointments) {
            response.add(convertToDTO(appointment));
        }
        return response;
    }

    public List<AppointmentResponseDTO> getAppointmentsByPatient(Long patientId) {

        List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);

        List<AppointmentResponseDTO> response = new ArrayList<>();

        for (Appointment appointment : appointments) {
            response.add(convertToDTO(appointment));
        }
        return response;
    }

    public List<AppointmentResponseDTO> getAppointmentsByDoctor(Long doctorId) {

        List<Appointment> appointments = appointmentRepository.findByDoctorId(doctorId);

        List<AppointmentResponseDTO> response = new ArrayList<>();

        for (Appointment appointment : appointments) {
            response.add(convertToDTO(appointment));
        }
        return response;
    }
}
