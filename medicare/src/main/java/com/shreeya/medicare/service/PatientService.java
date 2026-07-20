package com.shreeya.medicare.service;

import com.shreeya.medicare.dto.PatientDTO;
import com.shreeya.medicare.entity.Patient;
import com.shreeya.medicare.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Save Patient
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Get All Patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public PatientDTO getPatientById(Long id) {
        Patient patient = patientRepository.findById(id).orElse(null);
        if (patient == null) {
            return null;
        }
        return convertToDTO(patient);
    }

    // Update Patient
    public Patient updatePatient(Long id, Patient updatedPatient) {

        Patient patient = patientRepository.findById(id).orElse(null);

        if (patient != null) {

            patient.setName(updatedPatient.getName());
            patient.setAge(updatedPatient.getAge());
            patient.setGender(updatedPatient.getGender());
            patient.setPhone(updatedPatient.getPhone());
            patient.setEmail(updatedPatient.getEmail());
            patient.setAddress(updatedPatient.getAddress());
            patient.setDisease(updatedPatient.getDisease());

            return patientRepository.save(patient);
        }

        return null;
    }

    // Delete Patient
    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }

    public PatientDTO convertToDTO(Patient patient) {
        PatientDTO dto = new PatientDTO();

        dto.setId(patient.getId());
        dto.setName(patient.getName());
        dto.setAge(patient.getAge());
        dto.setGender(patient.getGender());
        dto.setPhone(patient.getPhone());
        dto.setEmail(patient.getEmail());
        dto.setDisease(patient.getDisease());

        return dto;
    }
}
