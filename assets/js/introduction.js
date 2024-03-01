const tooltipList = document.querySelectorAll('span'); 
// Node list

tooltipList.forEach(function(el) {
    //pobranie zawartości
    const classOfTooltip = el.className; // nazwa klasy
    const address = el.dataset.url; //link  el.dataset.url;
    const type = el.dataset.tooltipType; //tym tekst /img
    const content = el.dataset.tooltipContent; // wnętrze dymka
    const text = el.innerText;  // tekst między znacznikami
    
    //usunięcie obecnych znaczników
    el.removeAttribute('data-url');
    el.removeAttribute('data-tooltip-type');
    el.removeAttribute('data-tooltip-content');
    
    // dodanie dwóch znaczników <a> i <span> do wnętrza <span>
    const aElement = document.createElement('a');
    const spanElement = document.createElement('span');
    el.appendChild(aElement);
    el.appendChild(spanElement);
    
    //dodanie zawartości do nowej struktury //wspólne
    aElement.setAttribute('href', address);

    //dla typu text
    if(type === 'text') {
        spanElement.className = 'tooltip__box tooltip__box--text';
    //dla typu image
    } else if(type === 'image') {
        spanElement.className = 'tooltip__box tooltip__box--image';
        const imageElement = document.createElement('img');
        spanElement.appendChild(imageElement);
    }
    
    //1. dymek tekstowy się pojawia, ale bez treści
    //2. dodać dymek obrazek -> dodać atrybut src do imageElement + link do obrazka
});






