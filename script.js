const bulb = document.getElementById('bulb');
const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');
const headerTitle = document.querySelector('header h1');
const headerText = document.querySelector('header p');

// ON Btn
onBtn.addEventListener('click', () => {
    bulb.src = 'Bulb ON.png';
    bulb.classList.add('on');  // Glow effect
    document.body.style.backgroundColor = 'cornflowerblue';
    headerTitle.style.color = 'black';
    headerText.style.color = '#333';
});

// OFF Btn
offBtn.addEventListener('click', () => {
    bulb.src = 'Bulb OFF.png';
    bulb.classList.remove('on');  // Remove Glow
    document.body.style.backgroundColor = '#1a1a1a'; // Dark background
    headerTitle.style.color = 'white';
    headerText.style.color = '#ccc';
});



// TRYING BUT WORK

// document.querySelector('img').src="Bulb OF (2).png"

// document.querySelector('#on').addEventListener('click',() => {
//     document.querySelector('img').src='Bulb ON (2).png'
//     console.log("Bulb ON!");
//     document.body.style.backgroundColor="cornflowerblue";
    
// })

// document.querySelector('#of').addEventListener('click',() => {
//     document.querySelector('img').src='Bulb OF (2).png'
//     console.log("Bulb OF!");
//     document.body.style.backgroundColor="white";
// })



// document.querySelector('#on').addEventListener('click',()=>{
//     document.querySelector('img').src="Bulb ON (2).png"
// })

// document.querySelector('#of').addEventListener('click',()=>{
//     document.querySelector('img').src="Bulb OF (2).png"
// })