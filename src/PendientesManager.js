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
function getTodoTitleList()
{
    return "<h3>TODOs("+Pendientes.length+")</h3>"
}
function showPendientes(ListaPendientesContainer)
{
    let PendientesHtmlans=""
    PendientesHtmlans+=getTodoTitleList()
    Pendientes.forEach((Pendiente)=>
    {
        PendientesHtmlans+="<p>"+Pendiente+"</p>"
    })
    ListaPendientesContainer.innerHTML=PendientesHtmlans
}

export {addPendiente,showPendientes}