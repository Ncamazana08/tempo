let celsuis = document.getElementById('celsius');
let  = document.getElementById('fahrenheit');

celsuis.oninput = () => {
    let output = parseFloat(celsuis.value) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};
fahrenheit.oninput = () => {
    let output = parseFloat(fahrenheit.value) * 9 / 5 + 32;
    celsuis.value = parseFloat(output.toFixed(2));
};
