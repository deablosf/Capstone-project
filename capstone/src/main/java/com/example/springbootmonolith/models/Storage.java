package com.example.springbootmonolith.models;

import javax.persistence.*;


@Entity
@Table
public class Storage {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private double capacity;

    @Column
    private String requiredConnection;

    @Column
    private double cost;

    @Column
    private String imageurl;

    public Storage() {}

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getStorageSize() {
        return capacity;
    }

    public void setStorageSize(double storagesize) {
        this.capacity = storagesize;
    }

    public String getRequiredConnection() {
        return requiredConnection;
    }

    public void setRequiredConnection(String requiredconnection) {
        this.requiredConnection = requiredconnection;
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
}
