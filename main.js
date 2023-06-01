const tab = document.getElementById('tab');
const dispArea = document.getElementById('dispArea');
function dispTable()
{
    let tabNum = tab.value;
    dispArea.innerHTML = `<h4>Displaying table of ${tabNum}</h4>`;
    for(let count = 1;count <= 10;count++)
    {
        dispArea.innerHTML +=
        `<p>${tabNum} X ${count} = ${tabNum*count}</p>`;
    }
}