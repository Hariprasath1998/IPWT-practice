const textBox = document.getElementById('expression');
const output = document.getElementById('result');

const symbols = ['+','-','/','*','.'];
textBox.addEventListener('keydown', keyboardInput);

function reset(){
    textBox.value='';
    output.innerHTML='';
}

function keyboardInput(e){
    const input = e.key;
    
    takeInput(input);
}


function takeInput(input){
    console.log(input);
    if(!isNaN(input)){
        textBoxLength=textBox.value.length;
        textBox.value += input;
    }else if(symbols.includes(input)){
        re= /[\+\-\*\/]*[0-9]*\.[0-9]*$/;
        let expression = textBox.value;
        if(expression.length !== 0){
            if(input === '.' && expression.match(re)){
                return;
            }
            if(symbols.includes(expression[expression.length - 1])){
                
                expression = expression.slice(0,-1);
            };
            textBox.value = expression+input;        
        }
        
    }else if(input === 'Backspace'){
        let expression = textBox.value;
        expression = expression.slice(0,-1);
        textBox.value = expression;
    }else if(input === 'Enter'){
        if(output.innerHTML){
            let answer=output.innerHTML;
            console.log(answer)
            reset();
            textBox.value=answer;
            return;
        }
    }else{
        return;
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