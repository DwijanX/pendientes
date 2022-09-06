let Pendientes=[]

function showEmptyTitleAlert()
{
    alert("No es posible registrar una tarea pendiente sin descripción")
}
function addPendiente(pendienteTitle)
{
    if(pendienteTitle=="" || pendienteTitle==" " )
    {
        showEmptyTitleAlert()
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