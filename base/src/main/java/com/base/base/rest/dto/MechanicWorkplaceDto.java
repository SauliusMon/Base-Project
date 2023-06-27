package com.base.base.rest.dto;

import com.base.base.model.Mechanic;

import java.util.List;

public class MechanicWorkplaceDto {

    private Long id;

    private String name;

    private String address;

    private String boss;

    private List<Mechanic> mechanicList;


    public MechanicWorkplaceDto(Long id, String name, String address, String boss, List<Mechanic> mechanicList) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.boss = boss;
        this.mechanicList = mechanicList;
    }

    public MechanicWorkplaceDto(String name, String address, String boss, List<Mechanic> mechanicList) {
        this.name = name;
        this.address = address;
        this.boss = boss;
        this.mechanicList = mechanicList;
    }

    public MechanicWorkplaceDto() {
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
}
