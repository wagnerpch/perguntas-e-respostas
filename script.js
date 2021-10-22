/**
 * Se preferir, pode usar jQuery ;) 
 */


/********************************
 * Questão 1.
 *******************************/
function executeQ1() {
  // Resposta aqui.
  let name=document.querySelector('#my-name');
  name.innerHTML="Wagner Chequeleiro Cordeiro.";
}

/********************************
 * Questão 2.
 *******************************/
var listItems = [
  'Pikachu',
  'Charmander',
  'Bulbasauro',
  'Eevee',
  'Squirtle'
];

function executeQ2() {
  // Resposta aqui.
  function mostrarLista(nomeArray,group,element) {
    for(let i = 0; i < nomeArray.length; i = i + 1) {
      let q=document.querySelector(group);
      let itens=document.createElement(element);
      itens.textContent=nomeArray[i];
      q.appendChild(itens);
    }
  }
  mostrarLista(listItems,"#q2-list","li");
}

/********************************
 * Questão 3.
 *******************************/
function Person() {
  var name = '';

  this.setName = function(n) {
    name = n;
  };

  this.getName = function() {
    return name;
  }
}

function executeQ3() {
  // Resposta aqui.
  function novoObj(nick,group,element){
    let set = nick;
    nick=new Person();
    nick.setName(set);
    let q=document.querySelector(group);
    let item=document.createElement(element);
    item.textContent=nick.getName();
    q.appendChild(item);
  }
  novoObj("Marcos","#q3-list","li");
  novoObj("Julia","#q3-list","li");
  novoObj("Lucas","#q3-list","li");
}