package com.example.springbootmonolith.models;

import javax.persistence.*;

@Entity
@Table(name = "motherboards")
public class MotherBoards {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    @Column
    private String cpu_socket;

    @Column
    private String ramtype;

    @Column
    private Long maxmemory;

    @Column
    private String storagetype;

    @Column
    private String expansionslots;

    @Column
    private double cost;

    @Column
    private String size;

    @Column
    private String imageurl;

    public MotherBoards() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpuSocket() {
        return cpu_socket;
    }

    public void setCpuSocket(String cpusocket) {
        this.cpu_socket = cpusocket;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRamType() {
        return ramtype;
    }

    public void setRamType(String ramtype) {
        this.ramtype = ramtype;
    }

    public Long getMaxMemory() {
        return maxmemory;
    }

    public void setMaxMemory(Long maxmemory) {
        this.maxmemory = maxmemory;
    }

    public String getStorageType() {
        return storagetype;
    }

    public void setStorageType(String storagetype) {
        this.storagetype = storagetype;
    }

    public String getExpansionSlots() {
        return expansionslots;
    }

    public void setExpansionSlots(String expansionslots) {
        this.expansionslots = expansionslots;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
