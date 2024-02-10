


function createCard(data) {
    let li = document.createElement('li');
    li.classList = "student-item cf";

    let divStudentDetails = document.createElement('div');
    divStudentDetails.classList = "student-details";

    let img = document.createElement('img');
    img.classList = "avatar";
    img.src = data.picture.medium;

    let name = document.createElement('h3');
    name.textContent = data.name.first + ' ' + data.name.last;

    let email = document.createElement('span');
    email.classList = "email";
    email.textContent = data.email;

    divStudentDetails.appendChild(img);
    divStudentDetails.appendChild(name);
    divStudentDetails.appendChild(email);

    let date = document.createElement('span');
    date.classList = "date";
    date.textContent = data.registered.date;

    let divJoinedDetails = document.createElement('div');
    divJoinedDetails.appendChild(date);

    let btnDelete = document.createElement('button');
    btnDelete.classList = "delete";
    btnDelete.textContent = "Delete";

    let btnUpdate = document.createElement('button');
    btnUpdate.classList = "update";
    btnUpdate.textContent = "Update";

    let divAction = document.createElement('div');
    divAction.appendChild(btnDelete);
    divAction.appendChild(btnUpdate);

    li.appendChild(divStudentDetails);
    li.appendChild(divJoinedDetails);
    li.appendChild(divAction);

    return li;

}

function attachCards(users) {
    let lista = document.querySelector(".student-list");
    lista.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let card = createCard(users[i]);
        lista.appendChild(card);
    }

}

//functie paginare [12,34,54,65,76,12,32,43,45,65]

function pagination(pageNumber, numberOfCards, users) {

    let aux = [];

    for (let i = numberOfCards * (pageNumber - 1); i < numberOfCards * pageNumber && i < users.length; i++) {

        aux.push(users[i]);
    }
    return aux;

}

function setPage(pageNumber) {
    let users = pagination(pageNumber, 9, data);
    attachCards(users);
}

function createButton(numberOfPages) {

    let lista = document.querySelector(".link-list");

    for (let i = 3; i <= numberOfPages; i++) {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.textContent = i;
        li.appendChild(btn);
        lista.appendChild(li);
    }

}

function generateButtons() {

    createButton(5);

}

function resetCards() {

    let cards = lista.children;

    for (let i = 0; i < cards.length; i++) {
        let parent = cards[i].parentNode;
        let div1 = parent.firstChild;

        let name = div1.firstChild;
        let email = div1.secondChild;
        let btnsave = cards[i].querySelector(".save");

        if (btnsave !== null) {
            if (btnsave.classList.contains("save")) {

                btnsave.classList = "update";
                btnsave.textContent = "Update";

                let newName = document.createElement("h3");
                newName.textContent = name.value;

                let newEmail = document.createElement(".email");
                newEmail.textContent = email.value;

                cards[i].replaceChild(newName, name);
                cards[i].replaceChild(newEmail, email);
            }
        }

    }

}



