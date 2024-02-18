
generateButtons();

let inputSearch = document.querySelector(".searchBar");
let btnSearch = document.querySelector("[type=button]");
let lista = document.querySelector(".student-list");
let listaLinkuri = document.querySelector(".link-list");
let cardInEditMode = null;
let btnaddcard = document.querySelector(".create-card");

listaLinkuri.addEventListener("click", (eve) => {

    Array.from(listaLinkuri.children).forEach(data => {
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
    let btnOrder = document.querySelector(".active");
    let email = card.querySelector(".email");

    if (pressed.classList.contains("delete")) {

        deleteByEmail(email.textContent);
        setPage(btnOrder.textContent);

    } else if (pressed.classList.contains("update")) {

        if (cardInEditMode) {
            setCardInitState(cardInEditMode.card, cardInEditMode.email.textContent);
        }

        pressed.classList = "save";
        pressed.textContent = "save";

        let name = card.querySelector("h3");
        let divNumeEmail = card.firstChild;

        let nameTextBox = document.createElement("input");
        nameTextBox.classList = "nametxtbox";
        nameTextBox.style = "textbox";
        nameTextBox.value = name.textContent;

        let emailTextBox = document.createElement("input");
        emailTextBox.classList = "emailtxtbox";
        emailTextBox.style = "textbox";
        emailTextBox.value = email.textContent;

        divNumeEmail.replaceChild(emailTextBox, email);
        divNumeEmail.replaceChild(nameTextBox, name);

        cardInEditMode = { card, email };

    } else if (pressed.classList.contains("save")) {

        pressed.classList = "update";
        pressed.textContent = "Update";

        let divNumeEmail = card.firstChild;
        let nametextbox = document.querySelector(".nametxtbox");
        let emailtextbox = document.querySelector(".emailtxtbox");
        let email = document.querySelector(".email");

        if (nametextbox.value !== "" && emailtextbox.value !== "") {

            updateBYEmail(email.textContent, emailtextbox.value, nametextbox.value);
            setPage(btnOrder.textContent);

            let newName = document.createElement("h3");
            newName.classList = "name";
            newName.textContent = nametextbox.value;

            divNumeEmail.replaceChild(newName, nametextbox);

            let newEmail = document.createElement("span");
            newEmail.classList = "email";
            newEmail.textContent = emailtextbox.value;

            divNumeEmail.replaceChild(newEmail, emailtextbox);

            cardInEditMode = null;

        }

    }

});

btnaddcard.addEventListener("click", () => {
    let aside = document.querySelector(".aside-container");

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter name";
    inputContainer.appendChild(nameInput);

    let emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "Enter email";
    inputContainer.appendChild(emailInput);

    let dateInput = document.createElement("input");
    dateInput.type = "text";
    dateInput.placeholder = "Enter date";
    inputContainer.appendChild(dateInput);

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", () => {
        let newName = nameInput.value;
        let newEmail = emailInput.value;
        let newDate = dateInput.value;

        if (newName && newEmail && newDate) {

            let newData = {
                name: {
                    title: "Miss",
                    first: newName,
                    last: "",
                },
                email: newEmail,
                registered: {
                    date: newDate,
                    age: 0,
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/25.jpg",
                    medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
                    thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
                },
            };

            addCard(newData);

            inputContainer.remove();
        }
    });

    aside.appendChild(inputContainer);
    inputContainer.appendChild(saveButton);
});



setPage(1);


