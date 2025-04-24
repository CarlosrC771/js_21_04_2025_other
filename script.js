/*
    1.Crear un array que tenga 10 valores = [1,2,3,4,5,6,7,8,9,10]
    2. Sumar los valores impares y lo mostrarán con el document document.getElementById
    3. Sumar los valores pares y lo mostrarán con el document document.getElementById
    4. Sumar los valores múltiplos de 5, que sería 5 y 10  y lo mostrarán con el document document.getElementById
    
    */




    var array = [1,2,3,4,5,6,7,8,9,10];


    // Sumar los valores directamente accediendo a los índices
    var sumaImpares = array[0] + array[2] + array[4] + array[6] + array[8]; // Índices de los impares
    var sumaPares = array[1] + array[3] + array[5] + array[7] + array[9];   // Índices de los pares
    var sumaMultiplos5 = array[4] + array[9]; // Índices de los múltiplos de 5
    

    

    // Mostrar los resultados en el HTML    

    document.getElementById("sumaImpares").innerHTML = "La suma de los impares es: " + sumaImpares;

    document.getElementById("sumaPares").innerHTML = "La suma de los pares es: " + sumaPares;

    document.getElementById("sumaMultiplos5").innerHTML = "La suma de los múltiplos de 5 es: " + sumaMultiplos5;

   
