export interface Sweet {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export type NewSweet = Omit<Sweet, "_id">;

const API_URL = import.meta.env.VITE_BACKEND_URL;

// API service
export const sweetService = {
  async getAllSweets(queryString: string = "") {
    const res = await fetch(`${API_URL}${queryString}`);
    

    if (!res.ok) {
      throw new Error("Failed to fetch sweets");
    }

    const data = await res.json();
    return data; // TypeScript will infer this as Sweet[]
  },
};

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  return data; // TypeScript will infer this as Sweet[]
};

export const addSweet = async (sweet: NewSweet): Promise<Sweet> => {
  
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sweet),
  });

  if (!res.ok) {
    throw new Error("Failed to add sweet");
  }

  const data = await res.json();
  return data; // TypeScript will infer this as Sweet
};

export const deleteSweet = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete sweet");
  }
};

export const purchasetheSweet = async (id: string, quantity: number) => {
  const res = await fetch(`${API_URL}/purchase/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) {
    throw new Error("Failed to purchase sweet");
  }

  return res.json();
};

export const restocktheSweet = async (id: string, quantity: number) => {
  const res = await fetch(`${API_URL}/restock/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) {
    throw new Error("Failed to restock sweet");
  }

  return await res.json();
};
