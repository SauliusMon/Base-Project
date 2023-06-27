package com.base.base.mapper;

import com.base.base.model.Mechanic;
import com.base.base.model.User;
import com.base.base.rest.dto.MechanicDto;
import com.base.base.rest.dto.UserDto;

public class MechanicMapper {

    public static MechanicDto mechanicToMechanicDto (Mechanic mechanicToConvert) {
        MechanicDto mechanicDto = new MechanicDto(
                mechanicToConvert.getId(),
                mechanicToConvert.getName(),
                mechanicToConvert.getSecondName(),
                mechanicToConvert.getSpecialization(),
                mechanicToConvert.getTown(),
                mechanicToConvert.getPeopleRated(),
                mechanicToConvert.getRating()
        );
        if (mechanicToConvert.getWorkplace() != null) {
            mechanicDto.setId(mechanicDto.getWorkplace());
        }
        return mechanicDto;
    }

    public static Mechanic mechanicDtoToMechanic (MechanicDto mechanicDtoToConvert) {
        return new Mechanic(
                mechanicDtoToConvert.getId(),
                mechanicDtoToConvert.getName(),
                mechanicDtoToConvert.getSecondName(),
                mechanicDtoToConvert.getSpecialization(),
                mechanicDtoToConvert.getTown(),
                mechanicDtoToConvert.getPeopleRated(),
                mechanicDtoToConvert.getRating()
        );
    }
}
