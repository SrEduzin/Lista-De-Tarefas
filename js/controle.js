let count = 0;
let input = document.getElementById('inputTarefa');
let bntAdd = document.getElementById('btn-add');
let main = document.getElementById('arealista');

function addtarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput != undefined)) {
        ++count;
        let newItem = `<section class="item" id="${count}">
        <div onclick="marcarTarefa(${count})"class="item-icone">
            <i id="icon_${count}" class="material-icons">
                radio_button_unchecked</i>
        </div>
        <div onclick="marcarTarefa(${count})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete"  onclick="deletar(${count})"><i class="material-icons">delete</i>Deletar</button>
        </div>
    </section>`;
        main.innerHTML += newItem;
        input.value = "";
        input.focus();
    }

}
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icon_' + id);
        icone.innerHTML = "radio_button_checked";
        icone.classList.add('checked-icon');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icon_' + id);
        icone.innerHTML = "radio_button_unchecked";
        icone.classList.remove('checked-icon');

    }

}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        bntAdd.click();
    }
})