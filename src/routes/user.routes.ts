
import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller";

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;