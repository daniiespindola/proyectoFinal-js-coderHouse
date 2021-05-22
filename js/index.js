let comensales1 = document.querySelector("#comensales");
let achuras1 = document.querySelector("#achuras");
let tipoDeCarne1 = document.querySelector("#tipoDeCarne");
let parrillero1 = document.querySelector("#parrillero");
let miFormulario = document.querySelector("#formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;


    const comensales = comensales1.value;
    const achuras = achuras1.value.toLowerCase();
    const tipoDeCarne = tipoDeCarne1.value.toLowerCase();
    const parrillero = parrillero1.value.toUpperCase();

    console.log(comensales, achuras, tipoDeCarne);

    function CalcularCarne () {
    this.coefAchura = 0;
    this.coefCerdo = 0;


    this.calculoCoefAchura = function() { //calcula coeficiente para el calculo de kg de achuras
        switch (achuras) {
            case "mucho":
            this.coefAchura = 0.3
            break;
            case "poco":
            this.coefAchura = 0.15
            break;
            default:
            this.coefAchura = 0
        }
    }
    this.calculoCoefCerdo = function() { //calcula coeficiente para el calculo de kg de cerdo
        switch (tipoDeCarne) {
            case "vaca":
            this.coefCerdo = 0
            break;
            case "mixto":
            this.coefCerdo = (1 - this.coefAchura)/2
            break;
            default:
            this.coefCerdo = 1 - this.coefAchura
        }
    //Lista con pedido, devuelve una lista con los parametros que selecciono el usuario para calcular las cantidades
    let pedido = [];
    console.log("Detalles del pedido:");
    pedido.push(comensales);
    pedido.push(achuras);
    pedido.push(tipoDeCarne);
    localStorage.setItem("1",JSON.stringify(pedido));
    console.log(localStorage);
    console.log("Lista finalizada");
}

this.calculadorCantidades = function() {
    let kgTotal = Math.round((comensales * 0.70)*1000)/1000
    let kgAchuras = Math.round((this.coefAchura * kgTotal)*1000)/1000
    let kgCarneCerdo = Math.round((this.coefCerdo * kgTotal)*1000)/1000
    let kgCarneVaca = Math.round((kgTotal - kgAchuras - kgCarneCerdo)*1000)/1000
   // console.log(`Para ${comensales} comensales la cantidad de carne es de ${kgTotal} Kg`);
    //console.log(`La cantidad de achuras es de ${kgAchuras} Kg`);
    //console.log(`La cantidad de carne de cerdo es de ${kgCarneCerdo} Kg`);
    //console.log(`La cantidad de carne de vaca es de ${kgCarneVaca} Kg`);
//prueba de calculadora
//++++++++++++++++++++++++++++++
//Calculador de precios achuras
      let precioChorizo = Math.round((kgAchuras / 4) * chorizo.precio);
      let precioMorcilla = Math.round((kgAchuras / 4) * morcilla.precio);
      let precioMolleja = Math.round((kgAchuras / 4) * molleja.precio);
      let precioChinchu = Math.round((kgAchuras / 4) * chinchu.precio);

      //Calculador de precios vaca
      let precioAsado = Math.round((kgCarneVaca / 3) * asado.precio);
      let precioEntrana = Math.round((kgCarneVaca / 3) * entrana.precio);
      let precioVacio = Math.round((kgCarneVaca / 3) * vacio.precio);

      //Calculador de precios cerdo
      let precioPechito = Math.round((kgCarneCerdo / 3) * pechito.precio);
      let precioMatambre = Math.round((kgCarneCerdo / 3) * matambre.precio);
      let precioBondiola = Math.round((kgCarneCerdo / 3) * bondiola.precio);
//fin de prueba de calculadora
//+++++++++++++++++++++++++++++++++++++++++
    swal(`${parrillero} para ${comensales} comensales la cantidad de carne es de ${kgTotal} Kg
       La cantidad de carne de vaca es:
        - ${asado.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioAsado}
        - ${entrana.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioEntrana}
        - ${vacio.id} -  Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioVacio}

        La cantidad de achuras es: 
       - ${chorizo.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChorizo}
       - ${morcilla.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMorcilla}
       - ${molleja.id} -  Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMolleja}
       - ${chinchu.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChinchu}

        La cantidad de carne de cerdo es:
        - ${pechito.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioPechito}
        - ${matambre.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioMatambre}
        - ${bondiola.id} -  Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioBondiola}
  
    
        Total del pedido: $${
          precioChinchu +
          precioChorizo +
          precioMolleja +
          precioMorcilla +
          precioAsado +
          precioEntrana +
          precioVacio + 
          precioPechito +
          precioMatambre + 
          precioBondiola
        }`, {
  buttons: ["Cerrar", "Comprar!"],
});;
     const nuevaSection = document.createElement("section");

nuevaSection.classList.add("item");
nuevaSection.setAttribute("class", "page-section bg-primary");

const div = document.createElement("div");
nuevaSection.appendChild(div);
div.setAttribute("class", "container");

const div2 = document.createElement("div");
nuevaSection.appendChild(div2);
div2.setAttribute("class", "row justify-content-center");

const div3 = document.createElement("div");
nuevaSection.appendChild(div3);
div3.setAttribute("class", "col-lg-8 text-center");

const h2 = document.createElement("h2");
h2.textContent =`${parrillero} estas son las cantidades`;
nuevaSection.appendChild(h2);
h2.setAttribute("class", "text-white mt-0");

const hr = document.createElement("hr");
nuevaSection.appendChild(hr);
hr.setAttribute("class", "divider light my-4");

const p = document.createElement("p");
nuevaSection.appendChild(p);
p.textContent = `Para ${comensales} comensales la cantidad de carne es de ${kgTotal} Kg
        La cantidad de achuras es: 
       - ${chorizo.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChorizo}
       - ${morcilla.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMorcilla}
       - ${molleja.id} -  Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioMolleja}
       - ${chinchu.id} - Cantidad: ${Math.round((kgAchuras / 4 * 100)) / 100}Kg Total: $${precioChinchu}

        La cantidad de carne de cerdo es:
        - ${pechito.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioPechito}
        - ${matambre.id} - Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioMatambre}
        - ${bondiola.id} -  Cantidad: ${Math.round((kgCarneCerdo / 3 * 100)) / 100}Kg Total: $${precioBondiola}

        La cantidad de carne de vaca es:
        - ${asado.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioAsado}
        - ${entrana.id} - Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioEntrana}
        - ${vacio.id} -  Cantidad: ${Math.round((kgCarneVaca / 3 * 100)) / 100}Kg Total: $${precioVacio}
  
        
        Total del pedido: $${
          precioChinchu +
          precioChorizo +
          precioMolleja +
          precioMorcilla +
          precioAsado +
          precioEntrana +
          precioVacio + 
          precioPechito +
          precioMatambre + 
          precioBondiola
        }`;

p.setAttribute("class", "text-white-50 mb-4")

const div4 = document.createElement("div");
nuevaSection.appendChild(div4);
div4.setAttribute("class", "divBoton");

const button = document.createElement("button");
div4.appendChild(button);
button.setAttribute("class", " btn btn btn-light btn-xl js-scroll-trigger botonComprar");
button.textContent = `Comprar`;

document.querySelector("#datos").appendChild(nuevaSection);
}
}



/*let carne = ["Asado", "Entraña", "Vacio"];
carne.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(carne);

let precio= [400, 600, 550];
precio.sort(function(a, b) {
  return a - b;
});
console.log(precio);*/



let calculadora = new CalcularCarne();

calculadora.calculoCoefAchura();
calculadora.calculoCoefCerdo();
calculadora.calculadorCantidades();


}

class Pedido{
    constructor (comensales1, achuras1, tipoDeCarne1){
        this.comensales1 = comensales1;
        this.achuras1 = achuras1;
        this.tipoDeCarne1 = tipoDeCarne1;
    }
}

const Pedido1 = new Pedido(comensales1, achuras1, tipoDeCarne1);

/*function imprimir() {  


const nuevoDiv = document.createElement("div");

nuevoDiv.classList.add("item");
nuevoDiv.setAttribute("class", "text-center ");

const h3 = document.createElement("h3");
h3.textContent = `La cantidad de comensales es ${comensales1.value}`;
nuevoDiv.appendChild(h3);
h3.setAttribute("class", "text-jxl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl text-indigo-800");

const p = document.createElement("p");
p.textContent = `Comen achuras: ${achuras1.value}`;
nuevoDiv.appendChild(p);
p.setAttribute("class", "mt-2 text-xl text-gray-600");

const p1 = document.createElement("p");
p1.textContent = `Tipo de carne elegida es: ${tipoDeCarne1.value}`;
nuevoDiv.appendChild(p1);
p1.setAttribute("class", "mt-2 text-xl text-gray-600");

document.querySelector("#datos").appendChild(nuevoDiv);

};

*/

  /* Back to top button
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

   const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  */

  