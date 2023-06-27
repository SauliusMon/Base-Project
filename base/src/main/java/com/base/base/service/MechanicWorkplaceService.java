package com.base.base.service;

import com.base.base.mapper.MechanicMapper;
import com.base.base.mapper.MechanicWorkplaceMapper;
import com.base.base.model.Mechanic;
import com.base.base.model.MechanicWorkplace;
import com.base.base.repo.MechanicRepository;
import com.base.base.repo.MechanicWorkplaceRepository;
import com.base.base.rest.dto.MechanicDto;
import com.base.base.rest.dto.MechanicWorkplaceDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class MechanicWorkplaceService {

    private final MechanicWorkplaceRepository mechanicWorkplaceRepository;

    public MechanicWorkplaceDto getMechanicWorkplaceByID(Long mechanicWorkplaceID) {
        return MechanicWorkplaceMapper.mechWToMechWDto(Objects.requireNonNull(mechanicWorkplaceRepository.findById(mechanicWorkplaceID).orElse(null)));
    }

    public void updateMechanicWorkplace(MechanicWorkplaceDto mechanicWorkplaceDto) {
        System.out.println(mechanicWorkplaceDto.getId() + "asd" + mechanicWorkplaceDto.getName());

        if (getMechanicWorkplaceByID(mechanicWorkplaceDto.getId()) != null) {
            mechanicWorkplaceRepository.save(MechanicWorkplaceMapper.mechWDtoToMechW(mechanicWorkplaceDto));
        }
    }

    public List<MechanicWorkplaceDto> getMechWs() {
        return mechanicWorkplaceRepository.findAll().stream().map(MechanicWorkplaceMapper::mechWToMechWDto).collect(Collectors.toList());
    }

    public MechanicWorkplace saveMechW(MechanicWorkplace mechanicWorkplace) {
        return mechanicWorkplaceRepository.save(mechanicWorkplace);
    }

    public void deleteMechW(Long mechWID) {
        mechanicWorkplaceRepository.deleteById(mechWID);
    }
}
