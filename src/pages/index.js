import './index.css';

import {
  popupEditProfile,
  profileButtonEdit,
  popupButtonsLeave,
  profileBtnAddCards,
  profileBtnEditAvatar,
  formProfile,
  formCard,
  formAvatar,
  profileName,
  profileActivity,
  elementsCards,
  nameInput,
  jobInput,
  initialCards
} from '../components/constants.js';

import {
  listSettings
} from '../components/constants.js';

import {
  enableValidation
} from '../components/validate.js';

import {
  openPopup,
  closePopup,
  getDefValueInp
} from '../components/modal.js';

import {
  addsElementCard,
  addsLikeCads,
  removeCards,
  showImgCard
} from '../components/cardcopy.js';

const downloadСards = () => {
  initialCards.forEach((CardsList) => {
    elementsCards.prepend(addsElementCard(CardsList));
  })
}

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

  const nameImgInput = formCard.querySelector('input[name = name_img]');
  const linkInput = formCard.querySelector('input[name = url_img]');

  elementsCards.prepend(addsElementCard({name: nameImgInput.value, link: linkInput.value}));

  closePopup(formCard, listSettings);
}

const submitAvatarForm = (event) => {
  event.preventDefault();

  const avatarInput = formAvatar.querySelector('input[name = url_avatar]');
  const linkImg = document.querySelector('.profile__avatar-img');

  linkImg.src = avatarInput.value;

  closePopup(formAvatar, listSettings);
}

export const closeOnEsc = (evt) => {
  const keyboardBtn = 'Escape';

  if (evt.key === keyboardBtn) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive, listSettings);
  }
}

enableValidation(listSettings);

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

document.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target, listSettings);
  }
});

popupButtonsLeave.forEach((item) => {
  item.addEventListener('click', () => closePopup(item, listSettings));
});

formProfile.addEventListener('submit', submitProfileForm);
formCard.addEventListener('submit', submitCardsForm);
formAvatar.addEventListener('submit', submitAvatarForm);

elementsCards.addEventListener('click', addsLikeCads);
elementsCards.addEventListener('click', removeCards);
elementsCards.addEventListener('click', showImgCard);
