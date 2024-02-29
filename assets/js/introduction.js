const tooltipList = document.querySelectorAll('span'); // Node List


tooltipList.forEach(function(el) {
    //pobranie zawartości
    const address = el.dataset.url;
    const type = el.dataset.tooltipType;
    const content = el.dataset.tooltipContent;
    
    // dodanie dwóch znaczników <a> i <span>
    const aElement = document.createElement('a');
    const spanElement = document.createElement('span');
    el.appendChild(aElement);
    el.appendChild(spanElement);
    
    // dodanie do wnętrza do nowego <span> atrybutów i zawartosci
    aElement.setAttribute('href', address);
    spanElement.className = 'tooltip__box.tooltip__box--text';
    aElement.innerText = 'skryptowy';
    spanElement.innerText = content;

    console.log(tooltipList);
});





