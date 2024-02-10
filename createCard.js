document.addEventListener('DOMContentLoaded', function () {
    let btnSubmit = document.querySelector('.btnCreateCard');

    function createCard(data) {
        let li = document.createElement('li');
        li.classList = "student-item cf";

        let divStudentDetails = document.createElement('div');
        divStudentDetails.classList = "student-details";

        let img = document.createElement('img');
        img.classList = "avatar";
        img.src = "https://randomuser.me/api/portraits/women/25.jpg";

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
        let divButtons = document.createElement('div');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList = 'delete';
        divButtons.appendChild(deleteButton);

        let updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList = 'update';
        divButtons.appendChild(updateButton);

        li.appendChild(divStudentDetails);
        li.appendChild(divJoinedDetails);
        li.appendChild(divButtons);

        return li;
    }

    btnSubmit.addEventListener("click", () => {
        let firstName = document.querySelector('.firstName').value;
        let lastName = document.querySelector('.lastName').value;
        let email = document.querySelector('.email').value;
        let avatarURL = document.querySelector('.avatarURL').value;
        let registrationDate = document.querySelector('.registrationDate').value;

        const obiect = {
            name: {
                first: firstName,
                last: lastName
            },
            email: email,
            picture: {
                medium: avatarURL
            },
            registered: {
                date: registrationDate
            }
        };

        let card = createCard(obiect);

        let lista = document.querySelector(".student-list");

        console.log(lista);

        //lista.appendChild(card);

        document.getElementById('formData').reset();
    });


});

