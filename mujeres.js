import { dataMujer } from "./datamujer.js";
console.log(dataMujer)

let main = document.getElementById('main');

main.innerHTML = '';
dataMujer.forEach(casco =>{
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
