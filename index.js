var resultField = $('#result');
function insertNumber(num) {
    var xnumber = resultField.val();
    resultField.val(xnumber + num);
}


function clearFunc() {
    resultField.val('');
}


function sum() {
    var result = eval(resultField.val());
    console.log(result);
    resultField.val(result);
}

function deletNumber() {
    var xnumber = resultField.val();
    resultField.val(xnumber.slice(0, - 1));
}



