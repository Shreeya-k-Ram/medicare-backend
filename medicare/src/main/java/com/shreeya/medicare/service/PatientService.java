package com.shreeya.medicare.service;

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

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
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
}