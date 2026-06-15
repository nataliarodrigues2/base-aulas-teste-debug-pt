class Service {
    Somar(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Enviar somente números");
        }
        if (num2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return num1 / num2;
    }

    Potencia(base, expoente) {
        if (typeof base !== 'number' || typeof expoente !== 'number') {
            throw new Error("Enviar somente números");
        }
        return Math.pow(base, expoente); // Math.pow é uma função nativa do JavaScript que calcula a potência, elevando a 'base' ao valor do 'expoente'
    }

    Raiz(num) {
        if (typeof num !== 'number') {
            throw new Error("Enviar somente números");
        }
        if (num < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo");
        }
        return Math.sqrt(num); // Math.sqrt é uma função nativa do JavaScript que calcula e retorna a raiz quadrada (Square Root - SQRT) do número informado
    }
}

export default new Service()

// typeof serve para garantir que as funções só aceitem números, bloqueando textos, etc