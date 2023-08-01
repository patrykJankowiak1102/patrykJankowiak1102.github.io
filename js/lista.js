window.onload = load;

let list = [];
let checked = [];

document.getElementById("inputList").addEventListener('keydown', (e) => {

    if (e.key === "Enter") {

        addRow();
    }
});
function load() {

    if (!localStorage.getItem("listValue")) {

        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));
    } else {

        list = JSON.parse(localStorage.getItem("listValue"));
        checked = JSON.parse(localStorage.getItem("listChecked"));
    }

    for (let i = 0; i < list.length; i++) {

        if (checked[i] == 0) {

            $(`<div class="content"><input type="checkbox" class="check" id="${i}" onclick="done(${i})"><p class="textvalue" id="${i}">${list[i]}</p><button class="trash" id="${i}" onclick="remove(${i})">X</button></div>`).appendTo(".container");
        } else {

            $(`<div class="content"><input type="checkbox" class="check" id="${i}" onclick="done(${i})" checked><p class="textvalue" id="${i}">${list[i]}</p><button class="trash" id="${i}" onclick="remove(${i})">X</button></div>`).appendTo(".container");
        }
    }

    return list;
}
function addRow() {

    let input = document.getElementById("inputList").value;

    if (input !== "") {

        list.push(input);
        checked.push(0);

        $(`<div class="content"><input type="checkbox" class="check" id="${list.length}" onclick="done(${list.length})"><p class="textvalue" id="${list.length}">${input}</p><button class="trash" id="${list.length}" onclick="remove(${list.length})">X</button></div>`).appendTo(".container");

        $("#inputList").val('');

        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));
    }
}
function done(index) {

    if (checked[index] == 0) {

        checked.splice(index, 1, 1);
    } else {
        checked.splice(index, 1, 0);
    }

    localStorage.setItem("listChecked", JSON.stringify(checked));
}
function remove(index) {

    checked.splice(index, 1);
    list.splice(index, 1);

    localStorage.setItem("listValue", JSON.stringify(list));
    localStorage.setItem("listChecked", JSON.stringify(checked));

    document.location.reload(true);
}