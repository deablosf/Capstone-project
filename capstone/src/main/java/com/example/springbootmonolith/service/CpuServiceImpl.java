package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Cpu;
import com.example.springbootmonolith.repositories.CpuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class CpuServiceImpl implements CpuService{

    @Autowired
    private CpuRepository cpuRepository;

    @Override
    public Iterable<Cpu> listCpu() {
        return cpuRepository.findAll();
    }

    @Override
    public Cpu createCpu(Cpu cpu) {
        return cpuRepository.save(cpu);
    }

    @Override
    public HttpStatus deleteCpu(Long cpuId) {
        cpuRepository.deleteById(cpuId);
        return HttpStatus.OK;
    }
}
