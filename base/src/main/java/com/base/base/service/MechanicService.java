package com.base.base.service;

import com.base.base.mapper.MechanicMapper;
import com.base.base.model.Mechanic;
import com.base.base.model.MechanicWorkplace;
import com.base.base.repo.MechanicRepository;
import com.base.base.repo.MechanicWorkplaceRepository;
import com.base.base.rest.dto.MechanicDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class MechanicService {

    private final MechanicRepository mechanicRepository;
    private final MechanicWorkplaceRepository mechanicWorkplaceRepository;

    public MechanicDto getMechanicByID(Long mechanicID) {
        return MechanicMapper.mechanicToMechanicDto(Objects.requireNonNull(mechanicRepository.findById(mechanicID).orElse(null)));
    }

    public void updateMechanic(MechanicDto mechanicDto) {
        if (getMechanicByID(mechanicDto.getId()) != null) {
            mechanicRepository.save(MechanicMapper.mechanicDtoToMechanic(mechanicDto));
        }
    }

    public List<MechanicDto> getMechanics() {
        return mechanicRepository.findAll().stream().map(MechanicMapper::mechanicToMechanicDto).collect(Collectors.toList());
    }

    public Mechanic saveMechanic(MechanicDto mechanicDto) {
        Mechanic mechanicToSave = MechanicMapper.mechanicDtoToMechanic(mechanicDto);

        if (mechanicDto.getWorkplace() != null) {
            Optional<MechanicWorkplace> mechanicWorkplace = mechanicWorkplaceRepository.findById(mechanicDto.getWorkplace());
            if (mechanicWorkplace.isPresent()) {
                mechanicRepository.save(mechanicToSave);
                mechanicToSave.setWorkplace(mechanicWorkplace.get());
                mechanicWorkplace.get().addMechanic(mechanicToSave);
                mechanicWorkplaceRepository.save(mechanicWorkplace.get());
            }
        }
        return mechanicToSave;
    }

    public void deleteMechanic(Long mechanicID) {
        mechanicRepository.deleteById(mechanicID);
    }

    public void rateMechanic(Long mechanicID, String rating) {
        MechanicDto mechanic = getMechanicByID(mechanicID);

        int peopleRated = mechanic.getPeopleRated() + 1;
        double currentRating = Double.parseDouble(rating);
        double fullRating = (peopleRated - 1) * mechanic.getPeopleRated();
        fullRating += currentRating;

        double currentMRating = fullRating / peopleRated;

        mechanic.setPeopleRated(peopleRated);
        mechanic.setRating(currentMRating);

        mechanicRepository.save(MechanicMapper.mechanicDtoToMechanic(mechanic));
    }
}
