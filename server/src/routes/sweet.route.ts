import { Router } from 'express';
import { addSweet } from '../controller/sweet.controller';
import { deleteSweet } from '../controller/sweet.controller';
import { getAllSweets } from '../controller/sweet.controller';

const sweetRoutes = Router();

sweetRoutes.post('/', addSweet);
sweetRoutes.delete('/:id', deleteSweet);
sweetRoutes.get('/', getAllSweets);

export default sweetRoutes;
