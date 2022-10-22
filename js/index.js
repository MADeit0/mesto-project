const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCards = document.querySelector('.popup_add-cards');
const popupShowImg = document.querySelector('.popup_show-img');

const profileButtonEdit = document.querySelector('.profile__btn-edit');
const popupButtonsLeave = document.querySelectorAll('.popup__btn-leave');
const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');


const formProfile = document.querySelector('form[name = profile_data]');
const formCard = document.querySelector('form[name = add_img_data]');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const nameInput = formProfile.querySelector('input[name = firstname]');
const jobInput = formProfile.querySelector('input[name = activity]');

const nameImgInput = formCard.querySelector('input[name = name_img]');
const linkInput = formCard.querySelector('input[name = url_img]');

const elementsCards = document.querySelector('.elements');

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

document.addEventListener("DOMContentLoaded", downloadСards);

function downloadСards() {
  for (let i = 0; i < initialCards.length; i++) {
    const nameCards = initialCards[i].name;
    const linkCards = initialCards[i].link;

    addsElementCard(nameCards, linkCards);
  }
}

function addsElementCard(nameCards, linkCards) {
  const cardTemplate = document.querySelector('#tmp-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = nameCards;
  cardElement.querySelector('.element__image').src = linkCards;
  cardElement.querySelector('.element__image').alt = nameCards;

  elementsCards.prepend(cardElement);
}

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

profileButtonEdit.addEventListener('click', () => {
  opensPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => {
  nameImgInput.value = '';
  linkInput.value = '';
  opensPopup(popupAddCards);
});

popupButtonsLeave.forEach((item) => {
  item.addEventListener('click', () => closesPopup(item));
});

function formSubmitHandlerProfile(event) {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  checkingStringsProfile(valueName, valueJob)
}

function checkingStringsProfile(valueName, valueJob) {
  if ((valueName !== '') && (valueJob !== '')) {
    profileName.textContent = valueName;
    profileActivity.textContent = valueJob;

    closesPopup(formProfile);
  }
}

formProfile.addEventListener('submit', formSubmitHandlerProfile);

function formSubmitHandlerCards(event) {
  event.preventDefault();

  let nameCard = elementsCards.name;
  let linkCard = elementsCards.link;

  nameCard = nameImgInput.value;
  linkCard = linkInput.value;

  checkingStringsCards(nameCard, linkCard)
}

function checkingStringsCards(nameCard, linkCard) {
  if ((nameCard !== '') && linkCard.startsWith('http') && linkCard.endsWith('.jpg')) {
    addsElementCard(nameCard, linkCard);
    closesPopup(formCard);
  }
}

formCard.addEventListener('submit', formSubmitHandlerCards);

function addsLikeCads(event) {
  const likeCard = event.target.closest('.element__btn-like');

  if (likeCard) {
    likeCard.classList.toggle('element__btn-like_active');
  }
}

function removeCards(event) {
  const removeCards = event.target.closest('.element__btn-remove');

  if (removeCards) {
    removeCards.closest('.element').remove();
  }
}

function showImgCard(event) {
  const showImgCard = event.target.closest('.element__image');

  if (showImgCard) {
    const element = showImgCard.closest('.element');
    const elementTitle = element.querySelector('.element__title');
    opensPopup(popupShowImg);
    popupShowImg.querySelector('.popup__image').src = showImgCard.src;
    popupShowImg.querySelector('.popup__image').alt = elementTitle.textContent;
    popupShowImg.querySelector('.popup__text').textContent = elementTitle.textContent;
  }
}

elementsCards.addEventListener('click', addsLikeCads);
elementsCards.addEventListener('click', removeCards);
elementsCards.addEventListener('click', showImgCard);
