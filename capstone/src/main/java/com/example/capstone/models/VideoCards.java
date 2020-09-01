package com.example.capstone.models;

import javax.persistence.*;

@Entity
@Table
public class VideoCards {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String size;

    @Column
    private int memoryGB;

    @Column
    private Long memoryBusBit;

    @Column
    private String slotInterface;

    @Column
    private double cost;

    public VideoCards() {}

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

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getMemoryGB() {
        return memoryGB;
    }

    public void setMemoryGB(int memoryGB) {
        this.memoryGB = memoryGB;
    }

    public Long getMemoryBusBit() {
        return memoryBusBit;
    }

    public void setMemoryBusBit(Long memoryBusBit) {
        this.memoryBusBit = memoryBusBit;
    }

    public String getSlotInterface() {
        return slotInterface;
    }

    public void setSlotInterface(String slotInterface) {
        this.slotInterface = slotInterface;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
