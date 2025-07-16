import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Sweet from '../models/sweet.model';

dotenv.config({ path: '.env.test' });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI as string);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('GET /api/sweets', () => {
  beforeEach(async () => {
    // Seed database with test data
    await Sweet.create([
      { name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 10 },
      { name: 'Gulab Jamun', category: 'Milk-Based', price: 30, quantity: 15 },
    ]);
  });

  afterEach(async () => {
    await Sweet.deleteMany(); // Clean up after each test
  });

  it('should return a list of all sweets with status 200', async () => {
    const res = await request(app).get('/api/sweets');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);

    const sweetNames = res.body.map((s: any) => s.name);
    expect(sweetNames).toContain('Kaju Katli');
    expect(sweetNames).toContain('Gulab Jamun');
  });
});
