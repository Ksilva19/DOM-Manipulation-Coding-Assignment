let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('new-item').value;
    row.insertCell(1).innerHTML = document.getElementById('quantity').value;
});
