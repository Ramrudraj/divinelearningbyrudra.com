let btn = document.getElementById('btn');
let text = document.getElementById('text')
let ul = document.getElementById('ul');

let container = document.querySelector('.wrapped');
var a = localStorage.getItem('Note');

var newLi = document.createElement('li')
newLi.classList = 'list-group-item d-flex justify-content-between';
newLi.innerHTML = `
     <h5 id='h5' class="flex-grow-1">${a}</h5>
        <button onclick="edit(this)" type="button" class="btn btn-warning mx-2">Edit</button>
        <button id='rem' onclick="remove(this)" type="button" class="btn btn-danger">Remove</button>
  
                  `

ul.append(newLi);

function add() {


  newLi = document.createElement('li')
  newLi.classList = 'list-group-item d-flex justify-content-between';
  newLi.innerHTML = `
     <h5 id='h5' class="flex-grow-1">${text.value
     }</h5>
        <button onclick="edit(this)" type="button" class="btn btn-warning mx-2">Edit</button>
        <button id='rem' onclick="remove(this)" type="button" class="btn btn-danger">Remove</button>
  
                  `
  localStorage.setItem('Note', text.value);


  ul.append(newLi);

  var a = localStorage.getItem('Note');

  let obj = [];
  obj.push(a);
  console.log(obj);
  text.value = '';
  container.style.fontFamily = `Ubuntu, sans-serif`;
}

function remove(element) {
  element.parentElement.remove();

}

function edit(element) {

  if (element.innerHTML == 'Done') {
    element.innerHTML = 'Edit';

  } else {
    let h5 = element.previousElementSibling

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Task';
    input.value = h5.textContent;

    h5.replaceWith(input);

    element.style.display = 'none';

    function repl(e) {

      if (e.keyCode === 13) {
        element.style.display = 'block';
        input.replaceWith(h5);
        h5.innerHTML = input.value;
        h5.style.fontFamily = `Ubuntu, sans-serif`;


      } else {

      }
    }
  }

  input.addEventListener('keyup', repl);
}

btn.addEventListener('click', add);


window.onload = () => {
  container.style.left = '0%';

}