/*let edad = Number(prompt("Ingrese su edad con valor numerico:"));

if (edad < 18) {
    alert("Usted es menor de edad, entrara al sitio bajo su responsabilidad.");
}*/

let colores = [
    {
        color: "rojo",
        stock: true,
    },
    {
        color: "dorado",
        stock: true,
    },
    {
        color: "bronce",
        stock: true,
    },
    {
        color: "fucsia",
        stock: true,
    },
    {
        color: "gris",
        stock: false,
    },
    {
        color: "verde",
        stock: true,
    },
    {
        color: "turquesa",
        stock: true,
    },
    {
        color: "amarillo",
        stock: false,
    },
];



function verificarStock () {
    let select = document.getElementById("stockColores");
    for(let i = 0; i < colores.length; i++) {
        if (colores[i].color == select.value) {
            if (colores[i].stock) {
                document.querySelector("#respuesta").style.visibility = "visible";

                document.querySelector("#respuesta").value = "¡Si hay stock!";

                setTimeout(function(){
                    document.querySelector("#respuesta").style.visibility = "hidden";
                },2000)
            }
            if (!colores[i].stock) {
                document.querySelector("#respuesta").style.visibility = "visible";

                document.querySelector("#respuesta").value = "¡No hay stock!";

                setTimeout(function(){
                    document.querySelector("#respuesta").style.visibility = "hidden";
                },2000)
            }
        }
    }
}

var btnConsultar = document.querySelector(".btn-consultar");
btnConsultar.onclick = verificarStock;


window.onscroll = function () {
    if( document.documentElement.scrollTop > 100) {
        document.querySelector(".btn-subir-conteniner").style.opacity = "1";
        document.querySelector(".btn-subir").style.cursor = "pointer";
    } else {
        document.querySelector(".btn-subir-conteniner").style.opacity = "0";
        document.querySelector(".btn-subir").style.cursor = "default";
    }
}