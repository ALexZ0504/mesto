const editButton = document.querySelector('.profile__edit-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');
const popupExit = document.querySelector('.popup__exit-button');
const nameInput = document.querySelector('.popup__name');
const descriptionInput = document.querySelector('.popup__description');
const saveButton = document.querySelector('.popup__save-button');

function edit() {
  popup.style.display = "flex";
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

function close() {
  popup.style.display = "none";
}

function submitForm(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  close();
}

editButton.addEventListener('click', edit);
popupExit.addEventListener('click', close);
form.addEventListener('submit', submitForm);