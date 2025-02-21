import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return 200 and the sum of two numbers", async () => {
    const response = await request(app).post("/sum").send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ answer: 3 });
  });
});
