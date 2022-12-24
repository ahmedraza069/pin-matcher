function emptyValue(id){
    document.getElementById(id) = '';
}

function emptyText(id) {
    document.getElementById(id).innerText = '';
}

function displayNone(id){
    document.getElementById(id).style.display = 'none';
}

function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

function randomNumFun(){
    var randomNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('generatePin').value = randomNumber;
    
    emptyValue('inputPin');
}

function btnKey(id){
    let preValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerText;
    document.getElementById('inputPin').value = preValue + key;
}

function clean(){
    document.getElementById('inputPin').value = '';
}

function cleanLast(){
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}