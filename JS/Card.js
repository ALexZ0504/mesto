import { popupPhoto, togglePopup } from "./index.js";

export default class Card {
  constructor(place, link, selector) {
    this._place = place;
    this._link = link;
    this._selector = selector;
  }
  _getTemplate() {
    const cardEl = document
      .querySelector(this._selector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
    return cardEl;
  }
  getCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__place').textContent = this._place;
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._place;
    return this._element;
  }
  _trash() {
    this._element.remove();
  }
  _like() {
    this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
  }
  _openPhoto() {
    popupPhoto.querySelector('.popup-photo__image').src = this._link;
    popupPhoto.querySelector('.popup-photo__place').textContent = this._place;
    togglePopup(popupPhoto);
  }
  _setEventListeners() {
    this._element.querySelector('.elements__like-button').addEventListener('click', () => {
      this._like();
    });
    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._trash();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openPhoto();
    });
  }
}