import express from 'express';
import { addPlayer, getAll } from '../controllers/playerController';
let userRouter = express.Router();

//userRouter.post('/', addPlayer);
//userRouter.get('/', getAll);
export default userRouter;