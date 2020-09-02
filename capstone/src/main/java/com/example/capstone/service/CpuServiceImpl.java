package com.example.capstone.service;

import com.example.capstone.models.Cpu;
import com.example.capstone.repositories.CpuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

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
