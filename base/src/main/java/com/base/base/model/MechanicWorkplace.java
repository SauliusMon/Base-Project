package com.base.base.model;


import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name="JuozoDarboVieta")
public class MechanicWorkplace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    private String boss;

    @OneToMany
    private List<Mechanic> mechanicList = new ArrayList<>();


    public MechanicWorkplace(String name, String address, String boss, List<Mechanic> mechanicList) {
        this.name = name;
        this.address = address;
        this.boss = boss;
        this.mechanicList = mechanicList;
    }

    public MechanicWorkplace(Long id, String name, String address, String boss, List<Mechanic> mechanicList) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.boss = boss;
        this.mechanicList = mechanicList;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBoss() {
        return boss;
    }

    public void setBoss(String boss) {
        this.boss = boss;
    }

    public List<Mechanic> getMechanicList() {
        return mechanicList;
    }

    public void setMechanicList(List<Mechanic> mechanicList) {
        this.mechanicList = mechanicList;
    }

    public void addMechanic (Mechanic mechanic) {
        this.mechanicList.add(mechanic);
    }
}
