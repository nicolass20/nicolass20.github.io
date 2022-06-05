let nombres = []
let gastos = []
cont=Number(0)


function processData() {
    



    const persona = document.getElementById("nom").value
    let valor = document.getElementById("gas").value

    if (persona !== "" && valor !== "") {




        valor=parseInt(valor)



        nombres.push(mayus(persona))
        gastos.push(valor)


    
        console.log(gastos)
        console.log(nombres)
        console.log("vuelta "+cont)
        console.log(typeof(persona))
        console.log(persona)


        mostrar()
        sumpro()
    
        console.log("total: "+sum)
    
        
    
        const suma = document.getElementById("suma")
        suma.innerHTML= 'Total: $' + sum 
        
    
        const promedio = document.getElementById("promedio")
        promedio.innerHTML= 'cada uno debera pagar $' + prom
        
    
    
        
        
    
    
        
    }

    else {
        alert("por favor ingrese los datos")
    }

}



mostrar = () => {

        
    const lista = document.querySelector("ul")
    const li = document.createElement("li")
    li.classList.add("list-group-item");
    li.innerText= nombres[cont] + ' ha gastado ' + gastos[cont] 
    lista.appendChild(li)
    cont+=1
     
}      


sumpro = () => {

    sum = gastos.reduce((acc,item) => {

        return acc = acc + item

    })  

    prom=parseFloat(sum/gastos.length)
  
}


mayus = (name) => {

    name = name.charAt(0).toUpperCase() + name.slice(1)
    return (name)

}




buttom=document.getElementById("boton")
buttom.addEventListener("click",processData)

