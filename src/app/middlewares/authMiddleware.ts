import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface ITokenPayload{
  id: string,
  iat: number,
  exp: number
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction){
  const { authorization } = req.headers;

  if(!authorization){
    res.status(401).json({message: 'token não encontrado.'})
  }

  const token = authorization!.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'secret');
    const { id } = data as ITokenPayload;

    req.userId = id;

    return next();
    
  } catch {
    res.sendStatus(401);
  }

}