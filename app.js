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
    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
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

    //obtener valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;


    if(titulo === '' || autor === '' || isbn === '' ){
        UI.mostrarAlerta('Por favor ingrese todos los datos','danger');
    }

    });

