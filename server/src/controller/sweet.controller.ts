import { Request, Response } from 'express';
import { createSweet } from '../services/sweet.service';
import { deleteSweetById } from '../services/sweet.service';
import { getSweets } from '../services/sweet.service';

export const addSweet = async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;
    console.log(name, category, price, quantity);

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

export const getAllSweets = async (req: Request, res: Response) => {
  try {
    const {
      name,
      category,
      minPrice,
      maxPrice,
      sortBy,
      order = 'asc',
      page = '1',
      limit = '10',
    } = req.query;

    const filters = {
      name: name as string,
      category: category as string,
      minPrice: minPrice ? parseFloat(minPrice as string) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice as string) : undefined,
    };

    const pagination = {
      page: parseInt(page as string, 10),
      limit: parseInt(limit as string, 10),
    };

    const sort = {
      sortBy: sortBy as string,
      order: order as string,
    };

    const { sweets, total } = await getSweets(filters, pagination, sort);

    res.status(200).json({
      sweets,
      total,
      page: pagination.page,
      totalPages: Math.ceil(total / pagination.limit),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sweets' });
  }
};
