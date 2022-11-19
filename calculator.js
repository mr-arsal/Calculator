let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
screenValue = '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText
        console.log(buttonText)
        if(buttonText == 'X'){
            buttonText = '*'
            // screenValue is not a variable..it's a string
            screenValue += buttonText
            screen.value = screenValue;
        }
        
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)
        }
        else{
            screenValue += buttonText
            screen.value = screenValue;
        }
    })
}