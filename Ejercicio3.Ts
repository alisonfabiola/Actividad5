/**EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
-Crear un constructor que reciba como parámetros el título y género de la canción.
-Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
-Crea un método para mostrar los datos de la canción.  */

class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    //  getter y setter para el autor
    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    // mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.getAutor()}`);
    }
}


const cancion = new Cancion('Cancioncitas de amor ', 'Bachata');
cancion.setAutor('Romeo Santos');
cancion.mostrarDatos();
