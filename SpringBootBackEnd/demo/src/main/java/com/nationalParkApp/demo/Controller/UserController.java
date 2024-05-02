package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.Favorites;
import com.nationalParkApp.demo.Model.User;
import com.nationalParkApp.demo.entity.ItineraryEntity;
import com.nationalParkApp.demo.entity.UserEntity;
import com.nationalParkApp.demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) { this.userService = userService; }

    @PostMapping("/user2")
    public User createUser(@RequestBody User user) { return userService.createUser(user); }

    @GetMapping(path = "/user/{id}")
    public ResponseEntity getUserById(@PathVariable Long id) {
         UserEntity user = userService.getUserById(id);
        return ResponseEntity.ok(user.getItineraries());
    }

    @PutMapping(path = "/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        user = userService.updateUser(id, user);
        return ResponseEntity.ok(user);
    }

}
