let Pendientes=[]

function addPendiente(pendienteTitle)
{
    Pendientes.push(pendienteTitle)
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