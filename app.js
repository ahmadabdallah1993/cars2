
    
    


'use strict';

const carArray = [];

function Car(name, price, speed, img) {
    this.name = name;
    this.price = price;
    this.speed = speed;
    this.img = img;

    carArray.push(this);
    
};



const bodyEl = document.getElementsByTagName('body');
bodyEl[0].classList.add('designBody');
bodyEl[0].style.display = 'flex';
bodyEl[0].style.width = '100%';
bodyEl[0].style.flexWrap = 'wrap';
bodyEl[0].style.justifyContent = 'space-between';

const h1El = document.createElement('h1');
h1El.textContent = "Car Website";
bodyEl[0].appendChild(h1El);
console.log("-------1----------------");

const formEl = document.getElementById('form');
bodyEl[0].appendChild(formEl);




const car1 = new Car('mercedes', 10000, 10, "https://s1.cdn.autoevolution.com/images/gallery/Mercedes-AMG-CLA-35-4MATIC-Shooting-Brake-6592_5.jpg");
const car2 = new Car('volvo', 5000, 5, "https://th.bing.com/th/id/R.acdb5cbb719c1f2de8e1d1d31f9f66a6?rik=Yvetx9xK5Q2Xwg&riu=http%3a%2f%2fwww.gaddidekho.com%2fwp-content%2fuploads%2f2015%2f06%2fBlue-Volvo-S60-T6.jpg&ehk=%2fxOEo0sqVOa80LQWNB1Zo%2fXZTo2dZy1xrHCF5nVh9UI%3d&risl=&pid=ImgRaw&r=0");
const car3 = new Car('bmw', 8000, 2, "https://th.bing.com/th/id/R.adcbd9c1fdd04509fb71e74a2b86cab1?rik=8jrL6aOumyqWNQ&pid=ImgRaw&r=0");
console.log("--------2----------");




















Car.prototype.render = function() {

    const divEl = document.createElement('div');
    

    const h2El = document.createElement('h2');
    const pEl = document.createElement('p');
    const pEl2 = document.createElement('p');
    const imgEl = document.createElement('img');


    h2El.textContent = `Name : ${this.name}`;
    pEl.textContent = `Price : ${this.price} JD`;  
    pEl2.textContent = `Speed : ${this.speed}`;
    imgEl.src = `${this.img}`;
    imgEl.alt = `${this.name}`;

    imgEl.classList.add('pictureStyle');

    divEl.appendChild(h2El);
    divEl.appendChild(pEl);
    divEl.appendChild(pEl2);
    divEl.appendChild(imgEl);


    divEl.classList.add('divStyle');

    bodyEl[0].appendChild(divEl);
  
    
 }






formEl.addEventListener('submit', handlesubmit);




function handlesubmit(event) {
    //event.preventDefault();
    console.log(event);

    let carName = event.target.name.value;
    let carPrice = event.target.price.value;
    let carSpeed = event.target.speed.value;
    let carImg = event.target.image.value;

    let newCar = new Car(carName, carPrice, carSpeed, carImg);
    
    

    saveData(carArray);
    
    
}


function saveData(item) {

    let stringifyData = JSON.stringify(item);
    localStorage.setItem('key', stringifyData);

   
}



let x = 3;


function getData() {
    let retreveData = localStorage.getItem('key');
    let arrayData = JSON.parse(retreveData);
    
    

    if(arrayData !== null) {

        for (let index = x; index < arrayData.length; index++) {
            new Car(arrayData[index].name, arrayData[index].price, arrayData[index].speed, arrayData[index].image);
            
        }
        x++;
    }


  

    for (let i= 0; i < carArray.length; i++) {
        carArray[i].render();
    }

}
getData();