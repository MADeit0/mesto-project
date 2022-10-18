const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCards = document.querySelector('.popup_add-cards');

const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupBtnLeave = document.querySelectorAll('.popup__btn-leave');
const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');


const formProfile = document.querySelector('form[name = profile_data]');
const formCard = document.querySelector('form[name = add_img_data]');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const nameInput = formProfile.querySelector('input[name = firstname]');
const jobInput = formProfile.querySelector('input[name = activity]');



function opensPopup(classItem) {
  selector = classItem.classList;
  selector.add('popup_opened');
}

function closesPopup(classItem) {
  const millisecond = 300;
  const listItem = classItem.closest('.popup');

  listItem.classList.add('popup_closed');
  setTimeout(() => listItem.classList.remove('popup_opened', 'popup_closed'), millisecond);
}

function getDefValueInp(classText, classInput) {
  classInput.value = classText.textContent;
}

profileBtnEdit.addEventListener('click', () => {
  opensPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => opensPopup(popupAddCards));

popupBtnLeave.forEach((item) => {
  item.addEventListener('click', () => closesPopup(item));
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName || 'Жак-Ив Кусто';
  profileActivity.textContent = valueJob || 'Исследователь океана';

  closesPopup(formProfile);
}

formProfile.addEventListener('submit', formSubmitHandlerProfile);
// лайк через делегирование
const elementsCards = document.querySelector('.elements');

function addsLikeCads(event) {
  const likeCard = event.target.closest('.element__btn-like');

  if (likeCard) {
    likeCard.classList.toggle('element__btn-like_active');
  }
}

elementsCards.addEventListener('click', addsLikeCads);
// добавление списка ссылок в карточки
// массив url картинок
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
// ивент при загрузки страницы
document.addEventListener("DOMContentLoaded", downloadСards);

function downloadСards() {
  for (let i = 0; i < initialCards.length; i++) {
    const name = initialCards[i].name;
    const link = initialCards[i].link;

    addsElementCard(name, link);
  }
}

function addsElementCard(nameCard, linkCard) {
  const cardTemplate = document.querySelector('#tmp-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = nameCard
  cardElement.querySelector('.element__image').src = linkCard
  cardElement.querySelector('.element__image').alt = nameCard

  elementsCards.prepend(cardElement);
}
