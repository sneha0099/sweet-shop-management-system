import request from 'supertest';
import app from '../app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env.test') });
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI as string);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('DELETE /api/sweets/:id', () => {
  it('should delete a sweet by ID and  return 200', async () => {
    // First, create a sweet
    const createRes = await request(app).post('/api/sweets').send({
      name: 'Gulab Jamun',
      category: 'Milk-Based',
      price: 25,
      quantity: 10,
    });

    const sweetId = createRes.body._id;
    expect(createRes.statusCode).toBe(201);
    expect(sweetId).toBeDefined();

    // Now, delete the sweet
    const deleteRes = await request(app).delete(`/api/sweets/${sweetId}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body).toHaveProperty(
      'message',
      'Sweet deleted successfully'
    );
  });

  it('should return 404 if sweet not found', async () => {
    const fakeId = '64f000000000000000000000'; // valid format, non-existent
    const res = await request(app).delete(`/api/sweets/${fakeId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message', 'Sweet not found');
  });
});
