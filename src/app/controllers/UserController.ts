import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController{
  async index(req:Request, res:Response){
    const repository = getRepository(User);

    const user = await repository.find();

    return res.status(200).json(user);
  }

  async store(req:Request, res:Response){
    const repository = getRepository(User);
    const { email, password } = req.body;
        
    const userExists = await repository.findOne({where: {email}});

    if(userExists) {
      return res.status(409).json({message: 'Usuário já cadastrado!'})
    }

    const user = repository.create({ email, password });
    await repository.save(user);
    
    res.status(201).json(user);
  }

  async update(req:Request, res:Response){
    const repository = getRepository(User);

    const { id } = req.params;
    const { email, password } = req.body;

    await repository.update(id, { email, password });
       
    res.status(200).json({ email, password });
  }

  async delete(req:Request, res:Response){
    const repository = getRepository(User);

    const { id } = req.params;

    await repository.delete(id)
       
    res.status(200).json({message: 'Usuário deletado'});
  }

}

export default new UserController();