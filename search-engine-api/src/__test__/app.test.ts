import request from "supertest";

import app from "../app";

describe("Test app.ts", () => {
  test("Route / response ok", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual('Everything ok!');
  });
});