package com.app.backendtask.controller;



import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.backendtask.dao.UserRepository;
import com.app.backendtask.pojos.User;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepository userRepo;
	
	
	@PostMapping("/register")
	public ResponseEntity<Object> processRegister(@RequestBody User user) {
		HashMap<String,String> request = new HashMap<>();
		try {
//			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//			String encodedPassword = passwordEncoder.encode(user.getPassword());
//			user.setPassword(encodedPassword);
			userRepo.save(user);
			request.put("status", "success");
			return  ResponseEntity.status(HttpStatus.OK).body(request);
		} catch (Exception e) {
		   request.put("status", "failed");	
		   return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	@GetMapping("/all")
	public ResponseEntity<Object> getAllRegisteredUsers() {
		try {
		List<User> list = userRepo.findAll();
		return  ResponseEntity.status(HttpStatus.OK).body(list);
		} catch (Exception e) {
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	
}
