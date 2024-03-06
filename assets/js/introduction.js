
const tooltipList = document.querySelectorAll('span'); 
// Node list

tooltipList.forEach(prepareTooltip);
tooltipList.forEach(createTooltipText);
tooltipList.forEach(createTooltipImage);

function prepareTooltip(el) {
        //pobranie zawartości
    const classOfTooltip = el.className; // nazwa klasy
    const address = el.dataset.url; //link  el.dataset.url;
    const type = el.dataset.tooltipType; //typ tekst /img
    const content = el.dataset.tooltipContent; // wnętrze dymka
    const text = el.innerText;  // tekst między znacznikami

    createTooltipText(el, address, type, content);
}

function createTooltipText (el, address, type, content) {
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

    if(type === 'text') {
        spanElement.className = 'tooltip__box tooltip__box--text';
        spanElement.innerText = content;
    }
createTooltipImage(aElement, spanElement, type, address);
}

function createTooltipImage(aElement, spanElement, type, address) {
    //dodanie zawartości do nowej struktury //wspólne

    aElement.setAttribute('href', address);
        //dla typu image

    if(type === 'image') {
        spanElement.className = 'tooltip__box tooltip__box--image';
        const imageElement = document.createElement('img');
        spanElement.appendChild(imageElement);
        imageElement.className = 'tooltip__image';
        const imageContent = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Firefox_57.0.png/640px-Firefox_57.0.png'
        imageElement.setAttribute('src', imageContent);
    }
}

// tooltipList.forEach(function(el) {
    //prepareTooltip()
    //pobranie zawartości

    // const classOfTooltip = el.className; // nazwa klasy
    // const address = el.dataset.url; //link  el.dataset.url;
    // const type = el.dataset.tooltipType; //typ tekst /img
    // const content = el.dataset.tooltipContent; // wnętrze dymka
    // const text = el.innerText;  // tekst między znacznikami
    
    // createTooltipText()
    //usunięcie obecnych znaczników

    // el.removeAttribute('data-url');
    // el.removeAttribute('data-tooltip-type');
    // el.removeAttribute('data-tooltip-content');
    
    // dodanie dwóch znaczników <a> i <span> do wnętrza <span>

    // const aElement = document.createElement('a');
    // const spanElement = document.createElement('span');
    // el.appendChild(aElement);
    // el.appendChild(spanElement);
    
    //dodanie zawartości do nowej struktury //wspólne

    // aElement.setAttribute('href', address);


    //dla typu text
    
    // if(type === 'text') {
    //     spanElement.className = 'tooltip__box tooltip__box--text';
    //     spanElement.innerText = content;
    
    //dla typu image

//     } else if(type === 'image') {
//         spanElement.className = 'tooltip__box tooltip__box--image';
//         const imageElement = document.createElement('img');
//         spanElement.appendChild(imageElement);
//         imageElement.className = 'tooltip__image';
//         const imageContent = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Firefox_57.0.png/640px-Firefox_57.0.png'
//         imageElement.setAttribute('src', imageContent);
//     }
// });







