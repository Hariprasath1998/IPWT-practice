const input = document.getElementById('expression');
const output = document.getElementById('result');

const symbols=['+','-','/','*','.'];

input.addEventListener('keyup',checkInput);

function checkInput(e){
    let inputValue = e.key;
    if(!isNaN(inputValue)){
        input.value += inputValue;
    }else if(symbols.includes(inputValue)){
        let expression=input.value;
        if(expression.length !== 0){
            if(symbols.includes(expression[expression.length - 1])){
                expression=expression.slice(0,-1);
            };
            input.value=expression+inputValue;        
        }
        
    }else if(e.key === 'Backspace'){
        let expression = e.target.value;
        expression = expression.slice(0,-1);
        e.target.value = expression;
    }
    calculate(e.target.value);
    console.log(e);
}


function calculate (expression) {
    if(expression){
        try{
            var result = eval(expression);
            output.innerText=result;
        }catch(err){
    
        }
        finally{
            
        }
    
    }
    
    
};