import { getInput, setOutput, setFailed } from '@actions/core';

try{
    
    var num1 = getInput('num1');
    var num2 = getInput('num2');
    
    var result = parseInt(num1) + parseInt(num2);
    
    setOutput("result", result);
}catch(error){
    setFailed(error.message);
}


//ncc build index.js to compile this file