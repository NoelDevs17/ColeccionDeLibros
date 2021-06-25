//Definiendo clases
class Libro{
    constructor (titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}

class UI{
    static mostrarLibros(){

    }
    static agregarLibroLista(){

    }
    static eliminarLibro(){

    }
    static mostrarAlerta(mensaje){

    }

    static limpiarCampos(){

    }
}

class Datos {
    static traerLibros(){

    }

    static agregarLibro(libro){

    }

    static removerLirbo(isbn){
        
    }
}

//controlar event submit
document.querySelector('#libro-form').addEventListener('submit', (e) => {
    e.preventDefault();
});