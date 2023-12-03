let parqueo = {}
let cont = 0

function abrir_documento(nuevo)
{

    const inicio = new Date();
    cont += 1

    parqueo[`vehiculo${cont}`] = {"ticket": cont, "Vehiculo": nuevo, "Entrada": inicio}

    mostrar()    

}

function mostrar()
{
    let listado = document.getElementById("listado")
    listado.innerHTML = ""

    for(let p in parqueo)
    {
        let elemento = document.createElement("li")
        elemento.innerText = parqueo[p].Vehiculo

        let boton = document.createElement("button")
        boton.innerText = "Sacar vehiculo"

        boton.setAttribute("onclick", `accion(${parqueo[p].ticket})`)

        elemento.appendChild(boton)
        listado.appendChild(elemento)
    }
}

function accion(v)
{

    vehiculo = `vehiculo${v}`

    const fin = new Date();
    let tiempo = Math.round((fin - parqueo[vehiculo].Entrada)*0.001)

    let horas = Math.floor(tiempo/3600).toString().padStart(2,"0")
    let minutos = Math.floor((tiempo%3600)/60).toString().padStart(2,"0")
    let segundos = Math.floor(tiempo%60).toString().padStart(2,"0")

    alert(`Ticket -- No.${parqueo[vehiculo].ticket}\nVehiculo -- ${parqueo[vehiculo].Vehiculo}\nTiempo guardado -- ${horas}:${minutos}:${segundos}`)

    delete parqueo[vehiculo]

    mostrar()
}

function boton()
{
    let entrada = document.getElementById("entrada")
    abrir_documento(entrada.value)
    entrada.value = ""
}

function busca()
{
    let listado = document.getElementById("listado")
    listado.innerHTML = ""

    let buscar = document.getElementById("buscar").value

    for(let p in parqueo)
    {
        if(parqueo[p].Vehiculo.toUpperCase().startsWith(buscar.toUpperCase()))
        {
            let elemento = document.createElement("li")
            elemento.innerText = parqueo[p].Vehiculo

            let boton = document.createElement("button")
            boton.innerText = "Sacar vehiculo"

            boton.setAttribute("onclick", `accion(${parqueo[p].ticket})`)

            elemento.appendChild(boton)
            listado.appendChild(elemento)
        }
    }
}
