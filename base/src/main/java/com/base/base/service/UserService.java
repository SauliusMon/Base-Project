package com.base.base.service;

import com.base.base.mapper.UserMapper;
import com.base.base.model.User;
import com.base.base.repo.UserRepository;
import com.base.base.rest.dto.UserDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public User getUserByUsername (String username) {
        return userRepository.findAll().stream().filter(user -> user.getUsername().equals(username)).findAny().orElseThrow();
    }

    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::userToUserDto).collect(Collectors.toList());
    }

    public List<UserDto> getUsersByUsernameFilter (String username) {
        return userRepository.findAll().stream().filter(user -> user.getUsername().contains(username)).map(UserMapper::userToUserDto).collect(Collectors.toList());
    }

    public boolean hasUserWithUsername(String username) {
        return userRepository.findAll().stream().anyMatch(user -> user.getUsername().equals(username));
    }

    public boolean hasUserWithEmail(String email) {
        return userRepository.findAll().stream().anyMatch(user -> user.getEmail().equals(email));
    }

    public User validateAndGetUserByUsername(String username) {
        return null;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
