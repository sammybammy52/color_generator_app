const colors = ["green", "red", "orange", "blue"]

const btn =  document.getElementById('btn');
const color = document.querySelector(".color");
const container = document.getElementById('con');

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    container.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

//helo=