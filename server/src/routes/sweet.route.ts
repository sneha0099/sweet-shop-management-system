import { Router } from 'express';
import { addSweet } from '../controller/sweet.controller';
import { deleteSweet } from '../controller/sweet.controller';

const sweetRoutes = Router();

sweetRoutes.post('/', addSweet);
sweetRoutes.delete('/:id', deleteSweet);

export default sweetRoutes;