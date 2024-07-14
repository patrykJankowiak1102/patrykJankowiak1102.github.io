let list: string[] = [];
let checked: number[] = [];

window.onload = load;

const inputList = document.getElementById("inputList") as HTMLInputElement;
const container: any = document.querySelector(".container");

inputList?.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addRow();
    }
});

function load() {
    if (!localStorage.getItem("listValue")) {
        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));
    } else {
        list = JSON.parse(localStorage.getItem("listValue") || '[]');
        checked = JSON.parse(localStorage.getItem("listChecked") || '[]');
    }

    renderList();
}

function renderList() {
    container.innerHTML = ''; // Clear previous content

    for (let i = 0; i < list.length; i++) {
        const isChecked = checked[i] === 1 ? 'checked' : '';

        const div = document.createElement('div');
        div.classList.add('content');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check');
        checkbox.checked = checked[i] === 1;
        checkbox.addEventListener('click', () => done(i));

        const textValue = document.createElement('p');
        textValue.classList.add('textvalue');
        textValue.textContent = list[i];

        const button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', () => remove(i));

        div.appendChild(checkbox);
        div.appendChild(textValue);
        div.appendChild(button);

        container.appendChild(div);
    }
}

function addRow() {
    let inputValue = inputList.value.trim();

    if (inputValue !== "") {
        list.push(inputValue);
        checked.push(0);

        localStorage.setItem("listValue", JSON.stringify(list));
        localStorage.setItem("listChecked", JSON.stringify(checked));

        renderList();

        inputList.value = '';
    }
}

function done(index: number) {
    checked[index] = checked[index] === 0 ? 1 : 0;

    localStorage.setItem("listChecked", JSON.stringify(checked));
}

function remove(index: number) {
    checked.splice(index, 1);
    list.splice(index, 1);

    localStorage.setItem("listValue", JSON.stringify(list));
    localStorage.setItem("listChecked", JSON.stringify(checked));

    renderList();
}
