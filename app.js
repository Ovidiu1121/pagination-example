
generateButtons();

let inputSearch = document.querySelector(".searchBar");
let btnSearch = document.querySelector("[type=button]");
let lista = document.querySelector(".student-list");
let listaLinkuri = document.querySelector(".link-list");

listaLinkuri.addEventListener("click", (eve) => {

    Array.from(listaLinkuri.children).forEach(data => {
        console.log(data.children[0]);

        data.children[0].classList.remove("active");
    })


    let btn = eve.target;

    if (btn.tagName == "BUTTON") {

        setPage(btn.textContent);
        btn.classList.toggle("active");

    }

});

btnSearch.addEventListener("click", () => {

    let cards = lista.children;
    let searchText = inputSearch.value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].querySelector("h3");

        if (!name.textContent.toLowerCase().startsWith(searchText)) {
            cards[i].style.display = 'none';
        } else {
            cards[i].style.display = '';
        }

    }

});

function filterStudents(searchTerm) {
    if (!searchTerm) {
        return data;
    }

    return data.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

lista.addEventListener("click", (eve) => {

    let pressed = eve.target;
    let divbutoane = pressed.parentNode;
    let card = divbutoane.parentNode;
    let parent = card.parentNode;

    if (pressed.classList.contains("delete")) {
        lista.removeChild(card);
    } else if (pressed.classList.contains("update")) {

        //resetCards();

        pressed.classList = "save";
        pressed.textContent = "save";

        let name = document.querySelector("h3");
        let divNumeEmail = card.firstChild;

        let nameTextBox = document.createElement("input");
        nameTextBox.classList = "nametxtbox";
        nameTextBox.style = "textbox";
        nameTextBox.value = name.textContent;

        divNumeEmail.replaceChild(nameTextBox, name);

        let email = document.querySelector(".email");

        let emailTextBox = document.createElement("input");
        emailTextBox.classList = "emailtxtbox";
        emailTextBox.style = "textbox";
        emailTextBox.value = email.textContent;

        divNumeEmail.replaceChild(emailTextBox, email);

    } else if (pressed.classList.contains("save")) {

        pressed.classList = "update";
        pressed.textContent = "Update";

        let divNumeEmail = card.firstChild;
        let nametextbox = document.querySelector(".nametxtbox");
        let emailtextbox = document.querySelector(".emailtxtbox");


        if (nametextbox.value !== "") {
            let newName = document.createElement("h3");
            newName.classList = "name";
            newName.textContent = nametextbox.value;

            divNumeEmail.replaceChild(newName, nametextbox);

        }

        if (emailtextbox.value !== "") {
            let newName = document.createElement("span");
            newName.classList = "email";
            newName.textContent = emailtextbox.value;

            divNumeEmail.replaceChild(newName, emailtextbox);

        }

    }

});


setPage(1);


