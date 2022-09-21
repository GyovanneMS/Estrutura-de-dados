'use strict'

const showArray = (array, element, title='array') =>{
    // Selecionando um elemento no DOM
    const container = document.querySelector(element)
    // Criando um novo elemento DIV
    const div = document.createElement('div')
    // Adiciona uma classe na DIV criada
    div.classList.add('number-container')

    //preenchendo a DIV criada com os elementos do array
    div.innerHTML = `
    <li>
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    </li> 
    `
    //inserindo o novo elemento (div) no DOM
    container.appendChild(div)
}



export {
    showArray
}