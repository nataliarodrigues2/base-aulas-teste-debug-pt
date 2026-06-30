import app from "../../src/index.js";
import request from "supertest";
import { describe, test, expect } from "@jest/globals";

describe("Testes de API - Operações Matemáticas", () => {

    // SOMA
    test("POST /api/somar", async () => {
        const response = await request(app)
            .post("/api/somar")
            .send({ num1: 5, num2: 3 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(8);
    });

    test("POST /api/somar - erro", async () => {
        const response = await request(app)
            .post("/api/somar")
            .send({ num1: "batata", num2: 3 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

    // SUBTRAÇÃO
    test("POST /api/subtrair", async () => {
        const response = await request(app)
            .post("/api/subtrair")
            .send({ num1: 10, num2: 3 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(7);
    });

    test("POST /api/subtrair - erro", async () => {
        const response = await request(app)
            .post("/api/subtrair")
            .send({ num1: "banana", num2: 3 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

    // MULTIPLICAÇÃO
    test("POST /api/multiplicar", async () => {
        const response = await request(app)
            .post("/api/multiplicar")
            .send({ num1: 5, num2: 4 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(20);
    });

    test("POST /api/multiplicar - erro", async () => {
        const response = await request(app)
            .post("/api/multiplicar")
            .send({ num1: 5, num2: "morango" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

    // DIVISÃO
    test("POST /api/dividir", async () => {
        const response = await request(app)
            .post("/api/dividir")
            .send({ num1: 20, num2: 4 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(5);
    });

    test("POST /api/dividir - divisão por zero", async () => {
        const response = await request(app)
            .post("/api/dividir")
            .send({ num1: 10, num2: 0 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Não é possível dividir por zero");
    });

    test("POST /api/dividir - erro", async () => {
        const response = await request(app)
            .post("/api/dividir")
            .send({ num1: "abacaxi", num2: 2 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

    // POTÊNCIA
    test("POST /api/potencia", async () => {
        const response = await request(app)
            .post("/api/potencia")
            .send({ num1: 2, num2: 5 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(32);
    });

    test("POST /api/potencia - erro", async () => {
        const response = await request(app)
            .post("/api/potencia")
            .send({ num1: "batata", num2: 2 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

    // RAIZ
    test("POST /api/raiz", async () => {
        const response = await request(app)
            .post("/api/raiz")
            .send({ num1: 81 });

        expect(response.statusCode).toBe(200);
        expect(response.body.resultado).toBe(9);
    });

    test("POST /api/raiz - número negativo", async () => {
        const response = await request(app)
            .post("/api/raiz")
            .send({ num1: -9 });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Não é possível calcular a raiz quadrada de um número negativo");
    });

    test("POST /api/raiz - erro", async () => {
        const response = await request(app)
            .post("/api/raiz")
            .send({ num1: "melancia" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Enviar somente números");
    });

});