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
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
const user_1 = require("../entity/db-two/user");
const index_1 = require("../index");
let usersRepository;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const users = yield usersRepository.find();
    return res.json(users);
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const newUser = yield usersRepository.create(req.body);
    const result = yield usersRepository.save(newUser);
    return res.json(result);
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const user = yield usersRepository.findOne(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    return res.json(user);
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const user = yield usersRepository.findOne(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    usersRepository.merge(user, req.body);
    const result = yield usersRepository.save(user);
    return res.json(result);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    geraRepository();
    const user = yield usersRepository.findOne(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    yield usersRepository.delete(req.params.id);
    return res.status(200).json({ message: 'Deleted successfully' });
});
exports.deleteUser = deleteUser;
function geraRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.connectionDbTWo.then((connect) => __awaiter(this, void 0, void 0, function* () {
            usersRepository = connect.getRepository(user_1.User);
        }));
    });
}
