

class Productos {

    constructor({
        nombrePP,
        categoriaPP,
        precioPP,
        stockPP,
        validoPP
    }){
        this.nombre = nombrePP;
            this.categoria = categoriaPP;
            this.precio = precioPP;
            this.stock = stockPP;
            this.disponible = validoPP;
    }

    comprar(cantidad){
        if(this.stock <= 0) {
            console.log("no tenemos stock");
            this.disponible = false
        } else {
        this.stock = this.stock - cantidad
        console.log(`Compraste ${cantidad} ${this.nombre}, valor ${this.precio * cantidad}`);
        }
    }

    cuotas(cantidad){
        console.log(`compraste en ${cantidad} de cuotas`);
    }


}

const producto1 = new Productos({
    nombrePP: "Remera",
    categoriaPP: "Prendas Superiores",
    precioPP:1300,
    stockPP:10,
    validoPP:true,
})

const producto2 = new Productos ({
    nombrePP: "Pantalon",
    categoriaPP: "Prendas Inferiores",
    precioPP:2500,
    stockPP:8,
    validoPP:true,
})

console.log(producto1);

console.log(producto1.comprar(1));

console.log(producto2);

console.log(producto2.comprar(2));

console.log(producto1);
console.log(producto2);


