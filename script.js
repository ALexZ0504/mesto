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
const elements = document.querySelector('.elements');
const template = document.querySelector('#element').content;

function addCard(el) {
  const card = template.querySelector('.elements__element').cloneNode(true);
  const image = card.querySelector('.elements__image');
  const place = card.querySelector('.elements__place');

  image.src = el.link;
  image.alt = el.name;
  place.textContent = el.name;

  elements.append(card);
};

// метод, применяемый к каждому элементу массива
initialCards.forEach(addCard);

// popup добавления места: открыть, закрыть, отправить форму (в процессе)
function addPlace() {
  popupCreate.style.display = "flex";
}

function closePlace() {
  popupCreate.style.display = "none";
}

function create(evt) {
  evt.preventDefault();

  document.querySelector('.elements__place').textContent = placeCreate.value;
  document.querySelector('.elements__image').src = linkCreate.value;

  closePlace();
}

addButton.addEventListener('click', addPlace);
exitCreate.addEventListener('click', closePlace);
formCreate.addEventListener('submit', create);

// функция лайка
const like = document.querySelector('.elements__like-button');
like.addEventListener('click', function (e) {
  if (like.className === 'elements__like-button') {
    like.className = 'elements__like-button_active';
  } else {
    like.className = 'elements__like-button';
  }
});