const request = require("supertest");
const app = require("../index");

describe("Task API", () => {

    test("GET /api/tasks", async() => {

        const res = await request(app).get("/api/tasks");

        expect(res.statusCode).toBe(200);
    });

});