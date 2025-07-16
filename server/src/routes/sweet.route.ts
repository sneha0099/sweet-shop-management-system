import { Router } from 'express';
import { addSweet } from '../controller/sweet.controller';

const sweetRoutes = Router();

sweetRoutes.post('/', addSweet);

export default sweetRoutes;