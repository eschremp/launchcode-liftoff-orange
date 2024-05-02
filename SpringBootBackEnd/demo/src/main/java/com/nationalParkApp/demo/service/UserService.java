package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.entity.UserEntity;

public interface UserService {

    public User createUser(User user);

    public UserEntity getUserById(Long id);

    public User updateUser(Long id, User user);
}
