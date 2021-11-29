let pascalTriangle = (limiteFilas, resultado) => {

    let res = resultado
    let limitefilas2 = limiteFilas
    /* 
       llenamos con 1 las primeras dos filas con una matriz bidimensional
    */
    let matriz = new Array()
    matriz[0] = new Array(1)
    matriz[0][0] = 1
    matriz[1] = new Array(2)
    matriz[1][0] = 1
    matriz[1][1] = 1
/*
        1
    1       1
*/
    //creamos una matriz en cada fila para poner 1 en cada extremo de ellos
    for (let i = 2; i < limitefilas2; i++) {
        matriz[i] = new Array(matriz[i - 1].length + 1)
        matriz[i][0] = 1
        matriz[i][matriz[i].length - 1] = 1

        //Llenamos los otros vales sumando las capas anteriores
        for (let i2 = 1; i2 < matriz[i].length - 1; i2++) {
            matriz[i][i2] = matriz[i - 1][i2 - 1] + matriz[i - 1][i2]
        }

    }

    //Lo mandamos al HTML
    let mostrar = ""
    for (var i2 = 0; i2 < limitefilas2; i2++) {
        for (let i = 0; i < matriz[i2].length; i++) {

            mostrar = mostrar + (matriz[i2][i] + " ")
            res.innerHTML = mostrar
        }
        mostrar = mostrar + ("<br/>")
        res.innerHTML = mostrar

    }




}

let mostrarTriangle = () => {

    let numeroDeCapas = document.getElementById("inputcapas").value
    let resultado = document.getElementById("resultado")
    pascalTriangle(numeroDeCapas, resultado)

}

let estructuraMAtriz = () => {

    //crear matriz n*n

    let n = document.getElementById("nfilcol").value
    let matriz = new Array(n)
    for (let k = 0; k < n; k++) {
        matriz[k] = new Array(n)

    }

    //Pedir y llenar matriz
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            valor = parseInt(prompt("Dimensión de la matriz" + n + " * " + n + "\nPosición [" + i + "][" + j + "]"))

            //verificar que solo ingrese numeros
            if (isNaN(valor)) {
                numero = 0
            } else {
                numero = valor
            }
            matriz[i][j] = numero
        }

    }
    //imprimir formulario de la matriz
    let p = document.getElementById("matriz")
    let txt = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            txt = txt + matriz[i][j]

            p.innerHTML = txt
        }
        txt = txt + "<br/>"
        p.innerHTML = txt
    }
    //verificamos si la matriz es triangular o no
    let resultmatriz = document.getElementById("resmatriz")
    if (verificarMatriz(matriz, n)) {
        resultmatriz.style.color = "#7FFF52"
        resultmatriz.innerHTML = "Si es triangular superior"
    } else {
        resultmatriz.style.color = "red"
        resultmatriz.innerHTML = "No es triangular superior"
    }

}

let verificarMatriz = (matriz, n) => {

    
    // verificar si ya no es triangular superior

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > j && matriz[i][j] != 0) {
                return false
            }
        }
    }
    return true
}

