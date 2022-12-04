package com.app.backendtask.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.backendtask.pojos.User;
import com.app.backendtask.service.IUserService;


@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserServiceImpl userRepo;


	@Override
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}

}
