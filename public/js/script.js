function addToInput(value) {
    document.getElementById('inputField').value += value;
  }
  
  function calculate() {
    var input = document.getElementById('inputField').value;
    var result = eval(input);
    if (result == undefined){
        alert("No values provided to perform calculation")
    }
    else{
        document.getElementById('inputField').value = result;
    }
  }
  
  function clearInput() {
    document.getElementById('inputField').value = '';
    document.getElementById('result').innerText = '';
  }
  