//  level drugi przeskoczył do level 1, poza tym jest ok

const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];
//menu poziom 1
const ulElement = document.querySelector('.article__list');

list.forEach(function(el) {
    if(el.parentId === null) {
        createMenu(el);
        // const liElement = document.createElement('li'); //
        // liElement.setAttribute('data-id', el.id); //
        // const aElement = document.createElement('a'); //
        // liElement.appendChild(aElement); //
        // aElement.innerText = el.text; //
        // aElement.setAttribute('href', el.link); //
        // //dodanie menu do elementu .article__list
        // ulElement.appendChild(liElement); //
    }
})

//menu poziom 2
const liElementList = ulElement.querySelectorAll('li');

liElementList.forEach(function(parent) {
    const id = Number(parent.dataset.id);

    const children = list.filter(function(element) {
        return element.parentId === id
    });

    if(parent.children.length > 0) {
        const ulElement = document.createElement('ul');

    children.forEach(function(child) {
        createMenu(child);
        // const liElement = document.createElement('li'); //
        // ulElement.appendChild(liElement); //
        // liElement.setAttribute('data-id', child.id); //
        // const aElement = document.createElement('a'); //
        // liElement.appendChild(aElement); //
        // aElement.setAttribute('href', child.link);  //
        // aElement.innerText = child.text; //
    })

    //dodaję children do menu jako poziom 2
    parent.appendChild(ulElement);
    }
})

function createMenu (el) {
    const liElement = document.createElement('li'); //
    liElement.setAttribute('data-id', el.id); //
    const aElement = document.createElement('a'); //
    liElement.appendChild(aElement); //
    aElement.innerText = el.text; //
    aElement.setAttribute('href', el.link); //
    //dodanie menu do elementu .article__list
    ulElement.appendChild(liElement); //
}

