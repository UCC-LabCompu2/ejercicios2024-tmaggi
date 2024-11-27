/**
 * conversion de unidades
 * @method cambiarunidades
 * @param {string} id
 * @param {number} valor
 * @return
 */

function cambiarunidades(id, valor){
    var metro, pulgada, pie , yarda;
    if(valor.include(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        metro = "";
        pulgada = "";
        pie= "";
        yarda = "";
    }else if(id== "metro"){
        metro = valor
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }
    else if(id== "pulgada"){
        pulgada = valor
        metro = 0.0254*valor;
        pie = 0.08333333*valor;
        yarda = 0.02777778*valor;
    }
    else if(id== "pie"){
        pie = valor
        metro = 0.3048*valor;
        pulgada= 12*valor;
        yarda = 0.33333333*valor;
    }
    else if(id== "yarda"){
        yarda = valor
        metro = 0.9144*valor;
        pie= 3*valor;
        pulgada = 36*valor;
    }
    document.getElementById("metro").value = (Math.round(metro*100))/100;
    document.getElementById("pulgada").value = (Math.round(pulgada*100))/100;
    document.getElementById("pie").value = (Math.round(pie*100))/100;
    document.getElementById("yarda").value = (Math.round(yarda*100))/100;
}

function convertirgr(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }
    else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostarocultar(valorMO) {
    if(valorMO== "val_mostrar"){
        document.getElementById("divMo").style.display= 'block';
    }
    else if(valorMO== "val_ocultar"){
        document.getElementById("divMo").style.display= 'none';
    }
}
function calcularsuma() {
    var num1, num2

    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML= Number(num1) + Number(num2);
}

function calcularresta() {
    var num1, num2

    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= Number(num1) - Number(num2);
}

function calcularmult() {
    var num1, num2

    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= Number(num1) * Number(num2);
}

function calculardiv() {
    var num1, num2

    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= Number(num1) / Number(num2);
}

function cargarweb(){
    var cant, unidad, urlcomp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlcomp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);

}

function cargarresultado(){
    var urlcomp , can , un;

    urlcomp = window.location.href.split("/")[5];
    can = urlcomp.split("#")[1];
    un = urlcomp.split("#")[2];

    document.getElementById("dist").value = can + ""+ un;
}