import { Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entity/db-two/user";
import { connectionDbTWo } from "../index";

let usersRepository: Repository<User>;

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const users = await usersRepository.find();
        
    return res.json(users);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const newUser = await usersRepository.create(req.body);
    const result = await usersRepository.save(newUser);

    return res.json(result);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const user = await usersRepository.findOne(req.params.id);

    if (!user) {
        return res.status(404).json({message: 'User not found.'});
    }
    
    return res.json(user);
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const user = await usersRepository.findOne(req.params.id);
    
    if (!user) {
        return res.status(404).json({message: 'User not found.'});
    }

    usersRepository.merge(user, req.body);
    const result = await usersRepository.save(user);

    return res.json(result);
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    geraRepository();
    const user = await usersRepository.findOne(req.params.id);

    if (!user) {
        return res.status(404).json({message: 'User not found.'});    
    }
    
    await usersRepository.delete(req.params.id);

    return res.status(200).json({message: 'Deleted successfully'});
}

async function geraRepository() {
    await connectionDbTWo.then(
        async (connect) => {
            usersRepository = connect.getRepository(User);
        }
    );
}
