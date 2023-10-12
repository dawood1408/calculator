function getNumber(value) {
    document.getElementById('results').value += value;
}
function clearDisplay() {
    document.getElementById('results').value = '';
}
function getResult() {
    try {
        const result = eval(document.getElementById('results').value);
        document.getElementById('results').value = result;
    }catch (error) {
        document.getElementById('results').value = 'Error';
    }
}