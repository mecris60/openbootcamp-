
//En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color

//El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

//Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).


class Figura {
    
    constructor(color) {
        this._color = color;
    }

    get color(){
        return "Mi figura es de color " + this._color;
    }

    set color(color){
        this._color=color;
    }
}

const miFigura =new Figura ("rojo");
console.log (miFigura.color) 
miFigura.Color= "azul";
console.log (miFigura.color)