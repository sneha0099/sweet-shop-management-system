import request from "supertest";
import app from "../app";
import dotenv from "dotenv";    
import mongoose from "mongoose";

dotenv.config();
beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_TEST_URI as string);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Post /api/sweets", () => {
    it("should return sweet status 201", async () => {
        const res = await request(app).post("/api/sweets").send({
            name: "kaju katli",
            category: "Nut-Based",
            price: 50,
            quantity: 20,
            
        })
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "kaju katli");
    });

})