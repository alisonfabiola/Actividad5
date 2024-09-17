/*EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades  */

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    //  Obtener el título, color y fuente de la página
    obtenerPropiedades(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    // Indicar la alineación del título
    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): string {
        return `El título aparecerá alineado a la ${alineacion}.`;
    }

    // Imprimir las propiedades
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
}


const cabecera = new CabeceraPagina('Mi Página', 'Amarillo', 'Arial');
console.log(cabecera.obtenerPropiedades());
console.log(cabecera.establecerAlineacion('derecha'));
cabecera.imprimirPropiedades();

