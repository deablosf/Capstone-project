package com.example.capstone.service;

import com.example.capstone.models.Cpu;
import org.springframework.http.HttpStatus;

public interface CpuService {
    public Iterable<Cpu> listCpu();
    public Cpu createCpu(Cpu cpu);
    public HttpStatus deleteCpu(Long cpuId);
}
