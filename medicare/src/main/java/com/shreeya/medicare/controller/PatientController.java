package com.shreeya.medicare.controller;

import com.shreeya.medicare.dto.PatientRequestDTO;
import com.shreeya.medicare.dto.PatientResponseDTO;
import com.shreeya.medicare.entity.Patient;
import com.shreeya.medicare.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Add Patient
    @PostMapping
    public ResponseEntity<Patient> addPatient(@Valid @RequestBody Patient patient) {

        Patient savedPatient = patientService.savePatient(patient);
        return ResponseEntity.status(201).body(savedPatient);
    }

    // Get All Patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientResponseDTO> getPatientById(@PathVariable Long id) {
        PatientResponseDTO patient = patientService.getPatientById(id);

        if (patient == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(patient);

    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientResponseDTO> updatePatient(@PathVariable Long id, @Valid @RequestBody PatientRequestDTO patientRequestDTO) {

        PatientResponseDTO updatedPatient = patientService.updatePatient(id, patientRequestDTO);

        if (updatedPatient == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedPatient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deactivatePatient(@PathVariable Long id) {
        boolean deleted = patientService.deactivatePatient(id);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Map.of("message", "Patient Deactivated Successfully").toString());
    }
}