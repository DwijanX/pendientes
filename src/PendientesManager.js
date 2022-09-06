let Pendientes=[]

function showEmptyTitleAlert()
{
    alert("No es posible registrar una tarea pendiente sin descripción")
}
function showThatPendienteIsTooLong()
{
    alert("No es posible registrar una tarea con una descripcion de mas de 50 caracteres")
}
function addPendiente(pendienteTitle)
{
    if(pendienteTitle=="" || pendienteTitle==" " )
    {
        showEmptyTitleAlert()
    }
    else if (pendienteTitle.length>50)
    {
        showThatPendienteIsTooLong()
    }
    else
    {
        Pendientes.push(pendienteTitle)
    }
}
function showPendientes(ListaPendientesContainer)
{
    let PendientesHtml=""
    Pendientes.forEach((Pendiente)=>
    {
        PendientesHtml+="<p>"+Pendiente+"</p>"
    })
    ListaPendientesContainer.innerHTML=PendientesHtml
}

export {addPendiente,showPendientes}