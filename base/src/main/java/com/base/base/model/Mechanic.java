package com.base.base.model;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name="MechanikasJuozas")
public class Mechanic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String secondName;

    private String specialization;

    private String town;
    private Integer peopleRated = 0;

    private Double rating = 0.0;

    @ManyToOne
    private MechanicWorkplace workplace;

    public Mechanic(String name, String secondName, String specialization, String town, Double rating) {
        this.name = name;
        this.secondName = secondName;
        this.specialization = specialization;
        this.town = town;
        this.rating = rating;
    }

    public Mechanic(Long id, String name, String secondName, String specialization, String town, Integer peopleRated, Double rating) {
        this.id = id;
        this.name = name;
        this.secondName = secondName;
        this.specialization = specialization;
        this.town = town;
        this.peopleRated = peopleRated;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public MechanicWorkplace getWorkplace() {
        return workplace;
    }

    public void setWorkplace(MechanicWorkplace workplace) {
        this.workplace = workplace;
    }

    public Integer getPeopleRated() {
        return peopleRated;
    }

    public void setPeopleRated(Integer peopleRated) {
        this.peopleRated = peopleRated;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }
}
