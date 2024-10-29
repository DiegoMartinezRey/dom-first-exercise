// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const h3Element = document.getElementById("start-point");

console.log(
  `Soy un ${h3Element.tagName} con el id ${h3Element.id} y la clase ${h3Element.classList}, mi padre es un ${h3Element.parentElement.tagName} con id ${h3Element.parentElement.id} y clase ${h3Element.parentElement.classList}. Mi hermano mediano es un ${h3Element.previousElementSibling.tagName} con id ${h3Element.previousElementSibling.id} y con clase ${h3Element.previousElementSibling.classList[0]} y ${h3Element.previousElementSibling.classList[1]}, y tiene el texto ${h3Element.previousElementSibling.textContent}. Mi hermano mayor es un ${h3Element.previousElementSibling.previousElementSibling.tagName} con id ${h3Element.previousElementSibling.previousElementSibling.id} y con clase ${h3Element.previousElementSibling.previousElementSibling.classList[0]} y ${h3Element.previousElementSibling.previousElementSibling.classList[1]}, y tiene el texto ${h3Element.previousElementSibling.previousElementSibling.textContent}.`
);
