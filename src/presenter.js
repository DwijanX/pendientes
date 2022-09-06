import { addPendiente,showPendientes } from "./PendientesManager";
const tareaPendiente = document.querySelector("#tareaPendiente");
const form = document.querySelector("#pendientes-form");
const ListaPendientes = document.querySelector("#ListaPendientes");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let pendiente = tareaPendiente.value
  addPendiente(pendiente)
  showPendientes(ListaPendientes)
});
