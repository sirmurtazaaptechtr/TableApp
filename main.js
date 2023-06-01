const tab = document.getElementById('tab');
const tableArea = document.getElementById('tableArea');
const timeArea = document.getElementById('timeArea');

function dispTable()
{
    let tabNum = tab.value;
    tableArea.innerHTML = `<h4>Displaying table of ${tabNum}</h4>`;
    for(let count = 1;count <= 10;count++)
    {
        tableArea.innerHTML +=
        `<p>${tabNum} X ${count} = ${tabNum*count}</p>`;
    }
}

function dispTime() {
    let dt = new Date();
    timeArea.innerHTML = dt;
}

setInterval(dispTime,1000);

