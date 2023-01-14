import './index.css';

import {
  getInitialProfile,
  getInitialCards,
  isRejected,
  setProfileData,
  setNewCard,
  setProfileAvatar,
  putLikeCard,
  CardDelete
} from '../components/api.js';

import {
  keyboardBtn,
  popupEditProfile,
  popupAddCards,
  popupEditAvatar,
  popupRemoveCard,
  profileButtonEdit,
  popupButtonsLeave,
  profileBtnAddCards,
  profileBtnEditAvatar,
  btnRemoveCard,
  formProfile,
  formCard,
  formAvatar,
  profileName,
  profileActivity,
  linkImg,
  elementsCards,
  nameInput,
  jobInput,
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
  getDefaultValueInput,
  PopupRenderLoading
} from '../components/modal.js';

import {
  CreateCard,
  deleteCardFromPage,
  addsLikeCads,
  changeLike
} from '../components/card.js';

let userId = '';

// проверка поставлен ли лайк в карточке и в зависимости от
// полученного ответа удаляет/добавляет информацию на сервер.
// Следит за счётчиком лайков
const switchLikeCard = (event) => {
  let methodToggle = '';
  const element = event.target.closest('.element');
  const btnLike = element.querySelector('.element__btn-like');
  const id = element.dataset.cardId;
  const likeStatus = event.target.classList.contains('element__btn-like_active')

  !likeStatus ? methodToggle = 'PUT' : methodToggle = 'DELETE';
  putLikeCard(id, methodToggle)
    .then((card) => {
      addsLikeCads(btnLike);
      changeLike(element, card.likes.length);
    })
    .catch((err) => isRejected(err));
}

const deleteCardFromServer = () => {
  const id = popupRemoveCard.dataset.id
  const element = elementsCards.querySelector(`[data-card-id = '${id}']`);

  CardDelete(id)
    .then(() => {
      deleteCardFromPage(element)
      closePopup(btnRemoveCard)
    })
    .catch((err) => isRejected(err));
}

const submitProfileForm = (event) => {
  event.preventDefault();
  PopupRenderLoading(formProfile, true);

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  setProfileData(valueName, valueJob)
    .then((profile) => {
      profileName.textContent = profile.name;
      profileActivity.textContent = profile.about;

      closePopup(formProfile);
    })
    .catch((err) => isRejected(err))
    .finally(() => PopupRenderLoading(formProfile, false));
}

const submitCardsForm = (event) => {
  event.preventDefault();
  PopupRenderLoading(formCard, true);

  const nameImgInput = formCard.querySelector('input[name = name_img]');
  const linkInput = formCard.querySelector('input[name = url_img]');

  setNewCard(nameImgInput.value, linkInput.value)
    .then((card) => {
      elementsCards.prepend(CreateCard(userId, card, switchLikeCard));
      closePopup(formCard);
    })
    .catch((err) => isRejected(err))
    .finally(() => {
      PopupRenderLoading(formCard, false);
      formCard.reset();
    });
}

const submitAvatarForm = (event) => {
  event.preventDefault();
  PopupRenderLoading(formAvatar, true);

  const avatarInput = formAvatar.querySelector('input[name = url_avatar]');

  setProfileAvatar(avatarInput.value)
    .then((profile) => {
      linkImg.src = profile.avatar;
      closePopup(formAvatar);
    })
    .catch((err) => isRejected(err))
    .finally(() => {
      PopupRenderLoading(formAvatar, false);
      formAvatar.reset();
    });
}

export const closeOnEsc = (evt) => {
  if (evt.key === keyboardBtn) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

// получение данных пользователя при загрузки страницы
Promise.all([getInitialProfile(), getInitialCards()])
  .then(([user, cards]) => {
    profileName.textContent = user.name;
    profileActivity.textContent = user.about;
    linkImg.src = user.avatar;
    userId = user._id;
    cards.forEach((card) => {
      elementsCards.append(CreateCard(userId, card, switchLikeCard));
    })
  })
  .catch((err) => isRejected(err));

// включение валидации
enableValidation(listSettings);

profileButtonEdit.addEventListener('click', () => {
  getDefaultValueInput(profileName, nameInput);
  getDefaultValueInput(profileActivity, jobInput);
  PopupRenderLoading(formProfile, true);
  openPopup(popupEditProfile);
});

profileBtnAddCards.addEventListener('click', () => {
  PopupRenderLoading(formCard, true);
  resetFormInput(formCard, listSettings);
  openPopup(popupAddCards);
});

profileBtnEditAvatar.addEventListener('click', () => {
  PopupRenderLoading(formAvatar, true);
  resetFormInput(formAvatar, listSettings);
  openPopup(popupEditAvatar);
});

btnRemoveCard.addEventListener('click', deleteCardFromServer);

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
