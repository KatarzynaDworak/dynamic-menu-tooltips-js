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

const ulElement = document.createElement('ul');
ulElement.className = 'article__list';

list.forEach(function(el) {
    if(el.parentId === null) {
        const liElement = document.createElement('li');
        liElement.setAttribute('dataset.id', el.id);
        //PYTANIE NA KONSULTACJE: dataset.id czy o to chodzi?
        liElement.innerText = el.text;
        liElement.setAttribute('href', el.link);

        
        ulElement.appendChild(liElement);
        console.log(ulElement); ////PYTANIE NA KONSULTACJE: tworzy się 3x (przy wyjęciu liElemet i ulElement 
        // na zewnątrz pętli, pętka tworzy tylko ostatni liElement)
    }
})
//tworzę poziom drugi zagniezdzenia

//wyszukuję wszystkie utworzone elementy li (pierwszego rzędu) 
// i tworzę na nich pętlę
const liList = ulElement.querySelectorAll('li');
liList.forEach(function(el) {
   if((el.parentId === el.id)) {

       // pobieram id danego elementu
        const id = Number(el.dataset.id);
        
        // w tablicy list wyszukuję wszystkie obiekty, 
        // które posiadają parentId równy pobranemu id
        const children = list.filter(function(element) {
            return element.parentId === id
            
        // dodaję dzieci w odpowiednie miejsca - parentId === id
        ////PYTANIE NA KONSULTACJE: jak dodać elementy (ulElementLev2)? 
        ////PYTANIE NA KONSULTACJE: czy tworzymy dzieci i dodajemy w tej samej pętli?
        // const ulElementLev2 = document.createElement('ul');
        
        // const liElementLev2 = document.createElement('li');
        // ulElementLev2.appendChild(liElementLev2);
        
        // const aElementLev2 = document.createElement('a');
        // liElementLev2.appendChild(aElementLev2);
    }); 
}
})
console.log(children);

