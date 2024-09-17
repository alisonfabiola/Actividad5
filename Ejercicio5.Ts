/**
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
-Crear un método constructor para recibir los datos.
-Crea un método que en base a la edad imprima un mensaje si es mayor de edad o
no.
-Crea   un   método   para   mostrar   todos   los   datos   personales   (será   el   método
abstracto).
-Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
-En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
-La clase Empleado va heredar de la clase Persona.
-Define un objeto de la clase Empleado y que se imprima los datos del empleado y
su sueldo.
 */

abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    //  verificar si es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    // Método abstracto para mostrar los datos
    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    public sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    //  cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    //  imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es $${this.sueldo}`);
    }

    // mostrar los datos
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
        this.esMayorDeEdad();
        this.imprimirSueldo();
    }
}


const empleado = new Empleado('Fabiola', 'Torres', 'Calle Las Flores 13', '7900-6428', 26, 1000);
empleado.mostrarDatos();
