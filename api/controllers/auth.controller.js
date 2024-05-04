import { response } from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, password ,email} = req.body;


    if (!email || !username || !password  || email== '' || username== '' || password== '') {
      return res.status(400).json({ message:'ALL FIELDS ARE REQUIRED' });

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
            res.status(500).json({ error: error.message });
            
        }
}