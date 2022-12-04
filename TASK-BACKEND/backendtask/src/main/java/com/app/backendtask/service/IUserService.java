package com.app.backendtask.service;


import com.app.backendtask.pojos.User;

public interface IUserService {


	User findByEmail(String email);

	
}
