const outcome = document.getElementById('outcome');

function getKeys (item){
    
    var addNums = item.innerHTML;
    

    if(addNums == "C"){
        outcome.innerHTML = '';
    } else if (addNums == "B"){
        outcome.innerHTML = outcome.innerHTML.substr(0, outcome.innerHTML.length - 1 );
    } else if ( addNums == "=") {
        outcome.innerHTML = eval(outcome.innerHTML);
    } else {
        outcome.innerHTML += addNums;
    }
}