package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.Cpu;
import com.example.springbootmonolith.service.CpuService;
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
    public Cpu createCpu(Cpu cpu) {
        return cpuService.createCpu(cpu);
    }

    @DeleteMapping("/{cpuId}")
    public HttpStatus deleteCpu(@PathVariable Long cpuId) {
        return cpuService.deleteCpu(cpuId);
    }
}
