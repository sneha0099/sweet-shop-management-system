import  Sweet  from '../models/sweet.model';

export const createSweet = async (data: {
  name: string;
  category: string;
  price: number;
  quantity: number;
}) => {
  try {
    const newSweet = await Sweet.create(data);
    return newSweet;
  } catch (err) {
    console.error('❌ Error creating sweet:', err);
    throw new Error('Error creating sweet');
  }
};