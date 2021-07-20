import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/', userCtr.readAllUsers);
router.delete('/:id', checkToken, userCtr.delUser);
router.post('/add', userCtr.createUser);
router.put('/:id', checkToken, userCtr.updateUser);


export default router;