const imgArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
// Stampo gli elementi dell'arrey
for(let itemsOfArray of imgArray) {
    console.log(itemsOfArray);
}

const itemsContainer = document.querySelector('.items-container');

for(let i = 0; i < imgArray.length; i++){
    // creo contenitorei per le img
    let divImg = document.createElement('div');

    if(i === 0) divImg.className = 'item active';
    else divImg.className = 'item';

    // creo img
    let img = document.createElement('img');
    // add src a img
    img.src = imgArray[i];

    // unisco i pezzi
    divImg.appendChild(img);
    itemsContainer.appendChild(divImg);

}

const sliderImg = document.getElementsByClassName('item');
console.log(sliderImg);

// imposto l'active
let active = 0;

// imposto next
let next = document.querySelector('.next');

next.addEventListener('click',
   function() {
        if(active < sliderImg.length -1) 
            sliderImg[active].classList.remove('active');

            active++

            sliderImg[active].classList.add('active');
   }
)
