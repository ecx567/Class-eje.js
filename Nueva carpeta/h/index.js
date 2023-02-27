class Funciones {
  // 1) Sumar dos numeros siempre cuando el promero sea mayor al segundo
  static sumarMayor(num1, num2) {
    if (num1 > num2) {
      return num1 + num2;
    } else {
      return "El primer número no es mayor al segundo número.";
    }
  }
 
  // 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
  static operacion(num1, num2, operador) {
    switch (operador) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
      default:
        return "Operador inválido.";
    }
  }

  // 3) Presentar el mayor de dos numeros
  static mayor(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // 4) Dado un nombre presentarlo
  static presentarNombre(nombre) {
    return "El nombre es " + nombre + ".";
  }

  // 5) Dado un valor de compra presentar el total considerando un 12% de iva
  static calcularTotal(valor) {
    const iva = 0.12;
    const total = valor * (1 + iva);
    return "El total con IVA es $" + total + ".";
  }

  // 6) Presentar 5 veces un nombre
  static presentarNombreCincoVeces(nombre) {
    let resultado = "";
    for (let i = 0; i < 5; i++) {
      resultado += nombre + " ";
    }
    return resultado;
  }

  // 7) Presentar los numeros multiplos de 3 del 3 al 21
  static multiplosDeTresDeTresAVeintiuno() {
    let resultado = "";
    for (let i = 3; i <= 21; i++) {
      if (i % 3 === 0) {
        resultado += i + " ";
      }
    }
    return resultado;
  }

  // 8) Presentar los numeros multiplos de 3 del 21 al 3
  static multiplosDeTresDeVeintiunoATres() {
    let resultado = "";
    for (let i = 21; i >= 3; i--) {
      if (i % 3 === 0) {
        resultado += i + " ";
      }
    }
    return resultado;
  }

  // 9) Dados dos nombres indicar si son iguales o diferentes
  static compararNombres(nombre1, nombre2) {
    if (nombre1 === nombre2) {
      return "Los nombres son iguales.";
    } else {
      return "Los nombres son diferentes.";
    }
  }

  // 10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
  static numerosMenosDeCincoCaracteres(numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i].toString().length < 5) {
        resultado.push(numeros[i]);
      }
    }
    return resultado;
  }


}
//1//
/*console.log(Funciones.sumarMayor(5, 2)); // Devuelve 7
console.log(Funciones.sumarMayor(2, 5)); // Devuelve "El primer número no es mayor al segundo número."*/

//2//
/*console.log(Funciones.operacion(5, 2, "+")); // Devuelve 7
console.log(Funciones.operacion(5, 2, "-")); // Devuelve 3
console.log(Funciones.operacion(5, 2, "*")); // Devuelve 10
console.log(Funciones.operacion(5, 2, "/")); // Devuelve 2.5
console.log(Funciones.operacion(5, 2, "%")); // Devuelve 1
console.log(Funciones.operacion(5, 2, "^")); // Devuelve "Operador inválido."*/


//3//
/*console.log(Funciones.mayor(5, 2)); // Devuelve 5
console.log(Funciones.mayor(2, 5)); // Devuelve 5*/



//4//
/*console.log(Funciones.presentarNombre("Juan")); // Devuelve "El nombre es Juan."*/


//5//
/*console.log(Funciones.calcularTotal(100)); // Devuelve "El total con IVA es $112."*/


//6//
/*console.log(Funciones.presentarNombreCincoVeces("Juan")); // Devuelve "Juan Juan Juan Juan Juan "*/


//7//
/*console.log(Funciones.multiplosDeTresDeTresAVeintiuno()); // Devuelve "3 6 9 12 15 18 21 "*/


//8//
/*console.log(Funciones.multiplosDeTresDeVeintiunoATres()); // Devuelve "21 18 15 12 9 6 3 "*/


//9//
/*console.log(Funciones.compararNombres("Juan", "Juan")); // Devuelve "Los nombres son iguales."
console.log(Funciones.compararNombres("Juan", "Pedro")); // Devuelve "Los nombres son diferentes."*/

//10//
/*const numeros = [12, 345, 67, 890, 1234, 5, 6, 789, 1011, 121314];
console.log(Funciones.numerosMenosDeCincoCaracteres(numeros));*/

class Misarreglos {
  // 11) Dado un arreglo presentar sus elementos
  static presentarElementos(arreglo) {
    return arreglo.join(", ");
  }

  // 12) Dado un arreglo de numeros presentar los menores a 10
  static menoresA10(arreglo) {
    return arreglo.filter(num => num < 10);
  }

  // 13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
  static separarImparesYSumarPares(arreglo) {
    let impares = [];
    let sumaPares = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 !== 0) {
        impares.push(arreglo[i]);
      } else {
        sumaPares += arreglo[i];
      }
    }
    return "Impares: " + impares.join(", ") + "\nSuma de Pares: " + sumaPares;
  }

  

  // 14) Presentar el primero el medio y el ultimo valor de un arreglo
  static presentFirstMiddleLast(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
    const middleValue = length % 2 === 0 ? (array[middleIndex - 1] + array[middleIndex]) / 2 : array[middleIndex];
    console.log(`First: ${array[0]}, Middle: ${middleValue}, Last: ${array[length - 1]}`);
  }

  // 15) Calcular el vuelto de un a compra dado el costo y el pago
  static calcularVuelto(costo, pago) {
    const vuelto = pago - costo;
    if (vuelto < 0) {
      return "Pago insuficiente.";
    } else {
      return "Vuelto: $" + vuelto.toFixed(2);
    }
  }
}

//11//
/*const arreglo = ["a", "b", "c", "d", "e"];

console.log(Misarreglos.presentarElementos(arreglo));
// Resultado: "a, b, c, d, e"*/

//12//
/*const numeros = [2, 5, 12, 7, 1, 9, 4];

console.log(Misarreglos.menoresA10(numeros));*/
// Resultado: [2, 5, 7, 1, 9, 4]

//-13//
/*const arregloNumeros = [2, 4, 7, 8, 9, 10, 12];
console.log(Misarreglos.separarImparesYSumarPares(arregloNumeros));*/

//14//
/*const myArray = [1, 2, 3, 4, 5];
Misarreglos.presentFirstMiddleLast(myArray);*/

//15//

/*console.log(Misarreglos.calcularVuelto(12.50, 20));
// Resultado: "Vuelto: $7.50"*/



class Operacionesciclos {
  static tablaMultiplicar(num) {
    for (let i = 1; i <= 12; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }

  static multiplicacionSumas(n1, n2) {
    let resultado = 0;
    for (let i = 0; i < n2; i++) {
      resultado += n1;
    }
    console.log(`${n1} x ${n2} = ${resultado}`);
  }

  static divisionRestas(n1, n2) {
    let cociente = 0;
    let resto = n1;
    while (resto >= n2) {
      resto -= n2;
      cociente++;
    }
    console.log(`${n1} / ${n2} = ${cociente} (resto ${resto})`);
  }

  static factorial(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    console.log(`${num}! = ${resultado}`);
  }

  static exponente(num, exp) {
    let resultado = 1;
    for (let i = 0; i < exp; i++) {
      resultado *= num;
    }
    console.log(`${num}^${exp} = ${resultado}`);
  }

  // Función para calcular la serie de fibonacci hasta un número dado
  static fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);
  }

  // Función para invertir un número
  static reverseNum(num) {
    let reversed = num.toString().split("").reverse().join("");
    console.log(parseInt(reversed));
  }

  // Función para presentar los divisores de un número
  static getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    console.log(divisors);
  }

  // Función para verificar si un número es perfecto o no
  static isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num) {
      console.log(`${num} es un número perfecto`);
    } else {
      console.log(`${num} no es un número perfecto`);
    }
  }

  // Función para verificar si un número es primo o no
  static isPrime(num) {
    let prime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(`${num} es un número primo`);
    } else {
      console.log(`${num} no es un número primo`);
    }
  }
}

//16//
/*Operacionesciclos.tablaMultiplicar(5);
// ejemplo de uso: Presentar la tabla de multiplicar del número 5*/

//17//
/*Operacionesciclos.multiplicacionSumas(5, 3);
// ejemplo de uso: Realizar la multiplicación de 5 x 3 por medio de sumas sucesivas*/

//18//
/*Operacionesciclos.divisionRestas(5, 2);
// ejemplo de uso: Realizar la división de 5 / 2 por medio de restas sucesivas*/


//19//
/*Operacionesciclos.factorial(4);
// ejemplo de uso: Calcular el factorial de 4*/

//20//
/*Operacionesciclos.exponente(4, 3);
// ejemplo de uso: Calcular el exponente de 4 elevado a la potencia de 3*/

//21//

// Ejemplo de uso de la función fibonacci
/*Operacionesciclos.fibonacci(3); // output: [0, 1, 1, 2, 3, 5, 8, 13]*/

//22//
// Ejemplo de uso de la función reverseNum
/*Operacionesciclos.reverseNum(12356); // output: 65321*/

//23//
// Ejemplo de uso de la función getDivisors
/*Operacionesciclos.getDivisors(8); // output: [1, 2, 4, 8]*/

//24//
// Ejemplo de uso de la función isPerfect
/*Operacionesciclos.isPerfect(6); // output: 6 es un número perfecto*/

//25//
// Ejemplo de uso de la función isPrime
/*Operacionesciclos.isPrime(5); // output: 5 es un número primo*/









                                    