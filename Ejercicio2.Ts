/**
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
-Sumar
-Restar
-Multiplicar
-Dividir
-Potencia
-Factorial
 */

class Calculadora {
    //  sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    //  restar
    restar(a: number, b: number): number {
        return a - b;
    }

    // multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // dividir
    dividir(a: number, b: number): number {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("No se puede dividir por cero.");
        }
    }

    //  calcular la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // calcular el factorial
    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }
}


const calculadora = new Calculadora();
console.log(calculadora.sumar(6, 3));
console.log(calculadora.factorial(5));
