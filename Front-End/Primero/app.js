const formulario = document.querySelector("#formulario");
const tituloFormulario = document.querySelector("#titulo-formulario");
const task = document.querySelector(".tareas");
const no_hay_tareas = document.querySelector("#no-hay-tareas");
let tareas = []
let cont = 0
let cont2 = 1


formulario.addEventListener ("submit", validarFormulario);
task.addEventListener("click", eliminarTarea) ;
task.addEventListener("click", tareaCompletada);

//Funciones
function validarFormulario(e) {
     cont++;
    e.preventDefault()
    //validar los datos
    const tarea = document.querySelector("#tarea").value
    if (!tarea.trim()) { 

        tituloFormulario.textContent = "Formulario Vacío"
        setTimeout (() =>{
            tituloFormulario.textContent = "Formulario"
        },2000)
        return
    }

    const objTarea = {
        id: Date.now(),
        tarea: tarea,
        estado:false
    }
    tareas = [...tareas, objTarea]
    formulario.reset()
    mostrarHtml()
}

function mostrarHtml() {
   
    task.innerHTML = "" 
    if (tareas.length === 0) {
        const mensaje = document.createElement("h2")
        mensaje.textContent = "No hay tareas"
        return
    }
    else {
        document.getElementById("total").innerHTML = "total: " + cont;
        tareas.forEach((item) => { 
            const itemTareas = document.createElement("div") 
            itemTareas.classList.add("item-tarea")
            itemTareas.innerHTML =`
            ${item.estado ? (`<p class="completa">${item.tarea}</p>`) : (` <p>${item.tarea}<p/>`)}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">X</button>
                <button data-id="${item.id}" class="completada">?</button>
            </div>
            `
            task.appendChild(itemTareas)
        })
    }
}
function eliminarTarea(e) {
    if (e.target.classList.contains("eliminar")) { 
        const tareald = Number(e.target.getAttribute("data-id"));
        //eliminando tarea
        const newTask = tareas.filter((item) => item.id !== tareald);
        tareas = newtask 
        mostrarHtml();
    }
}

function tareaCompletada (e){
    document.getElementById("completados").innerHTML = ("completadas :" + cont2)
    if (e.target.classList.contains("completada")) {
        const tareald = Number(e.target.getAttribute("data-id"));

        const newtask = tareas.map((item) => {
            if (item.id === tareald) {
                item.estado = !item.estado;
                return;
            }
            else{
                return item;
            }
        })

        mostrarHtml ()
    }
}