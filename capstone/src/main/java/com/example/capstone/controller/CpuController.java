package com.example.capstone.controller;

import com.example.capstone.models.Cpu;
import com.example.capstone.service.CpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cpus")
public class CpuController {

    @Autowired
    CpuService cpuService;

    @GetMapping
    public Iterable<Cpu> findAll() {
        return cpuService.listCpu();
    }

    @PostMapping
    public Cpu createCpu(@RequestBody Cpu cpuParam) {
        return cpuService.createCpu(cpuParam);
    }

    @DeleteMapping("/{cpuId}")
    public HttpStatus deleteCpu(@PathVariable Long cpuId) {
        return cpuService.deleteCpu(cpuId);
    }
}
