import Sweet from '../models/sweet.model';

interface Filters {
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface Pagination {
  page: number;
  limit: number;
}

interface Sort {
  sortBy?: string;
  order?: string;
}

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

export const getSweets = async (
  filters: Filters,
  pagination: Pagination,
  sort: Sort
) => {
  try {
    const query: any = {};

    if (filters.name) {
      query.name = { $regex: filters.name, $options: 'i' };
    }

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      query.price = {};
      if (filters.minPrice !== undefined) {
        query.price.$gte = filters.minPrice;
      }
      if (filters.maxPrice !== undefined) {
        query.price.$lte = filters.maxPrice;
      }
    }

    const skip = (pagination.page - 1) * pagination.limit;

    // Default sort is by name ascending
    const sortField = sort.sortBy || 'name';
    const sortOrder = sort.order === 'desc' ? -1 : 1;

    const sweets = await Sweet.find(query)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(pagination.limit);

    const total = await Sweet.countDocuments(query);

    return { sweets, total };
  } catch (error) {
    console.error('❌ Error fetching sweets:', error);
    throw new Error('Error fetching sweets');
  }
};

export const purchase = async (id: string, quantity: number) => {
  try {
    const sweet = await Sweet.findById(id);

    if (!sweet) {
      throw new Error('Sweet not found');
    }

    if (sweet.quantity < quantity) {
      throw new Error('Not enough stock');
    }

    sweet.quantity -= quantity;
    await sweet.save();

    return sweet;
  } catch (error) {
    throw error;
  }
};

export const restock = async (id: string, quantity: number) => {
  try {
    const sweet = await Sweet.findById(id);
    if (!sweet) return null;

    sweet.quantity += quantity;
    await sweet.save();

    return sweet;
  } catch (error) {
    console.error('❌ Error restocking sweet:', error);
    throw error;
  }
};
