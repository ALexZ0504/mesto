// popup редактирования профиля: открытие, закрытие и отправка формы
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
  popup.classList.toggle('popup_opened');
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

function close() {
  popup.classList.toggle('popup_opened');
}

function submitForm(e) {
  e.preventDefault();

  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;

  close();
}

editButton.addEventListener('click', edit);
// popupExit.addEventListener('click', close);
popup.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup__exit-button')) {
    close();
  } else if (event.target.classList.contains('popup_opened')) {
    close();
  }
});
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
    popupPhoto.classList.add('popup-photo_opened');
    imagePhoto.src = photo.src;
    placePhoto.textContent = photo.alt;
  });

  // exitPhoto.addEventListener('click', function () {
  //   popupPhoto.classList.remove('popup-photo_opened');
  // });
  popupPhoto.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup-photo__exit-button')) {
      popupPhoto.classList.remove('popup-photo_opened');
    } else if (event.target.classList.contains('popup-photo_opened')) {
      popupPhoto.classList.remove('popup-photo_opened');
    }
  });
};

// метод, применяемый к каждому элементу массива
initialCards.forEach(addCard);

// popup добавления места: открыть, закрыть, отправить форму
function addPlace() {
  popupCreate.classList.toggle('popup-create_opened');
}

function closePlace() {
  popupCreate.classList.toggle('popup-create_opened');
  placeCreate.value = '';
  linkCreate.value = '';
}

function create(evt) {
  evt.preventDefault();

  const cardNew = {};
  cardNew.name = placeCreate.value;
  cardNew.link = linkCreate.value;

  initialCards.unshift(cardNew);
  addCard(cardNew);
  closePlace()
}

addButton.addEventListener('click', addPlace);
// exitCreate.addEventListener('click', closePlace);
popupCreate.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup-create__exit-button')) {
    closePlace();
  } else if (event.target.classList.contains('popup-create_opened')) {
    closePlace();
  }
});
formCreate.addEventListener('submit', create);