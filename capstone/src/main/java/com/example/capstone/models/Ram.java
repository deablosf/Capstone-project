package com.example.capstone.models;

import javax.persistence.*;

@Entity
@Table(name = "ram")
public class Ram {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String memoryType;

    @Column
    private double capacityGB;

    @Column
    private double speedMHz;

    @Column
    private double cost;

    public Ram() {}

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

    public String getMemoryType() {
        return memoryType;
    }

    public void setMemoryType(String memoryType) {
        this.memoryType = memoryType;
    }

    public double getCapacityGB() {
        return capacityGB;
    }

    public void setCapacityGB(double capacityGB) {
        this.capacityGB = capacityGB;
    }

    public double getSpeedMHz() {
        return speedMHz;
    }

    public void setSpeedMHz(double speedMHz) {
        this.speedMHz = speedMHz;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
