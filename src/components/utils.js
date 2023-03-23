export const popup = document.querySelector(".popup");
export const formElement = document.querySelector("form");
export const elements = document.querySelector(".elements");
export const editButton = document.querySelector(".profile__edit-button");
export const nameProfile = document.querySelector(".profile__name");
export const descriptionProfile = document.querySelector(
  ".profile__description"
);
export const popupEdit = document.querySelector(".popup-edit");
export const popupExit = document.querySelector(".popup__exit-button");
export const nameInput = document.querySelector(".popup__name");
export const descriptionInput = document.querySelector(".popup__description");

export const popupCreate = document.querySelector(".popup-create");
export const placeCreate = document.querySelector(".popup-create__place");
export const linkCreate = document.querySelector(".popup-create__link");
export const addButton = document.querySelector(".profile__add-button");

export const popupPhoto = document.querySelector(".popup-photo");
export const saveButton = document.querySelector(".popup__save-button");

export const formElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_block",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

export const userFormProfile = {
  name: name,
  text: info,
};

export const initialCards = [
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
