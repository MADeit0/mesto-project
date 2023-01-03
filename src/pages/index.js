import './index.css';

import { enableValidation } from '../components/validate.js';

import {
  openPopup,
  closePopup,
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

const submitProfileForm = (event) => {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName;
  profileActivity.textContent = valueJob;

  closePopup(formProfile, listSettings);
}

const submitCardsForm = (event) => {
  event.preventDefault();

  let nameCard = elementsCards.name;
  let linkCard = elementsCards.link;

  nameCard = nameImgInput.value;
  linkCard = linkInput.value;

  addsElementCard(nameCard, linkCard);
  closePopup(formCard, listSettings);
}

const submitAvatarForm = (event) => {
  event.preventDefault();

  let linkImg = document.querySelector('.profile__avatar-img');
  linkImg.src = avatarInput.value;

  closePopup(formAvatar, listSettings);
}

export const closeOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive, listSettings);
  }
}

document.addEventListener("DOMContentLoaded", downloadСards);

profileButtonEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => {
  const popupAddCards = document.querySelector('.popup_add-cards');
  openPopup(popupAddCards);
});

profileBtnEditAvatar.addEventListener('click', () => {
  const popupEditImg = document.querySelector('.popup_edit-avatar');
  openPopup(popupEditImg);
});

popupButtonsLeave.forEach((item) => {
  item.addEventListener('click', () => closePopup(item, listSettings));
});

formProfile.addEventListener('submit', submitProfileForm);

formCard.addEventListener('submit', submitCardsForm);

formAvatar.addEventListener('submit', submitAvatarForm);

document.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target, listSettings);
  }
});

elementsCards.addEventListener('click', addsLikeCads);
elementsCards.addEventListener('click', removeCards);
elementsCards.addEventListener('click', showImgCard);
