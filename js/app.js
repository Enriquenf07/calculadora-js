const input = document.querySelector(".input")

const botaoC = document.getElementById("botao-c")
const botaoParent = document.getElementById("botao-parenteses")
const botaoPorcent = document.getElementById("botao-porcent")
const botaoDiv = document.getElementById("botao-div")
const botaoX = document.getElementById("botao-x")
const botaoMenos = document.getElementById("botao-menos")
const botaoMais = document.getElementById("botao-mais")
const botaoPonto = document.getElementById("botao-ponto")
const botaoIgual = document.getElementById("botao-igual")

const botao7 = document.getElementById("botao-7")
const botao8 = document.getElementById("botao-8")
const botao9 = document.getElementById("botao-9")
const botao4 = document.getElementById("botao-4")
const botao5 = document.getElementById("botao-5")
const botao6 = document.getElementById("botao-6")
const botao1 = document.getElementById("botao-1")
const botao2 = document.getElementById("botao-2")
const botao3 = document.getElementById("botao-3")
const botao0 = document.getElementById("botao-0")

let var1
let var2
let operacao
let flag = true
let flag2 = true
let flag3 = true
let parentContador = 1

let inputString = "0"
let operacaoString = ""
let inputString2 = ""
let resultado 

function inputFunction(botao){
    if (flag){
        if (flag2){
            if(inputString.length >= 15){
                alert("Numero maximo!")
                return
            }
            inputString = inputString.slice(1) + botao
            input.innerText = inputString
            flag2 = false
        }
        else{
            if(inputString.length >= 15){
                alert("Numero maximo!")
                return
            }
            inputString = inputString + botao
            input.innerText = inputString
        }
        
    }
    else{
        if(inputString2.length >= 15){
            alert("Numero maximo!")
            return
        }
        inputString2 = inputString2 + botao
        input.innerText = operacaoString + inputString2
        
    }  
}

function inputPorcent(){
    if (flag){
        var1 = parseFloat(inputString)
        operacao = "porcent"
        inputResultado()
    }
    else{
        var2 = parseFloat(inputString2)
        var2 = var1 * (var2/100)
        inputString2 = "" + var2
        inputResultado()
    }
    
}

function inputC(){
    inputString = "0"
    input.innerText = inputString
    flag = true
    flag2 = true
    flag3 = true
}

function inputMais(){
    if (flag3){
        var1 = parseFloat(inputString)
        operacaoString = inputString + ' + '
        input.innerText = operacaoString
        operacao = "mais"
        flag = false
        flag3 = false
    }  
}

function inputMenos(){    
    if(flag3){
    var1 = parseFloat(inputString)
    operacaoString = inputString + ' - '
    input.innerText = operacaoString
    operacao = "menos"
    flag = false
    flag3 = false
    }
}

function inputDiv(){
    if(flag3){
    var1 = parseFloat(inputString)
    operacaoString = inputString + ' / '
    input.innerText = operacaoString
    operacao = "div"
    flag = false
    flag3 = false
    }
}

function inputX(){
    if(flag3){
    var1 = parseFloat(inputString)
    operacaoString = inputString + ' x '
    input.innerText = operacaoString
    operacao = "multi"
    flag = false
    flag3 = false
    }
}

function inputResultado(){
    if (operacao == "mais"){
        var2 = parseFloat(inputString2)
        resultado = var1 + var2
        input.innerText = resultado
        inputString = '' + resultado
        operacaoString = ""
        inputString2 = ""
        operacao = ""
        flag = true
        flag3 = true
    }
    else if (operacao == "menos"){
        var2 = parseFloat(inputString2)
        resultado = var1 - var2
        input.innerText = resultado
        inputString = '' + resultado
        operacaoString = ""
        inputString2 = ""
        operacao = ""
        flag = true
        flag3 = true
    }
    else if (operacao == "div"){
        var2 = parseFloat(inputString2)
        resultado = var1 / var2
        input.innerText = resultado
        inputString = '' + resultado
        operacaoString = ""
        inputString2 = ""
        operacao = ""
        flag = true
        flag3 = true
    }
    else if (operacao == "multi"){
        var2 = parseFloat(inputString2)
        resultado = var1 * var2
        input.innerText = resultado
        inputString = '' + resultado
        operacaoString = ""
        inputString2 = ""
        operacao = ""
        flag = true
        flag3 = true
    }
    else if (operacao == "porcent"){
        resultado = var1/100
        input.innerText = resultado
        inputString = '' + resultado
        operacaoString = ""
        inputString2 = ""
        operacao = ""
        flag = true
        flag3 = true
    }
}



botao7.addEventListener("click", function(){return inputFunction("7")})
botao8.addEventListener("click", function(){return inputFunction("8")})
botao9.addEventListener("click", function(){return inputFunction("9")})
botao4.addEventListener("click", function(){return inputFunction("4")})
botao5.addEventListener("click", function(){return inputFunction("5")})
botao6.addEventListener("click", function(){return inputFunction("6")})
botao1.addEventListener("click", function(){return inputFunction("1")})
botao2.addEventListener("click", function(){return inputFunction("2")})
botao3.addEventListener("click", function(){return inputFunction("3")})
botao0.addEventListener("click", function(){return inputFunction("0")})
botaoPonto.addEventListener("click", function(){return inputFunction(".")})

botaoPorcent.addEventListener("click", inputPorcent)
botaoC.addEventListener("click", inputC)
botaoMais.addEventListener("click", inputMais)
botaoMenos.addEventListener("click", inputMenos)
botaoX.addEventListener("click", inputX)
botaoDiv.addEventListener("click", inputDiv)
botaoIgual.addEventListener("click", inputResultado)
