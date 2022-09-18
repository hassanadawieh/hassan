let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.currentInput');
let buttons = document.querySelector('.currentInput');
let erasebtn = document.querySelector('.currentInput');
let clearbtn = document.querySelector('.currentInput');
let evaluate = document.querySelector('.currentInput');
let realTimeScreenValue = [];

clearbtn.addEventListener('click',()=>{
    realTimeScreenValue=[''];
    answerScreen.innerHTML=0;
    currentInput.clssName = 'currentImput';
    answerScreen.getElementsByClassName.color = "rgba(150,150,150,0.87)";

})

buttons.forEach((btn) => {
    btn.addEventListener('click',()=>{
        //wen clicked button is not erased button
        if(!btn.id.match('erase')){
            //to display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            //to evaluate answer in real time
            if(btn.classlist.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
        //when erase button is clicked
        if(btn.id.match('evaluate')){
            currentInput.className = 'answerScreen';
            answerScreen.className = "currentInput";
            answerScreen.getElementsByClassName.color = 'white';

        }
        //to prevent undefined error in screen
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0
        }
    })
})

console.log('hassan adawieh')