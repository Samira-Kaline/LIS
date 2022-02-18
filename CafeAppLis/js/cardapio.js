import itens from './model/dataset.js';
import foodsModel from './model/foods.js';
// Importação dos dados no arquivo dataset.js
// Importação dos dados no arquivo foods.js

//Fazendo o carregamento dos itens do Modal
foodsModel.load(itens);
// Criando um array de comidas
let foods = foodsModel.readAll();

// Pegando os valores do array foods
function initFoodsCard () {
  
  for (let item of foods) {

    const view = createFoodCardItem(item);
  
    //let itensCardapio = document.querySelector('.itens-cardapio');
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}
// Função para criar um novo Card
function createFoodCardItem (item) {
    // Pegando as informações do Formulario Modal
    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;
    // Retornando a constante com o novo Card
    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");


foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();

  // Criando uma nova comida.
  let newFood = Object.fromEntries(new FormData(foodForm));

  // Criando um novo Modal
  foodsModel.create(newFood);

  // Criando um Novo FoofCard
  const foodCard = createFoodCardItem(newFood);
  let itensCardapio = document.getElementById("itens-cardapio");
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}

// Chamando a função
initFoodsCard();
