import { User } from "../database/entities/user.entity";
import { Request, Response } from "express";

// Read Users
export const getUsers = async (req: Request, res: Response) => {
    res.send('Get user route working');
}

//Update User
export const updateUser = async (req: Request, res: Response ) => {
    res.send('UpdateUser route working');
}

//Create User
export const createUser = async (req: Request, res: Response) => {
    res.send('Create user route working');
}

//Delete User
export const deleteUser = async (req: Request, res: Response) => {
    res.send('Delete user route working');
}