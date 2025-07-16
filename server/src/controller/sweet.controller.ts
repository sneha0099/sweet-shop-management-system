import { Request, Response } from 'express';
import { createSweet } from '../services/sweet.service';

export const addSweet = async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;
    const newSweet = await createSweet({ name, category, price, quantity });
    res.status(201).json(newSweet);
  } catch (err) {
    console.error('❌ Error creating sweet:', err);
    res.status(500).json({ message: 'Error creating sweet' });
  }
};