import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";

// popup редактирования профиля
const editButton = document.querySelector(".profile__edit-button");
const nameProfile = document.querySelector(".profile__name");
const descriptionProfile = document.querySelector(".profile__description");
const popupEdit = document.querySelector(".popup-edit");
const formEdit = document.querySelector(".form-edit");
const popupExit = document.querySelector(".popup__exit-button");
const nameInput = document.querySelector(".popup__name");
const descriptionInput = document.querySelector(".popup__description");

// popup добавления места
const popupCreate = document.querySelector(".popup-create");
const formCreate = document.querySelector(".form-create");
const exitCreate = document.querySelector(".popup-create__exit-button");
const placeCreate = document.querySelector(".popup-create__place");
const linkCreate = document.querySelector(".popup-create__link");
const addButton = document.querySelector(".profile__add-button");

// popup открытия картинки с подписью
const popupPhoto = document.querySelector(".popup-photo");
const exitPhoto = document.querySelector(".popup-photo__exit-button");
const saveButton = document.querySelector(".popup__save-button");

// массив исходных карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const formElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_block",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

// закрытие попапов по клику по оверлэю
document.addEventListener("click", function (evt) {
  evt.target.classList.remove("popup_opened");
  evt.stopPropagation();
});

// закрытие попапов на клавишу Esc
function esc(evt) {
  if (evt.key === "Escape") {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    document.removeEventListener("keydown", esc);
  }
}

// открыть/закрыть попап
function togglePopup(element) {
  element.classList.toggle("popup_opened");
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  document.addEventListener("keydown", esc);
  buttonChanging();
}

// отправка формы редактирования профиля
function submitForm(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  togglePopup(popupEdit);
}

function addCard() {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "#element");
    const cardEl = card.getCard();
    document.querySelector(".elements").append(cardEl);
  });
}

function create(evt) {
  evt.preventDefault();
  const card = new Card(placeCreate.value, linkCreate.value, "#element");
  const cardEl = card.getCard();
  document.querySelector(".elements").prepend(cardEl);
  togglePopup(popupCreate);
}

function buttonChanging() {
  if (popupEdit.classList.contains("popup-edit")) {
    saveButton.classList.remove("popup__save-button_block");
    saveButton.disabled = false;
  } else if (popupCreate.classList.contains("popup-create")) {
    saveButton.classList.add("popup__save-button_block");
    saveButton.disabled = true;
  }
}

const formAuthor = new FormValidator(formElements, popupEdit);
formAuthor.enableValidation();
const formCard = new FormValidator(formElements, popupCreate);
formCard.enableValidation();

editButton.addEventListener("click", () => togglePopup(popupEdit));
popupExit.addEventListener("click", () => togglePopup(popupEdit));
formEdit.addEventListener("submit", submitForm);
addButton.addEventListener("click", () => togglePopup(popupCreate));
exitCreate.addEventListener("click", () => togglePopup(popupCreate));
formCreate.addEventListener("submit", create);
exitPhoto.addEventListener("click", () => togglePopup(popupPhoto));

addCard();

export { popupPhoto, togglePopup };
