'use strict';


const boEl = document.getElementById('bo');

Car.prototype.render = function() {

    const divEl = document.createElement('div');
    

    const h2El = document.createElement('h2');
    const pEl = document.createElement('p');
    const pEl2 = document.createElement('p');
    const imgEl = document.createElement('img');


    h2El.textContent = ` Name : ${this.name} `;
    pEl.textContent = ` Price : ${this.price} JD `;  
    pEl2.textContent = ` Speed : ${this.speed} `;
    imgEl.src = `${this.img}`;
    imgEl.alt = `${this.name}`;

    imgEl.classList.add('pictureStyle');

    divEl.appendChild(h2El);
    divEl.appendChild(pEl);
    divEl.appendChild(pEl2);
    divEl.appendChild(imgEl);


    divEl.classList.add('divStyle');

    // bodyEl[0].appendChild(divEl);
    boEl.appendChild(divEl);
  
    
 }






let x = 3;


function getData() {
    let retreveData = localStorage.getItem('key');
    let arrayData = JSON.parse(retreveData);
    
    

    if(arrayData !== null) {

        for (let index = x; index < arrayData.length; index++) { //x
            new Car(arrayData[index].name, arrayData[index].price, arrayData[index].speed, arrayData[index].image);
            
        }
        x++;
    }


  

    for (let i= 0; i < carArray.length; i++) {
        carArray[i].render();
    }

}
getData();









