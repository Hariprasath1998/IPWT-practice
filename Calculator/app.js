const textBox = document.getElementById('expression');
const output = document.getElementById('result');

const symbols = ['+','-','/','*','.'];
textBox.addEventListener('keyup', keyboardInput);

function reset(){
    textBox.value='';
    output.innerHTML='';
    console.log('dumuk');
}

function keyboardInput(e){
    const input = e.key;
    takeInput(input);
}


function takeInput(input){
    if(!isNaN(input)){
        textBox.value += input;
    }else if(symbols.includes(input)){
        let expression = textBox.value;
        if(expression.length !== 0){
            if(symbols.includes(expression[expression.length - 1])){
                expression = expression.slice(0,-1);
            };
            textBox.value = expression+input;        
        }
        
    }else if(input === 'Backspace'){
        let expression = textBox.value;
        expression = expression.slice(0,-1);
        textBox.value = expression;
    }
    calculate(textBox.value);
}


function calculate (expression) {
    if(expression){
        try{
            var result = eval(expression);
            output.innerText = result;
        }catch(err){

        }
        finally{
            
        }
    
    }else{
        reset();
    }
};