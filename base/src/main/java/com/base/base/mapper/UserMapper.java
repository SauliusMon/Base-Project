package com.base.base.mapper;

import com.base.base.model.User;
import com.base.base.rest.dto.UserDto;

public class UserMapper {

    public static UserDto userToUserDto (User userToConvert) {
        return new UserDto(
                userToConvert.getId(),
                userToConvert.getUsername(),
                userToConvert.getPassword(),
                userToConvert.getName(),
                userToConvert.getEmail(),
                userToConvert.getRole()
                );
    }
}
