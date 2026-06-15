import Service from "../src/services/exercicios.js"

describe('Testes da Calculadora', () => {

    beforeAll(async () => {
        console.info('Iniciando testes da calculadora!');
    });

    afterAll(() => {
        console.info('Testes encerrados');
    });


    // Testes de Adição
    it('1: Deve somar 1 e 99 esperando retornar 100', () => {
        const result = Service.Somar(1, 99)
        expect(result).toBe(100);
    })
    it('2: Deve somar -1 e 99 esperando retornar 98', () => {
        const result = Service.Somar(-1, 99)
        expect(result).toBe(98);
    })
    it('3: Deve somar 1 e -99 esperando retornar -98', () => {
        const result = Service.Somar(1, -99)
        expect(result).toBe(-98);
    })
    it('4: Deve somar -1 e -99 esperando retornar -100', () => {
        const result = Service.Somar(-1, -99)
        expect(result).toBe(-100);
    })
    it('5: Deve somar 1.5 e 2.3 esperando retornar 3.8', () => {
        const result = Service.Somar(1.5, 2.3)
        expect(result).toBe(3.8);
    })
    it('6: Deve somar "batata" e 1 esperando retornar erro', () => {
        expect(() => Service.Somar('batata', 1)).toThrow("Enviar somente números");
    })
    it('7: Deve somar 1 e "batata" esperando retornar erro', () => {
        expect(() => Service.Somar(1, 'batata')).toThrow("Enviar somente números");
    })
    it('8: Deve somar 0 e 1 esperando retornar 1', () => {
        const result = Service.Somar(0, 1)
        expect(result).toBe(1);
    })
    it('9: Deve somar 1 e 0 esperando retornar 1', () => {
        const result = Service.Somar(1, 0)
        expect(result).toBe(1);
    })
    it('10: Deve somar 999999 e 1 esperando retornar 1000000', () => {
        const result = Service.Somar(999999, 1)
        expect(result).toBe(1000000);
    })


    // Testes de Subtração
    it('11: Deve subtrair 2 e 10 esperando retornar -8', () => {
        const result = Service.Subtrair(2, 10)
        expect(result).toBe(-8);
    })
    it('12: Deve subtrair 50 e 35 esperando retornar 15', () => {
        const result = Service.Subtrair(50, 35)
        expect(result).toBe(15);
    })
    it('13: Deve subtrair -10 e 5 esperando retornar -15', () => {
        const result = Service.Subtrair(-10, 5)
        expect(result).toBe(-15);
    })
    it('14: Deve subtrair 10 e -5 esperando retornar 15', () => {
        const result = Service.Subtrair(10, -5)
        expect(result).toBe(15);
    })
    it('15: Deve subtrair 2.6 e 3.7 esperando retornar -1.1', () => {
        const result = Service.Subtrair(2.6, 3.7)
        expect(result).toBe(-1.1);
    })
    it('16: Deve subtrair "banana" e 12 esperando retornar erro', () => {
        expect(() => Service.Subtrair('banana', 12)).toThrow("Enviar somente números");
    })
    it('17: Deve subtrair 17 e "banana" esperando retornar erro', () => {
        expect(() => Service.Subtrair(17, 'banana')).toThrow("Enviar somente números");
    })
    it('18: Deve subtrair 0 e 0 esperando retornar 0', () => {
        const result = Service.Subtrair(0, 0)
        expect(result).toBe(0);
    })
    it('19: Deve subtrair -7.5 e -2.5 esperando retornar -5', () => {
        const result = Service.Subtrair(-7.5, -2.5)
        expect(result).toBe(-5);
    })
    it('20: Deve subtrair 100 e 100 esperando retornar 0', () => {
        const result = Service.Subtrair(100, 100)
        expect(result).toBe(0);
    })


    // Testes de Multiplicação
    it('21: Deve multiplicar 10 e 2 esperando retornar 20', () => {
        const result = Service.Multiplicar(10, 2)
        expect(result).toBe(20);
    })
    it('22: Deve multiplicar -3 e 8 esperando retornar -24', () => {
        const result = Service.Multiplicar(-3, 8)
        expect(result).toBe(-24);
    })
    it('23: Deve multiplicar 7 e -9 esperando retornar -63', () => {
        const result = Service.Multiplicar(7, -9)
        expect(result).toBe(-63);
    })
    it('24: Deve multiplicar 8 e 0 esperando retornar 0', () => {
        const result = Service.Multiplicar(8, 0)
        expect(result).toBe(0);
    })
    it('25: Deve multiplicar 5.5 e 2.9 esperando retornar 15.95', () => {
        const result = Service.Multiplicar(5.5, 2.9)
        expect(result).toBe(15.95);
    })
    it('26: Deve multiplicar "morango" e 6 esperando retornar erro', () => {
        expect(() => Service.Multiplicar('morango', 6)).toThrow("Enviar somente números");
    })
    it('27: Deve multiplicar 6 e "morango" esperando retornar erro', () => {
        expect(() => Service.Multiplicar(6, 'morango')).toThrow("Enviar somente números");
    })
    it('28: Deve multiplicar 0 e 8 esperando retornar 0', () => {
        const result = Service.Multiplicar(0, 8)
        expect(result).toBe(0);
    })
    it('29: Deve multiplicar -4 e -6 esperando retornar 24', () => {
        const result = Service.Multiplicar(-4, -6)
        expect(result).toBe(24);
    })
    it('30: Deve multiplicar 1 e 999 esperando retornar 999', () => {
        const result = Service.Multiplicar(1, 999)
        expect(result).toBe(999);
    })


    // Testes de Divisão
    it('31: Deve dividir 10 e 2 esperando retornar 5', () => {
        const result = Service.Dividir(10, 2)
        expect(result).toBe(5);
    })
    it('32: Deve dividir -20 e 4 esperando retornar -5', () => {
        const result = Service.Dividir(-20, 4)
        expect(result).toBe(-5);
    })
    it('33: Deve dividir 15 e -3 esperando retornar -5', () => {
        const result = Service.Dividir(15, -3)
        expect(result).toBe(-5);
    })
    it('34: Deve dividir 0 e 5 esperando retornar 0', () => {
        const result = Service.Dividir(0, 5)
        expect(result).toBe(0);
    })
    it('35: Deve dividir 9 e 0 esperando retornar erro', () => {
        expect(() => Service.Dividir(9, 0)).toThrow("Não é possível dividir por zero");
    })
    it('36: Deve dividir "abacaxi" e 3 esperando retornar erro', () => {
        expect(() => Service.Dividir('abacaxi', 3)).toThrow("Enviar somente números");
    })
    it('37: Deve dividir 6 e "abacaxi" esperando retornar erro', () => {
        expect(() => Service.Dividir(6, 'abacaxi')).toThrow("Enviar somente números");
    })
    it('38: Deve dividir 5 e 2 esperando retornar 2.5', () => {
        const result = Service.Dividir(5, 2)
        expect(result).toBe(2.5);
    })
    it('39: Deve dividir 7.5 e 2.5 esperando retornar 3', () => {
        const result = Service.Dividir(7.5, 2.5)
        expect(result).toBe(3);
    })
    it('40: Deve dividir 100 e 25 esperando retornar 4', () => {
        const result = Service.Dividir(100, 25)
        expect(result).toBe(4);
    })


    // Testes de Potência
    it('41: Deve calcular a potencia de 2 e 3 esperando retornar 8', () => {
        const result = Service.Potencia(2, 3)
        expect(result).toBe(8);
    })
    it('42: Deve calcular a potencia de 5 e 0 esperando retornar 1', () => {
        const result = Service.Potencia(5, 0)
        expect(result).toBe(1);
    })
    it('43: Deve calcular a potencia de 10 e 2 esperando retornar 100', () => {
        const result = Service.Potencia(10, 2)
        expect(result).toBe(100);
    })
    it('44: Deve calcular a potencia de 3 e 4 esperando retornar 81', () => {
        const result = Service.Potencia(3, 4)
        expect(result).toBe(81);
    })
    it('45: Deve calcular a potencia de -2 e 3 esperando retornar -8', () => {
        const result = Service.Potencia(-2, 3)
        expect(result).toBe(-8);
    })
    it('46: Deve calcular a potencia de -2 e 4 esperando retornar 16', () => {
        const result = Service.Potencia(-2, 4)
        expect(result).toBe(16);
    })
    it('47: Deve calcular a potencia de 4 e -1 esperando retornar 0.25', () => {
        const result = Service.Potencia(4, -1)
        expect(result).toBe(0.25);
    })
    it('48: Deve calcular a potencia de 2 e -2 esperando retornar 0.25', () => {
        const result = Service.Potencia(2, -2)
        expect(result).toBe(0.25);
    })
    it('49: Deve calcular a potencia de 0 e 5 esperando retornar 0', () => {
        const result = Service.Potencia(0, 5)
        expect(result).toBe(0);
    })
    it('50: Deve calcular a potencia de 1 e 50 esperando retornar 1', () => {
        const result = Service.Potencia(1, 50)
        expect(result).toBe(1);
    })
    it('51: Deve calcular a potencia de 2.5 e 2 esperando retornar 6.25', () => {
        const result = Service.Potencia(2.5, 2)
        expect(result).toBe(6.25);
    })
    it('52: Deve calcular a potencia de -1 e 99 esperando retornar -1', () => {
        const result = Service.Potencia(-1, 99)
        expect(result).toBe(-1);
    })
    it('53: Deve calcular a potencia de -1 e 100 esperando retornar 1', () => {
        const result = Service.Potencia(-1, 100)
        expect(result).toBe(1);
    })
    it('54: Deve calcular a potencia de 9 e 0.5 esperando retornar 3', () => {
        const result = Service.Potencia(9, 0.5)
        expect(result).toBe(3);
    })
    it('55: Deve calcular a potencia de "batata" e 2 esperando retornar erro', () => {
        expect(() => Service.Potencia('batata', 2)).toThrow("Enviar somente números");
    })
    it('56: Deve calcular a potencia de 2 e "batata" esperando retornar erro', () => {
        expect(() => Service.Potencia(2, 'batata')).toThrow("Enviar somente números");
    })
    it('57: Deve calcular a potencia de "banana" e "morango" esperando retornar erro', () => {
        expect(() => Service.Potencia('banana', 'morango')).toThrow("Enviar somente números");
    })
    it('58: Deve calcular a potencia de 100 e 1 esperando retornar 100', () => {
        const result = Service.Potencia(100, 1)
        expect(result).toBe(100);
    })
    it('59: Deve calcular a potencia de 7 e 3 esperando retornar 343', () => {
        const result = Service.Potencia(7, 3)
        expect(result).toBe(343);
    })
    it('60: Deve calcular a potencia de 12 e 2 esperando retornar 144', () => {
        const result = Service.Potencia(12, 2)
        expect(result).toBe(144);
    })


    // Testes de Raiz
    it('61: Deve calcular a raiz quadrada de 9 esperando retornar 3', () => {
        const result = Service.Raiz(9)
        expect(result).toBe(3);
    })
    it('62: Deve calcular a raiz quadrada de 16 esperando retornar 4', () => {
        const result = Service.Raiz(16)
        expect(result).toBe(4);
    })
    it('63: Deve calcular a raiz quadrada de 25 esperando retornar 5', () => {
        const result = Service.Raiz(25)
        expect(result).toBe(5);
    })
    it('64: Deve calcular a raiz quadrada de 1 esperando retornar 1', () => {
        const result = Service.Raiz(1)
        expect(result).toBe(1);
    })
    it('65: Deve calcular a raiz quadrada de 0 esperando retornar 0', () => {
        const result = Service.Raiz(0)
        expect(result).toBe(0);
    })
    it('66: Deve calcular a raiz quadrada de 100 esperando retornar 10', () => {
        const result = Service.Raiz(100)
        expect(result).toBe(10);
    })
    it('67: Deve calcular a raiz quadrada de 144 esperando retornar 12', () => {
        const result = Service.Raiz(144)
        expect(result).toBe(12);
    })
    it('68: Deve calcular a raiz quadrada de 0.25 esperando retornar 0.5', () => {
        const result = Service.Raiz(0.25)
        expect(result).toBe(0.5);
    })
    it('69: Deve calcular a raiz quadrada de 2.25 esperando retornar 1.5', () => {
        const result = Service.Raiz(2.25)
        expect(result).toBe(1.5);
    })
    it('70: Deve calcular a raiz quadrada de -4 esperando retornar erro', () => {
        expect(() => Service.Raiz(-4)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
    })
    it('71: Deve calcular a raiz quadrada de -1 esperando retornar erro', () => {
        expect(() => Service.Raiz(-1)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
    })
    it('72: Deve calcular a raiz quadrada de -100 esperando retornar erro', () => {
        expect(() => Service.Raiz(-100)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
    })
    it('73: Deve calcular a raiz quadrada de "abacaxi" esperando retornar erro', () => {
        expect(() => Service.Raiz('abacaxi')).toThrow("Enviar somente números");
    })
    it('74: Deve calcular a raiz quadrada de "melancia" esperando retornar erro', () => {
        expect(() => Service.Raiz('melancia')).toThrow("Enviar somente números");
    })
    it('75: Deve calcular a raiz quadrada de 4 esperando retornar 2', () => {
        const result = Service.Raiz(4)
        expect(result).toBe(2);
    })
    it('76: Deve calcular a raiz quadrada de 36 esperando retornar 6', () => {
        const result = Service.Raiz(36)
        expect(result).toBe(6);
    })
    it('77: Deve calcular a raiz quadrada de 49 esperando retornar 7', () => {
        const result = Service.Raiz(49)
        expect(result).toBe(7);
    })
    it('78: Deve calcular a raiz quadrada de 64 esperando retornar 8', () => {
        const result = Service.Raiz(64)
        expect(result).toBe(8);
    })
    it('79: Deve calcular a raiz quadrada de 81 esperando retornar 9', () => {
        const result = Service.Raiz(81)
        expect(result).toBe(9);
    })
    it('80: Deve calcular a raiz quadrada de 121 esperando retornar 11', () => {
        const result = Service.Raiz(121)
        expect(result).toBe(11);
    })
    it('81: Deve calcular a raiz quadrada de 169 esperando retornar 13', () => {
        const result = Service.Raiz(169)
        expect(result).toBe(13);
    })
    it('82: Deve calcular a raiz quadrada de 400 esperando retornar 20', () => {
        const result = Service.Raiz(400)
        expect(result).toBe(20);
    })
    it('83: Deve calcular a raiz quadrada de 625 esperando retornar 25', () => {
        const result = Service.Raiz(625)
        expect(result).toBe(25);
    })
    it('84: Deve calcular a raiz quadrada de 900 esperando retornar 30', () => {
        const result = Service.Raiz(900)
        expect(result).toBe(30);
    })
    it('85: Deve calcular a raiz quadrada de 10000 esperando retornar 100', () => {
        const result = Service.Raiz(10000)
        expect(result).toBe(100);
    })

})