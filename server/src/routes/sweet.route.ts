import { Router } from 'express';
import { addSweet } from '../controller/sweet.controller';
import { deleteSweet } from '../controller/sweet.controller';
import { getAllSweets } from '../controller/sweet.controller';
import { purchase } from '../controller/sweet.controller';

const sweetRoutes = Router();

sweetRoutes.post('/add', addSweet);
sweetRoutes.delete('/delete/:id', deleteSweet);
sweetRoutes.get('/', getAllSweets);
sweetRoutes.post('/purchase/:id', purchase);

export default sweetRoutes;
