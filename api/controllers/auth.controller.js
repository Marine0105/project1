import { response } from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res,next) => {
    const { username, password ,email} = req.body;


    if (!email || !username || !password  || email== '' || username== '' || password== '') {
      return next(errorHandler(400,'all fileds are required'));

    }

    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ 
        username,
        email, 
        password :hashedPassword,})
        
        try {
            await newUser.save();
        res.json('User saved successfully');
        } catch (error) {
           next(error);
            
        }
}