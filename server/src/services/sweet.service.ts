import Sweet from '../models/sweet.model';

export const createSweet = async (data: {
  name: string;
  category: string;
  price: number;
  quantity: number;
}) => {
  try {
    const existingSweet = await Sweet.findOne({ name: data.name });
    if (existingSweet) {
      throw new Error('Sweet already exists');
    }
    const newSweet = await Sweet.create(data);
    return newSweet;
  } catch (err) {
    console.error('❌ Error creating sweet:', err);
    throw new Error('Error creating sweet');
  }
};

export const deleteSweetById = async (id: string) => {
  try {
    const deletedSweet = await Sweet.findByIdAndDelete(id);
    return deletedSweet;
  } catch (error) {
    console.error('❌ Error in deleteSweetById service:', error);
    throw new Error('Failed to delete sweet');
  }
};
