const display = document.querySelector(".display")

function append(input) {
    display.value += input
}

function cleardisplay() {
    display.value = ''
}
function calculate() {
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value ="Error";

    }
    
}

function del(){
    display.value=display.value.slice(0,-1)
}


