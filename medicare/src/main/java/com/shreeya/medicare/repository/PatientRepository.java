package com.shreeya.medicare.repository;

import com.shreeya.medicare.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}