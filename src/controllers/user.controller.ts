import { User } from "../database/entities/user.entity";
import { Request, Response } from "express";

//Create User
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { userName, lastName } = req.body;

    if (!userName || !lastName) {
      throw new Error(`${userName} & ${lastName} are not be empty`);
    }

    // Create the user
    const newUser = new User();
    newUser.userName = userName;
    newUser.lastName = lastName;
    await newUser.save();
    console.log(newUser);
    // res.send("Create user route working");

    // Response to client
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// Read Users
export const getUsers = async (req: Request, res: Response) => {
  const userList = await User.find();
  return res.json(userList);
};

//Read User by ID
export const getUserbyID = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(typeof parseInt(id));
  const result = await User.findOneBy({ userID: parseInt(req.params.id) });
  if (!result)
    return res.status(404).json({ message: "User doest not exists", user: result });
  return res.json(result);
};

//Update User
export const updateUser = async (req: Request, res: Response) => {
  console.log(req.params); // Me trae el ID { id: '1' }
  console.log(req.body); // Me regresa el json { userName: 'Anayely', lastName: 'Saldana' }
  const { id } = req.params;
  console.log(typeof id);

  const user = await User.findOneBy({ userID: parseInt(req.params.id) });
  if (!user) return res.status(404).json({ message: "User does not exist" });

  await User.update({ userID: parseInt(id) }, req.body);

  res.json(user);
};

//Delete User
export const deleteUser = async (req: Request, res: Response) => {
  console.log(req.params);
  const { i } = req.params;

  const user = await User.findOneBy({ userID: parseInt(req.params.id) });
  await User.delete({ userID: parseInt(req.params.id) });
  console.log(user);
  res.send(user);
  //   res.send("Delete user route working");
};
