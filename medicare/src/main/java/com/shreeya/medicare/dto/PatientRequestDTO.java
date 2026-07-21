package com.shreeya.medicare.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class PatientRequestDTO {

    @NotBlank(message = "Name cannot be blank")
    private String name;

    @Min(value = 1, message = "Age must be greater than 0")
    private int age;

    @NotBlank(message = "Gender cannot be blank")
    private String gender;

    @NotBlank(message = "Phone cannot be blank")
    private String phone;

    @Email(message = "Enter a valid email")
    @NotBlank(message = "Email cannot be blank")
    private String email;

    @NotBlank(message = "Address cannot be blank")
    private String address;

    @NotBlank(message = "Disease cannot be blank")
    private String disease;

    //Constructor
    public PatientRequestDTO() {
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }
}