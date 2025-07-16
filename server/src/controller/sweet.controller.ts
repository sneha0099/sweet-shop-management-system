import { Request, Response } from 'express';
import { createSweet } from '../services/sweet.service';
import { deleteSweetById } from '../services/sweet.service';

export const addSweet = async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;
    const newSweet = await createSweet({ name, category, price, quantity });
    res.status(201).json(newSweet);
  } catch (err: any) {
    if (err.message === 'Sweet already exists') {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteSweet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Attempt to delete the sweet
    const deletedSweet = await deleteSweetById(id);

    // If not found, return 404
    if (!deletedSweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    // Success
    return res.status(200).json({
      message: 'Sweet deleted successfully',
      data: deletedSweet,
    });
  } catch (error) {
    console.error('❌ Error deleting sweet:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
