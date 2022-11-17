const nuevaTarea = document.querySelector('#nuevaTarea');
const tbody = document.querySelector('tbody');
const btnAgregar = document.querySelector('#agregarTarea')
const contadorTareas = document.querySelector('#tareasTotal');
const tareasRealizadas = document.querySelector('#tareasRealizadas');

const tareas = []
    function renderTareas(){
        let html = ''
        for(let tarea of tareas){
            html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td><input type="checkbox" onclick="marcarTarea(${tarea.id})"></td> 
                <td><button onclick="borrar(${tarea.id})" id="btn-color"> x </button></td>
            </tr>`
        }
        tbody.innerHTML = html;
        contadorTareas.innerHTML = tareas.length;
       
        // const tareasListas = tareas.filter((x) => x.realizada = true);
        // tareasRealizadas.innerHTML = tareasListas;
    }

    btnAgregar.addEventListener('click', () => {
        const nuevo = nuevaTarea.value 
        tareas.push({id: Date.now(), nombre: nuevo})
        nuevaTarea.value = ''
        renderTareas()

    })
    function borrar(id){
        const index = tareas.findIndex((ele) => ele.id == id)
        tareas.splice(index, 1)
        renderTareas()
    }

    // function marcarTarea(id){
    //     const index = tareas.findIndex((x) => x.id === id);
    //     tareas[index].realizadas = !tareas[index].realizadas;
    // }
  
