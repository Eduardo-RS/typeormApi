"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserbyID = exports.getUsers = exports.createUser = void 0;
const user_entity_1 = require("../database/entities/user.entity");
//Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { userName, lastName } = req.body;
        if (!userName || !lastName) {
            throw new Error(`${userName} & ${lastName} are not be empty`);
        }
        // Create the user
        const newUser = new user_entity_1.User();
        newUser.userName = userName;
        newUser.lastName = lastName;
        yield newUser.save();
        console.log(newUser);
        // res.send("Create user route working");
        // Response to client
        return res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createUser = createUser;
// Read Users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield user_entity_1.User.find();
    return res.json(userList);
});
exports.getUsers = getUsers;
//Read User by ID
const getUserbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(typeof parseInt(id));
    const result = yield user_entity_1.User.findOneBy({ userID: parseInt(req.params.id) });
    if (!result)
        return res.status(404).json({ message: "User doest not exists", user: result });
    return res.json(result);
});
exports.getUserbyID = getUserbyID;
//Update User
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params); // Me trae el ID { id: '1' }
    console.log(req.body); // Me regresa el json { userName: 'Anayely', lastName: 'Saldana' }
    const { id } = req.params;
    console.log(typeof id);
    const user = yield user_entity_1.User.findOneBy({ userID: parseInt(req.params.id) });
    if (!user)
        return res.status(404).json({ message: "User does not exist" });
    yield user_entity_1.User.update({ userID: parseInt(id) }, req.body);
    res.json(user);
});
exports.updateUser = updateUser;
//Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { i } = req.params;
    const user = yield user_entity_1.User.findOneBy({ userID: parseInt(req.params.id) });
    yield user_entity_1.User.delete({ userID: parseInt(req.params.id) });
    console.log(user);
    res.send(user);
    //   res.send("Delete user route working");
});
exports.deleteUser = deleteUser;
