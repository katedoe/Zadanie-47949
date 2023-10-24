let paragraf = document.getElementById('paragraf');

document.querySelector('#dodaj').onclick = function () {
    paragraf.textContent = "Przykładowy tekst";
}

document.querySelector('#usun').onclick = function () {
    paragraf.textContent = "";
}

