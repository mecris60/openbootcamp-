/*En este segundo ejercicio tendréis que crear dos clases:

Circulo

Rectángulo

las cuales deben de heredar de Figura.

Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).

Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).

Los atributos de estas clases deben ser públicos.*/


class Figura {
    constructor () {
        this.forma 
        console.log ("Soy un constructor de la clase padre Figura");
    }

    pintar() {
        console.log ("Figura pintada");
    }

}

class Circulo extends Figura {
    constructor(radio, color) {
        super();
        this.radio = radio
        this.color = color
        console.log (`Soy un círculo de radio ${radio} y de color ${color}`)
    }
}


class Rectangulo extends Figura {
    constructor(base, color, altura) {
        super();
        this.base = base
        this.color = color
        this.altura = altura
        console.log (`Soy un rectángulo de base ${base}, color ${color} y altura ${altura}`)
    }
}

const miCirculo = new Circulo (20,"yellow")
miCirculo.pintar()
miCirculo.forma = "ovalada"
console.log(miCirculo.forma)


const mirectangulo = new Rectangulo (20,"Red",50)
mirectangulo.pintar()
