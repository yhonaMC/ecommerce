import { dataHombre } from "./datahombres.js";
console.log(dataHombre)

let main = document.getElementById('main');

main.innerHTML = '';
dataHombre.forEach(casco =>{
    const {nombre, imagen, precio} = casco;
    main.innerHTML += `
    <div class="card  bg-dark text-light" style="width: 18rem; margin:15px; padding:5px;">
    <img src="${imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${precio}$</p>
      <a href="#" class="btn btn-primary">Ver</a>
    </div>
  </div>
`
})


