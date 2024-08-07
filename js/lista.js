var list = [];
var checked = [];
window.onload = load;
var inputList = document.getElementById("inputList");
var container = document.querySelector(".container");
inputList === null || inputList === void 0 ? void 0 : inputList.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        addRow();
    }
});
function load() {
    if (!localStorage.getItem("listValue")) {
        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));
    }
    else {
        list = JSON.parse(localStorage.getItem("listValue") || '[]');
        checked = JSON.parse(localStorage.getItem("listChecked") || '[]');
    }
    renderList();
}
function renderList() {
    container.innerHTML = ''; // Clear previous content
    var _loop_1 = function (i) {
        var isChecked = checked[i] === 1 ? 'checked' : '';
        var div = document.createElement('div');
        div.classList.add('content');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check');
        checkbox.checked = checked[i] === 1;
        checkbox.addEventListener('click', function () { return done(i); });
        var textValue = document.createElement('p');
        textValue.classList.add('textvalue');
        textValue.textContent = list[i];
        var button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', function () { return remove(i); });
        div.appendChild(checkbox);
        div.appendChild(textValue);
        div.appendChild(button);
        container.appendChild(div);
    };
    for (var i = 0; i < list.length; i++) {
        _loop_1(i);
    }
}
function addRow() {
    var inputValue = inputList.value.trim();
    if (inputValue !== "") {
        list.push(inputValue);
        checked.push(0);
        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));
        renderList();
        inputList.value = '';
    }
}
function done(index) {
    checked[index] = checked[index] === 0 ? 1 : 0;
    localStorage.setItem("listChecked", JSON.stringify(checked));
}
function remove(index) {
    checked.splice(index, 1);
    list.splice(index, 1);
    localStorage.setItem("listValue", JSON.stringify(list));
    localStorage.setItem("listChecked", JSON.stringify(checked));
    renderList();
}
