var textArray = [];

function input(button){
    var textBox = document.getElementById("input");
    textBox.value += button.value;
}

function clearEntry(){
    var textBox = document.getElementById("input");
    textBox.value = "";
}

function clear(){
    textArray = [];
    clearEntry();
}

function toggleSign(){
    var textBox = document.getElementById("input");
    if(textBox.value.charAt(0) === '-'){
        textBox.value = textBox.value.substring(1);
    }
    else{
        textBox.value = '-' + textBox.value;
    }
}

function calculate(){
    var textBox = document.getElementById("input");
    var expression = textBox.value.replace(/X/g,'*').replace(/÷/g, '/');
    try{
        var result = eval(expression);
        textBox.value = result;
    }
    catch(e){
        textArray.value = "ERROR";
    }
}

document.querySelector('.clearEntry').addEventListener('click',clearEntry);
document.querySelector('.clear').addEventListener('click',clear);
document.querySelector('.swap').addEventListener('click',toggleSign);
document.querySelector('.equal').addEventListener('click',calculate);

document.addEventListener('keydown',function(event){
    var textBox = document.getElementById("input");
    var key = event.key;

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        textBox.value += key;
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        textBox.value = textBox.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearEntry();
    }

});