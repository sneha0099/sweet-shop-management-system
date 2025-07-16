import { Router } from 'express';
import { addSweet } from '../controller/sweet.controller';
import { deleteSweet } from '../controller/sweet.controller';
import { getAllSweets } from '../controller/sweet.controller';
import { purchaseSweet } from '../controller/sweet.controller';

const sweetRoutes = Router();

sweetRoutes.post('/add', addSweet);
sweetRoutes.delete('/delete/:id', deleteSweet);
sweetRoutes.get('/', getAllSweets);
sweetRoutes.post('/purchase/:id', purchaseSweet);

export default sweetRoutes;
