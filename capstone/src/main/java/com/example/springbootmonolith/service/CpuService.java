package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Cpu;
import org.springframework.http.HttpStatus;

public interface CpuService {
    public Iterable<Cpu> listCpu();

    public Cpu createCpu(Cpu cpu);

    public HttpStatus deleteCpu(Long cpuId);
}
