import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes in here already start with /users
router.get('/', getUsers);

router.post('/', createUser);

//users/id => req.params {id:2}
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

//patch (update) - put is to change EVERYTHING
router.patch('/:id', updateUser);

export default router;