
function convertir() {
    // --------------------------------------------------decimal a octal-----------------------------------------------------
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "octal2") {
        decimalOctal()
    }
    // ------------------------------------------------OCTAL A DECIMAL---------------------------------------------------------
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "decimal2") {
        octalDecimal()
    }
    // --------------------------------------------decimal a hexadecimal-------------------------------------------------------------
    else if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "hexadecimal2") {
        decimalHexadecimal()
    }
    // ---------------------------------------------HEXADECIMAL A DECIMAL------------------------------------------------
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "decimal2") {
        hexadecimalDecimal()
    }
    //--------------------------------------------- decimal a binario----------------------------------------------------
    else if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "binario2") {
        decimalBinario()
    }
    // ----------------------------------------------BINARIO A DECIMAL-------------------------------------------
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "decimal2") {
        binarioDecimal()
    }
    // -------------------------------------------octal a hexadecimal-----------------------------------------
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "hexadecimal2") {
        octalHexadecimal()
    }
    // ------------------------------------------HEXADECIMAL A OCTAL----------------------------------
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "octal2") {
        hexadecimalOctal()
    }
    // --------------------------------------OCTAL A BINARIO-----------------------------------
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "binario2") {
        octalBinario()
    }
    // -----------------------------------------BINARIO A OCTAL------------------------------------------------------------------------
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "octal2") {
        binarioOctal()
    }
    // -------------------------------------HEXADECIMAL A BINARIO------------------------------------------------

    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "binario2") {
        hexadecimalBinario()
    }
    // ---------------------------------BINARIO A HEXADECIMAL----------------------------------
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "hexadecimal2") {
        binarioHexadecimal()
    } else {
        validaciones()
    }
}
// ------------------------------------------DECIMAL A OCTAL-----------------------------------
function decimalOctal() {
    let re = 0
    let res = []
    let pedirNum = document.getElementById("numero").value;
    let division = pedirNum;
    while (division > 0) {
        re = division % 8
        division = Math.trunc(division / 8)
        res.push(re)
    }
    let invertido = res.reverse()
    let concatenado = invertido.join('')
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    document.getElementById("resultado").innerHTML = concatenado
}
// ----------------------------------OCTAL A DECIMAL--------------------------------------------
function octalDecimal() {
    let c = 0;
    let d = 0;
    let arr = [];
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`;
    let rta = document.getElementById("resultado")
    let numero = document.getElementById("numero").value;
    for (let i = numero.length - 1; i >= 0; i--) {
        if(numero[i]>7){
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ El número debe ser un octal entero"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar() 
        }else{
            p = parseInt(numero[i]) * Math.pow(8, c);
            c++;
            d = d + p;
            arr.push(d);
        }
    }
    let ultimo = arr[arr.length - 1];
    rta.innerHTML = ultimo;
}
// ----------------------------------------DECIMAL A HEXADECIMAL------------------------------------
function decimalHexadecimal() {
    let re = 0
    let res = []
    let pedirNum = document.getElementById("numero").value;
    let division = pedirNum;
    while (division > 0) {
        re = division % 16
        division = Math.trunc(division / 16)
        res.push(re)
        if (re == 10) {
            const indice = res.indexOf(10);
            res[indice] = 'A';
        }
        if (re == 11) {
            const indice = res.indexOf(11);
            res[indice] = 'B';
        }
        if (re == 12) {
            const indice = res.indexOf(12);
            res[indice] = 'C';
        }
        if (re == 13) {
            const indice = res.indexOf(13);
            res[indice] = 'D';
        }
        if (re == 14) {
            const indice = res.indexOf(14);
            res[indice] = 'E';
        }
        if (re == 15) {
            const indice = res.indexOf(15);
            res[indice] = 'F';
        }
    }
    let invertido = res.reverse()
    let concatenado = invertido.join('');
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`;
    document.getElementById("resultado").innerHTML = concatenado
}
// -------------------------------------HEXADECIMAL A DECIMAL-------------------------------------------
function hexadecimalDecimal() {
    let a = 0
    let p = 0
    let c = 0
    let d = 0
    let re = 0
    let res = []
    let arr = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let num = document.getElementById("numero").value;
    re = num
    for (let i = 0; i < re.length; i++) {
        if (re[i].toUpperCase() == "A") {
            res.push(10)
        }
        else if (re[i].toUpperCase() == "B") {
            res.push(11)
        }
        else if (re[i].toUpperCase() == "C") {
            res.push(12)
        }
        else if (re[i].toUpperCase() == "D") {
            res.push(13)
        }
        else if (re[i].toUpperCase() == "E") {
            res.push(14)
        }
        else if (re[i].toUpperCase() == "F") {
            res.push(15)
        }else{ a = parseInt(re[i])
            res.push(a)}
    }
    for (let i = res.length - 1; i >= 0; i--) {
        if(res[i]>16){
            document.getElementById("alertError").setAttribute("style", "display:block")
                 document.getElementById("error").innerText = "❌ No se puede convertir. Las letras en los números hexadecimales van de la A a la F, estas representan los numeros del 10 al 16"
                 setTimeout(() => {
                     document.getElementById("alertError").setAttribute("style", "display:none")
                 }, 2000);
               limpiar()
        }
        p = res[i] * Math.pow(16, c)
        c++;
        d = d + p
        arr.push(d)
    }
    let ultimo = arr[arr.length - 1]
    document.getElementById("resultado").innerHTML = ultimo;
}
// ---------------------------------------------DECIMAL A BINARIO-------------------------------------
function decimalBinario() {
    let res=[]
    let pedirNum = document.getElementById("numero").value;
    let division = pedirNum;
    while (division > 0) {
        re = division % 2
        division = Math.trunc(division / 2)
        res.push(re)
    }
    let invertido = res.reverse();
    let concatenado = invertido.join('');
    console.log(concatenado);
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    document.getElementById("resultado").innerHTML = concatenado;
}
// -------------------------------------------------BINARIO A DECIMAL-----------------------------------
function binarioDecimal() {
    let x = 0
    let y = 0
    let xy = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    for (let i = numero.length - 1; i >= 0; i--) {
        if(numero[i]!=1&&numero[i]!=0){
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ Los números binarios solo pueden ser 0 y 1"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar() 
        }else{
            z = parseInt(numero[i]) * Math.pow(2, x)
            x++;
            y = y + z
            xy.push(y)
        }
    }
    let ultimo = xy[xy.length - 1];
    document.getElementById("resultado").innerHTML = ultimo;
}
// -------------------------------------------------OCTAL A HEXADECIMAL-----------------------------------
function octalHexadecimal() {
    let conted = 0
    let partes1 = 4
    let i = 0
    let div = []
    let div1 = []
    let div2 = []
    let octales = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    conted = numero;
    for (let l = 0; l < conted.length; l++) {
        let a = parseInt(conted[l]);
        div1.push(a);
    }
    for (let j = 0; j < div1.length; j++) {
        if (div1[j] == 0) {
            div.push(0, 0, 0)
        }
        else if (div1[j] == 1) {
            div.push(0, 0, 1)
        }
        else if (div1[j] == 2) {
            div.push(0, 1, 0)
        }
        else if (div1[j] == 3) {
            div.push(0, 1, 1)
        }
        else if (div1[j] == 4) {
            div.push(1, 0, 0)
        }
        else if (div1[j] == 5) {
            div.push(1, 0, 1)
        }
        else if (div1[j] == 6) {
            div.push(1, 1, 0)
        }
        else if (div1[j] == 7) {
            div.push(1, 1, 1)
        }
        else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ El número debe ser un octal entero, los octales van del 0 al 7"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    for (let k = 0; k < div.length; k++) {
        let a = div[k]
        div2.push(a);
    }
    console.log(`binario` + div2);
    let residuo = parseInt(div2.length % 4)
    if (residuo == 3) {
        div2.unshift("0")
    }
    if (residuo == 2) {
        div2.unshift("0", "0")
    } if (residuo == 1) {
        div2.unshift("0", "0", "0")
    }
    for (i = 0; i < div2.length; i += partes1) {
        let part = div2.slice(i, i + partes1)
        part = part.join("")
        if (part == "0000") {
            octales.unshift("0")
        } else if (part == "0001") {
            octales.unshift("1")
        } else if (part == "0010") {
            octales.unshift("2")
        } else if (part == "0011") {
            octales.unshift("3")
        } else if (part == "0100") {
            octales.unshift("4")
        } else if (part == "0101") {
            octales.unshift("5")
        } else if (part == "0110") {
            octales.unshift("6")
        } else if (part == "0111") {
            octales.unshift("7")
        }
        else if (part == "1000") {
            octales.unshift("8")
        }
        else if (part == "1001") {
            octales.unshift("9")
        }
        else if (part == "1010") {
            octales.unshift("A")
        }
        else if (part == "1011") {
            octales.unshift("B")
        }
        else if (part == "1100") {
            octales.unshift("C")
        }
        else if (part == "1101") {
            octales.unshift("D")
        }
        else if (part == "1110") {
            octales.unshift("E")
        }
        else if (part == "1111") {
            octales.unshift("F")
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ El número debe ser un octal entero, los octales van del 0 al 7"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    octales.reverse();
    let concat = octales.join("");
    document.getElementById("resultado").innerHTML = concat;
}
// -----------------------------HEXADECIMAL A OCTAL------------------------------------
function hexadecimalOctal() {
    let conted = 0
    let conted2 = 0
    let div2 = []
    let partes = 3
    let octales = []
    let octales2 = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    conted = numero
    console.log(conted);
    for (let i = 0; i < conted.length; i++) {
        let unidad = conted[i]
        if (unidad == 0) {
            octales.push(0, 0, 0, 0)
        } else if (unidad == 1) {
            octales.push(0, 0, 0, 1)
        } else if (unidad == 2) {
            octales.push(0, 0, 1, 0)
        } else if (unidad == 3) {
            octales.push(0, 0, 1, 1)
        } else if (unidad == 4) {
            octales.push(0, 1, 0, 0)
        } else if (unidad == 5) {
            octales.push(0, 1, 0, 1)
        } else if (unidad == 6) {
            octales.push(0, 1, 1, 0)
        } else if (unidad == 7) {
            octales.push(0, 1, 1, 1)
        } else if (unidad == 8) {
            octales.push(1, 0, 0, 0)
        } else if (unidad == 9) {
            octales.push(1, 0, 0, 1)
        } else if (unidad.toUpperCase() === "A") {
            octales.push(1, 0, 1, 0)
        } else if (unidad.toUpperCase() === "B") {
            octales.push(1, 0, 1, 1)
        } else if (unidad.toUpperCase() === "C") {
            octales.push(1, 1, 0, 0)
        } else if (unidad.toUpperCase() === "D") {
            octales.push(1, 1, 0, 1)
        } else if (unidad.toUpperCase() === "E") {
            octales.push(1, 1, 1, 0)
        } else if (unidad.toUpperCase() === 'F') {
            octales.push(1, 1, 1, 1)
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌No se puede convertir. Las letras en los números hexadecimales van de la A a la F, estas representan los numeros del 10 al 16"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 3000);
            limpiar()
        }
    }
    for (let k = 0; k < octales.length; k++) {
        let a = octales[k]
        div2.push(a);
    }
    conted2 = div2
    let residuo = parseInt(conted2.length % 3)
    if (residuo == 2) {
        conted2.unshift(0)
    } if (residuo == 1) {
        conted2.unshift(0, 0)
    }
    for (i = 0; i < conted2.length; i += partes) {
        let part = conted2.slice(i, i + partes)
        part = part.join("")
        if (part == "000") {
            octales2.unshift("0")
        } else if (part == "001") {
            octales2.unshift("1")
        } else if (part == "010") {
            octales2.unshift("2")
        } else if (part == "011") {
            octales2.unshift("3")
        } else if (part == "100") {
            octales2.unshift("4")
        } else if (part == "101") {
            octales2.unshift("5")
        } else if (part == "110") {
            octales2.unshift("6")
        } else if (part == "111") {
            octales2.unshift("7")
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌No se puede convertir. Las letras en los números hexadecimales van de la A a la F, estas representan los numeros del 10 al 16"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 3000);
            limpiar()
        }
    }
    octales2.reverse();
    let concat = octales2.join("");
    document.getElementById("resultado").innerHTML = concat;
}
// -------------------------------OCTAL A BINARIO-------------------------------------------
function octalBinario() {
    let conted = 0
    let div = []
    let div1 = []
    let div2 = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    conted = numero;
    for (let l = 0; l < conted.length; l++) {
        let a = parseInt(conted[l]);
        div1.push(a);
    }
    for (let j = 0; j < div1.length; j++) {
        if (div1[j] == 0) {
            div.push(0, 0, 0)
        }
        else if (div1[j] == 1) {
            div.push(0, 0, 1)
        }
        else if (div1[j] == 2) {
            div.push(0, 1, 0)
        }
        else if (div1[j] == 3) {
            div.push(0, 1, 1)
        }
        else if (div1[j] == 4) {
            div.push(1, 0, 0)
        }
        else if (div1[j] == 5) {
            div.push(1, 0, 1)
        }
        else if (div1[j] == 6) {
            div.push(1, 1, 0)
        }
        else if (div1[j] == 7) {
            div.push(1, 1, 1)
        }
        else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ El número debe ser un octal entero, los octales van del 0 al 7"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    for (let k = 0; k < div.length; k++) {
        let a = div[k]
        div2.push(a);
    }
    let concatenar = div2.join('')
    concatenar = Number(concatenar); 
    document.getElementById("resultado").innerHTML = concatenar;
}
// ------------------------------------BINARIO A OCTAL-------------------------------------
function binarioOctal() {
    let conted = 0
    let partes1 = 3
    let octales = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`;
    let numero = document.getElementById("numero").value;
    conted = numero.split("");
    let residuo = parseInt(conted.length % 3)
    if (residuo == 2) {
        conted.unshift("0")
    } if (residuo == 1) {
        conted.unshift("0", "0")
    }
    for (let i = 0; i < conted.length; i += partes1) {
        let part = conted.slice(i, i + partes1)
        part = part.join("")
        if (part == "000") {
            octales.unshift("0")
        } else if (part == "001") {
            octales.unshift("1")
        } else if (part == "010") {
            octales.unshift("2")
        } else if (part == "011") {
            octales.unshift("3")
        } else if (part == "100") {
            octales.unshift("4")
        } else if (part == "101") {
            octales.unshift("5")
        } else if (part == "110") {
            octales.unshift("6")
        } else if (part == "111") {
            octales.unshift("7")
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ No se puede convertir, los números binarios solo pueden ser 0 y 1"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    octales.reverse();
    let concat = octales.join("");
    concat=Number(concat)
    document.getElementById("resultado").innerHTML = concat;
}
// -----------------------------------------HEXADECIMAL A BINARIO--------------------------------------
function hexadecimalBinario() {
    let conted = 0
    let octales = []
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    conted = numero
    console.log(conted);
    for (let i = 0; i < conted.length; i++) {
        let unidad = conted[i]
        unidad.split("")
        if (unidad == "0") {
            octales.push("0000")
        } else if (unidad == "1") {
            octales.push("0001")
        } else if (unidad == "2") {
            octales.push("0010")
        } else if (unidad == "3") {
            octales.push("0011")
        } else if (unidad == "4") {
            octales.push("0100")
        } else if (unidad == "5") {
            octales.push("0101")
        } else if (unidad == "6") {
            octales.push("0110")
        } else if (unidad == "7") {
            octales.push("0111")
        } else if (unidad == "8") {
            octales.push("1000")
        } else if (unidad == "9") {
            octales.push("1001")
        } else if (unidad.toUpperCase() === "A") {
            octales.push("1010")
        } else if (unidad.toUpperCase() === "B") {
            octales.push("1011")
        } else if (unidad.toUpperCase() === "C") {
            octales.push("1100")
        } else if (unidad.toUpperCase() === "D") {
            octales.push("1101")
        } else if (unidad.toUpperCase() === "E") {
            octales.push("1110")
        } else if (unidad.toUpperCase() === 'F') {
            octales.push("1111")
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ No se puede convertir. Las letras en los números hexadecimales van de la A a la F, estas representan los numeros del 10 al 16"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    let concat = octales.join("")
    concat = Number(concat);
    document.getElementById("resultado").innerHTML = concat;
}
// ------------------------------------------BINARIO A HEXADECIMAL-------------------------------------
function binarioHexadecimal() {
    let conted = 0
    let partes1 = 4
    let octales = [];
    document.getElementById("rta").innerHTML = `<div id="resultado"></div>`
    let numero = document.getElementById("numero").value;
    conted = numero.split("");
    let residuo = parseInt(conted.length % 4)
    if (residuo == 3) {
        conted.unshift("0")
    }
    if (residuo == 2) {
        conted.unshift("0", "0")
    } if (residuo == 1) {
        conted.unshift("0", "0", "0")
    }
    for (let i = 0; i < conted.length; i += partes1) {
        let part = conted.slice(i, i + partes1)
        part = part.join("")
        if (part == "0000") {
            octales.unshift("0")
        } else if (part == "0001") {
            octales.unshift("1")
        } else if (part == "0010") {
            octales.unshift("2")
        } else if (part == "0011") {
            octales.unshift("3")
        } else if (part == "0100") {
            octales.unshift("4")
        } else if (part == "0101") {
            octales.unshift("5")
        } else if (part == "0110") {
            octales.unshift("6")
        } else if (part == "0111") {
            octales.unshift("7")
        } else if (part == "1000") {
            octales.unshift("8")
        } else if (part == "1001") {
            octales.unshift("9")
        } else if (part == "1010") {
            octales.unshift("A")
        } else if (part == "1011") {
            octales.unshift("B")
        }
        else if (part == "1100") {
            octales.unshift("C")
        } else if (part == "1101") {
            octales.unshift("D")
        } else if (part == "1110") {
            octales.unshift("E")
        }
        else if (part == "1111") {
            octales.unshift("F")
        } else {
            document.getElementById("alertError").setAttribute("style", "display:block")
            document.getElementById("error").innerText = "❌ No se puede convertir. Los números binarios solo pueden ser 0 y 1"
            setTimeout(() => {
                document.getElementById("alertError").setAttribute("style", "display:none")
            }, 2000);
            limpiar()
        }
    }
    octales.reverse();
    let concat = octales.join("")
    document.getElementById("resultado").innerHTML = concat
}
function validaciones() {
    // -----------------------------------VALIDACIONES----------------------------------------
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "decimal2") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("error").innerText = "❌ No se puede convertir de decimal a decimal"
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    }
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "octal2") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("error").innerText = "❌ No se puede convertir de octal a octal"
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    }
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "hexadecimal2") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("error").innerText = "❌ No se puede convertir de hexadecimal a hexadecimal"
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    }
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "binario2") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("error").innerText = "❌ No se puede convertir de binario a binario"
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else {
        convertir()
    }
}
// ---------------------------------------------LIMPIAR--------------------------------------------------------------------------------------
function limpiar() {
    if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "octal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "decimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "hexadecimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "decimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "decimal1" && document.getElementById("select2").value == "binario2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "decimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "hexadecimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "octal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "octal1" && document.getElementById("select2").value == "binario2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "octal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "hexadecimal1" && document.getElementById("select2").value == "binario2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    }
    else if (document.getElementById("select1").value == "binario1" && document.getElementById("select2").value == "hexadecimal2") {
        document.getElementById("numero").value = "";
        document.getElementById("rta").innerHTML = "";
    } else {
        convertir()
    }
}