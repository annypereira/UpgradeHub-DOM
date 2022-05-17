// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement('div');
newDiv.classList.add("container");

document.body.appendChild(newDiv);

console.log(newDiv);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newText = document.createElement('p')
const newDiv2 = document.createElement('div');
newDiv2.appendChild(newText);

document.body.appendChild(newDiv2);

console.log(newDiv2);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv3 = document.createElement('div');

for (let index = 0; index < 6; index++) {
    const newText2 = document.createElement('p');
    newDiv3.appendChild(newText2); 
}

document.body.appendChild(newDiv3);

console.log(newDiv3);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newText3 = document.createElement('p');
const soyDin = document.createTextNode('Soy dinámico!');
newText3.appendChild(soyDin);

document.body.appendChild(newText3);

console.log(newText3);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba duºb dub'.

const wubba = document.querySelector('.fn-insert-here');

wubba.innerHTML = 'Wubba Lubba duºb dub';


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (let index = 0; index < apps.length; index++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(apps[index]));
    ul.appendChild(li);
}

document.body.appendChild(ul);

console.log(ul);    


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removedClass = document.querySelectorAll(".fn-remove-me");

let array1 = Array.from(removedClass);

array1.forEach(borrar => {
    document.body.removeChild(borrar);
});


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let textoMedio = document.createElement('p');
textoMedio.appendChild(document.createTextNode('Voy en medio!'));

let divs = document.querySelectorAll('div');

document.body.insertBefore(textoMedio, divs[1]);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divs2 = document.querySelectorAll('div.fn-insert-here');

divs2.forEach(div => {
    let textoDentro = document.createElement('p');
    textoDentro.appendChild(document.createTextNode('Voy dentro!'));
    div.appendChild(textoDentro);
});

console.log(divs2);