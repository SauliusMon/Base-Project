package com.base.base.mapper;

import com.base.base.model.MechanicWorkplace;
import com.base.base.rest.dto.MechanicWorkplaceDto;

public class MechanicWorkplaceMapper {

    public static MechanicWorkplaceDto mechWToMechWDto (MechanicWorkplace mechWToConvert) {
        return new MechanicWorkplaceDto(
                mechWToConvert.getId(),
                mechWToConvert.getName(),
                mechWToConvert.getAddress(),
                mechWToConvert.getBoss(),
                mechWToConvert.getMechanicList()
        );
    }

    public static MechanicWorkplace mechWDtoToMechW (MechanicWorkplaceDto mechWDtoToConvert) {
        return new MechanicWorkplace(
                mechWDtoToConvert.getId(),
                mechWDtoToConvert.getName(),
                mechWDtoToConvert.getAddress(),
                mechWDtoToConvert.getBoss(),
                mechWDtoToConvert.getMechanicList()
        );
    }
}
