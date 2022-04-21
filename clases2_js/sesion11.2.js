/*Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.

Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.

Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales.*/

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

    calcularArea(){
        return -1;
    }
}

class Circulo extends Figura {
    constructor(radio, color) {
        super(color);
        this._radio = radio;
        
    }

    get radio(){
        return this._radio;
    }

    set radio(radio){
        this._radio =radio;
    }

    calcularArea(){
        return (Math.PI*Math.pow(this._radio,2)).toFixed(2);
    }
}

class Rectangulo extends Figura {
    constructor(base, color, altura) {
        super(color);
        this._base = base
        this._altura = altura
        
    }

    get base(){
        return this._base;
    }

    set base(base){
        this._base =base;
    }

    get altura(){
        return this._altura;
    }

    set altura(altura){
        this._base =altura;
    }

    calcularArea(){
        return this._altura*this._base;
    }

}

const circulo =new Circulo (10, "blanco");
console.log(circulo);
console.log(circulo.calcularArea())

const rectangulo =new Rectangulo (5, "blanco",15);
console.log(rectangulo);
console.log(rectangulo.calcularArea())