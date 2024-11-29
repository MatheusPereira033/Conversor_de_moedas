/* criando nossa lógica de programação e criando passo a passo do JS */

//1° Pegar o nosso button de Converter
const convertButton = document.querySelector(".convert-button")

//4° Pegar o select (Para podermos verificar depois qual valor selecionamos para converter)
const currencySelect = document.querySelector(".currency-select")

//2° Criar uma função que vai ter o seguinte:
function convertValues(){
    //1° Criar uma variável para pegar o valor que for digitado no input
    const inputCurrencyValue = document.querySelector(".input-currency").value

    //3° Mapear/Pegar o valor em real - Valor para converter
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    //4° Maperar/Pegar o valor em dólar, euro, etc - Valor convertido
    const currencyValueConvert = document.querySelector(".currency-value")

    //2° Criar uma variável para armazenar o valor do dólar e euro
    const dolarToday = 5.2
    const euroToday = 6.2

    //Criar uma condição para verificar o currencySelect se ele for igual a dolar ele vai tomar uma ação. Ou se ele for igual a euro vai fazer tal coisa.
    if(currencySelect.value == "dolar"){
        //5° Aqui eu estou utilizando o innerHTML para dizer o seguinte: Pega o currencyValueToConvert e substitua ele pelo inputCurrencyValue que é o valor que vai ser digitado. Mas antes de colocar o inputCurrencyValue, vamos deixar o formato em R$ para ficar certinho, vamos deixar conforme a documentação que pegamos para deixar em R$.
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    //Para euro
    if(currencySelect.value == "euro"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

//6° Criar função para ser chamada sempre quando trocar de select. Ai vai trocar o nome da moeda
function changeCurrency(){
    //vou mapear o meu elemento
    const currencyName = document.getElementById("currency-name")

    //mapear a imagem
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    //Estou chamando a função de converter para manter o valor quando trocar o select.
    convertValues()
}

//5° Pegar o select e adicionar o addevEntListener, ou seja: Para ficar de olho quando algo acontecer; quando o select for selecionado
currencySelect.addEventListener("change", changeCurrency)

//3° Pegar o click do button de Converter e chamar a função
convertButton.addEventListener("click", convertValues)
