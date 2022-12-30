import { enableValidation } from '../components/validate.js';

import {
  opensPopup,
  closesPopup,
  getDefValueInp
} from '../components/modal.js';

import {
  elementsCards,
  addsElementCard,
  downloadСards,
  addsLikeCads,
  removeCards,
  showImgCard
} from '../components/card.js';


const popupEditProfile = document.querySelector('.popup_edit-profile');

const profileButtonEdit = document.querySelector('.profile__btn-edit');
const popupButtonsLeave = document.querySelectorAll('.popup__btn-leave');
const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');
const profileBtnEditAvatar = document.querySelector('.profile__btn-avatar');

const formProfile = document.querySelector('form[name = profile_data]');
const formCard = document.querySelector('form[name = add_img_data]');
const formAvatar = document.querySelector('form[name = add_avatar_data]');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const nameInput = formProfile.querySelector('input[name = first-name]');
const jobInput = formProfile.querySelector('input[name = activity]');

const nameImgInput = formCard.querySelector('input[name = name_img]');
const linkInput = formCard.querySelector('input[name = url_img]');
const avatarInput = formAvatar.querySelector('input[name = url_avatar]');

const listSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-accept',
  inactiveButtonClass: 'popup__btn-accept_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

enableValidation(listSettings);

document.addEventListener("DOMContentLoaded", downloadСards);

profileButtonEdit.addEventListener('click', () => {
  opensPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => {
  const popupAddCards = document.querySelector('.popup_add-cards');
  opensPopup(popupAddCards);
});

profileBtnEditAvatar.addEventListener('click', () => {
  const popupEditImg = document.querySelector('.popup_edit-avatar');
  opensPopup(popupEditImg);
});

popupButtonsLeave.forEach((item) => {
  item.addEventListener('click', () => closesPopup(item, listSettings));
});

const submitProfileForm = (event) => {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName;
  profileActivity.textContent = valueJob;

  closesPopup(formProfile, listSettings);
}

formProfile.addEventListener('submit', submitProfileForm);

const submitCardsForm = (event) => {
  event.preventDefault();

  let nameCard = elementsCards.name;
  let linkCard = elementsCards.link;

  nameCard = nameImgInput.value;
  linkCard = linkInput.value;

  addsElementCard(nameCard, linkCard);
  closesPopup(formCard, listSettings);
}

formCard.addEventListener('submit', submitCardsForm);

const submitAvatarForm = (event) => {
  event.preventDefault();

  let linkImg = document.querySelector('.profile__avatar-img');
  linkImg.src = avatarInput.value;

  closesPopup(formAvatar, listSettings);
}

formAvatar.addEventListener('submit', submitAvatarForm);

export const closeOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closesPopup(popupActive, listSettings);
  }
}

document.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains("popup")) {
    closesPopup(evt.target, listSettings);
  }
});

elementsCards.addEventListener('click', addsLikeCads);
elementsCards.addEventListener('click', removeCards);
elementsCards.addEventListener('click', showImgCard);
