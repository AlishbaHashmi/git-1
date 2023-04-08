let display=document.getElementById('display')

function input(cal){
    display.value=display.value+cal;
}

function allclear(){
    display.value=' ';
}

function equal(){
    display.value=eval(display.value);
}
