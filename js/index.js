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

const nameInput = formProfile.querySelector('input[name = first-name]');
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

  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');

  titleElement.textContent = nameCards;
  imageElement.src = linkCards;
  imageElement.alt = nameCards;

  elementsCards.prepend(cardElement);
}

function opensPopup(classItem) {
  const selector = classItem.classList;
  selector.add('popup_opened');
}

function closesPopup(classItem) {
  const selector = classItem.closest('.popup');
  selector.classList.remove('popup_opened');
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

function submitProfileForm(event) {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName;
  profileActivity.textContent = valueJob;

  closesPopup(formProfile);
}

formProfile.addEventListener('submit', submitProfileForm);

function submitCardsForm(event) {
  event.preventDefault();

  let nameCard = elementsCards.name;
  let linkCard = elementsCards.link;

  nameCard = nameImgInput.value;
  linkCard = linkInput.value;

  addsElementCard(nameCard, linkCard);
  closesPopup(formCard);
}

formCard.addEventListener('submit', submitCardsForm);

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
