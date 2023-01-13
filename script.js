// popup редактирования профиля + отправка формы

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

// popup добавления места

const popupCreate = document.querySelector('.popup-create');
const formCreate = document.querySelector('.popup-create__container');
const exitCreate = document.querySelector('.popup-create__exit-button');
const titleCreate = document.querySelector('.popup-create__title');
const placeCreate = document.querySelector('.popup-create__place');
const linkCreate = document.querySelector('.popup-create__link');
const saveCreate = document.querySelector('.popup-create__save-button');
const addButton = document.querySelector('.profile__add-button');

function addPlace() {
  popupCreate.style.display = "flex";
}

function closePlace() {
  popupCreate.style.display = "none";
}

addButton.addEventListener('click', addPlace);
exitCreate.addEventListener('click', closePlace);

// template добавить в DOM и на страницу

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (el) {
  const elements = document.querySelector('.elements');
  const template = document.querySelector('#element').content;
  const card = template.querySelector('.elements__element').cloneNode(true);
  const image = card.querySelector('.elements__image');
  const place = card.querySelector('.elements__place');
  image.src = el.link;
  image.alt = el.name;
  place.textContent = el.name;

  elements.append(card);
});