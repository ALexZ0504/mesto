// popup редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup-edit');
const formEdit = document.querySelector('.form-edit');
const popupExit = document.querySelector('.popup__exit-button');
const nameInput = document.querySelector('.popup__name');
const descriptionInput = document.querySelector('.popup__description');

// закрытие попапа на клавишу Esc
function esc(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', esc);
  }
}

// закрытие попапов по клику по оверлэю
document.addEventListener('click', function (evt) {
  evt.target.classList.remove('popup_opened');
  evt.stopPropagation();
});

function togglePopup(element) {
  element.classList.toggle('popup_opened');
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  document.addEventListener('keydown', esc);
  placeCreate.value = '';
  linkCreate.value = '';
  enableValidation();
}

function submitForm(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  togglePopup(popupEdit);
}

editButton.addEventListener('click', () => togglePopup(popupEdit));
popupExit.addEventListener('click', () => togglePopup(popupEdit));
formEdit.addEventListener('submit', submitForm);

// popup добавления места
const popupCreate = document.querySelector('.popup-create');
const formCreate = document.querySelector('.form-create');
const exitCreate = document.querySelector('.popup-create__exit-button');
const placeCreate = document.querySelector('.popup-create__place');
const linkCreate = document.querySelector('.popup-create__link');
const addButton = document.querySelector('.profile__add-button');

// popup открытия картинки с подписью
const popupPhoto = document.querySelector('.popup-photo');
const formPhoto = document.querySelector('.popup-photo__container');
const exitPhoto = document.querySelector('.popup-photo__exit-button');
const imagePhoto = document.querySelector('.popup-photo__image');
const placePhoto = document.querySelector('.popup-photo__place');

// массив исходных карточек
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

// функция создания template в DOM и добавление на страницу
function addCard(el) {
  const elements = document.querySelector('.elements');
  const template = document.querySelector('#element').content;
  const card = template.querySelector('.elements__element').cloneNode(true);
  const image = card.querySelector('.elements__image');
  const place = card.querySelector('.elements__place');
  const like = card.querySelector('.elements__like-button');
  const trash = card.querySelector('.elements__trash');

  image.src = el.link;
  image.alt = el.name;
  place.textContent = el.name;

  like.addEventListener('click', function () {
    if (like.className === 'elements__like-button') {
      like.className = 'elements__like-button_active';
    } else {
      like.className = 'elements__like-button';
    }
  });

  trash.addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });

  elements.prepend(card);

  image.addEventListener('click', function (e) {
    const photo = e.target;
    imagePhoto.src = photo.src;
    placePhoto.textContent = photo.alt;
    togglePopup(popupPhoto);
  });
};

exitPhoto.addEventListener('click', () => togglePopup(popupPhoto));

// метод, применяемый к каждому элементу массива
initialCards.forEach(addCard);

function create(evt) {
  evt.preventDefault();

  const cardNew = {};
  cardNew.name = placeCreate.value;
  cardNew.link = linkCreate.value;

  addCard(cardNew);
  togglePopup(popupCreate);
}

addButton.addEventListener('click', () => togglePopup(popupCreate));
exitCreate.addEventListener('click', () => togglePopup(popupCreate));
formCreate.addEventListener('submit', create);