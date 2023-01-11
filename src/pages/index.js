import './index.css';

import { getInitialData, isRejected, } from '../components/api.js';

import {
  keyboardBtn,
  popupEditProfile,
  popupAddCards,
  popupEditAvatar,
  profileButtonEdit,
  popupButtonsLeave,
  profileBtnAddCards,
  profileBtnEditAvatar,
  formProfile,
  formCard,
  formAvatar,
  profileName,
  profileActivity,
  linkImg,
  elementsCards,
  nameInput,
  jobInput,
  initialCards
} from '../components/constants.js';

import {
  listSettings
} from '../components/constants.js';

import {
  enableValidation,
  resetFormInput
} from '../components/validate.js';

import {
  openPopup,
  closePopup,
  getDefValueInp
} from '../components/modal.js';

import {
  addsElementCard,
  renderCard
} from '../components/card.js';

let userId = '';

getInitialData()
  .then(([users, cards]) => {
    profileName.textContent = users.name;
    profileActivity.textContent = users.about;
    linkImg.src = users.avatar;
    userId = users._id;

    cards.forEach((card) => {
      renderCard(card);
    })
  })
  .catch((err) => isRejected(err));

const submitProfileForm = (event) => {
  event.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName;
  profileActivity.textContent = valueJob;

  closePopup(formProfile);
}

const submitCardsForm = (event) => {
  event.preventDefault();

  const nameImgInput = formCard.querySelector('input[name = name_img]');
  const linkInput = formCard.querySelector('input[name = url_img]');

  elementsCards.prepend(addsElementCard({ name: nameImgInput.value, link: linkInput.value }));

  closePopup(formCard);
  formCard.reset();
}

const submitAvatarForm = (event) => {
  event.preventDefault();

  const avatarInput = formAvatar.querySelector('input[name = url_avatar]');

  linkImg.src = avatarInput.value;

  closePopup(formAvatar);
  formAvatar.reset();
}

export const closeOnEsc = (evt) => {
  if (evt.key === keyboardBtn) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

enableValidation(listSettings);

profileButtonEdit.addEventListener('click', () => {
  resetFormInput(formProfile, listSettings);
  openPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => {
  resetFormInput(formCard, listSettings);
  openPopup(popupAddCards);
});

profileBtnEditAvatar.addEventListener('click', () => {
  resetFormInput(formAvatar, listSettings);
  openPopup(popupEditAvatar);
});

document.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
});

popupButtonsLeave.forEach((item) => {
  item.addEventListener('click', () => closePopup(item));
});

formProfile.addEventListener('submit', submitProfileForm);
formCard.addEventListener('submit', submitCardsForm);
formAvatar.addEventListener('submit', submitAvatarForm);
