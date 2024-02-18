


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

        let btnsave = cards[i].querySelector(".save");

        if (btnsave !== null) {
            if (btnsave.classList.contains("save")) {

                let parent = cards[i];
                let div1 = parent.firstChild;

                let name = div1.querySelector(".nametxtbox");
                let email = div1.querySelector(".emailtxtbox");

                console.log(name.textContent);

                btnsave.classList = "update";
                btnsave.textContent = "Update";

                let newName = document.createElement("h3");
                newName.textContent = name.textContent;

                let newEmail = document.createElement(".email");
                newEmail.classList = "email";
                newEmail.textContent = email.value;

                div1.replaceChild(newName, name);
                div1.replaceChild(newEmail, email);



            }
        }

    }

}

function deleteByEmail(email) {
    let aux = data.filter(el => el.email !== email);
    data = [...aux];
}

function updateBYEmail(email, newEmail, newName) {

    const aux = data.findIndex(item => item.email === email);

    data[aux - 1].email = newEmail;
    data[aux - 1].name.first = newName;
    data[aux - 1].name.last = '';


}

function findByEmail(email) {

    let aux = data.findIndex(a => a.email === email);
    return data[aux];

}

//card update

/*<li class="student-item cf">
    <div class="student-details">
        <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <input class="nametxtbox">
                <input class="emailtxtbox">
                </div>
                <div class="joined-details">
                    <span class="date">Joined 12-15-2005</span>
                </div>
                <div class="action">
                    <button class="delete">Delete</button>
                    <button class="update">Update</button>
                </div>
            </li>*/

//card initial

/*<li class="student-item cf">
<div class="student-details">
<img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
<h3>Ethel Dean</h3>
<span class="email">ethel.dean@example.com</span>
</div>
<div class="joined-details">
<span class="date">Joined 12-15-2005</span>
</div>
<div class="action">
<button class="delete">Delete</button>
<button class="update">Update</button>
</div>
</li>*/

function setCardInitState(card, email) {
    let obj = findByEmail(email);

    card.innerHTML = `
        <div class="student-details">
            <img class="avatar" src="${obj.picture.large}" alt="Profile Picture">
            <h3>${obj.name.first + " " + obj.name.last}</h3>
            <span class="email">${obj.email}</span>
        </div>
        <div class="joined-details">
            <span class="date">${obj.registered.date}</span>
        </div>
        <div class="action">
            <button class="delete">Delete</button>
            <button class="update">Update</button>
        </div>
    `;
}

function addCard(card) {

    data.push(card);

}

