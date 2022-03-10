function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmDolarAmericano = (valorEmReal / 5.01).toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertidoUsa");
    var valorConvertido = "O resultado em Dólar é U$ " + valorEmDolarAmericano;
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmEuro = (valorEmReal / 5.54).toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertidoEur");
    var valorConvertido = "O resultado em Euro é " + valorEmEuro + "€";
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterCad() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmDolarCanadense = (valorEmReal / 3.91).toFixed(2);
  
    var elementoValorConvertido = document.getElementById("valorConvertidoCad");
    var valorConvertido = "O resultado em CAD é C$ " + valorEmDolarCanadense;
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
