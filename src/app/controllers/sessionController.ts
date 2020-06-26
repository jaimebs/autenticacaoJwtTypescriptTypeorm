import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController{
  async authenticate(req:Request, res:Response){
    const repository = getRepository(User);
    const { email, password } = req.body;
        
    const user = await repository.findOne({where: {email}});

    if(!user) {
      return res.status(401).json({message: 'Usuário não autorizado!'})
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword){
      return res.status(401).json({message: 'Usuário não autorizado!'})
    }
    // O ideia que as chaves secretas do projeto fiquem em um .env
    const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'});
    
    delete user.password;
    
    res.status(200).json({user, token});
  }

}

export default new SessionController();