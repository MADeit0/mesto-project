import "./index.css";

// import {
//   getInitialProfile,
//   getInitialCards,
//   isRejected,
//   setProfileData,
//   setNewCard,
//   setProfileAvatar,
//   putLikeCard,
//   cardDelete
// } from '../js/components/api.js';

// import {
//   keyboardBtn,
//   popupEditProfile,
//   popupAddCards,
//   popupEditAvatar,
//   popupRemoveCard,
//   profileButtonEdit,
//   popupButtonsLeave,
//   profileBtnAddCards,
//   profileBtnEditAvatar,
//   btnRemoveCard,
//   formProfile,
//   formCard,
//   formAvatar,
//   profileName,
//   profileActivity,
//   linkImg,
//   elementsCards,
//   nameInput,
//   jobInput,
// } from '../js/utils/constants.js';

// import {
//   enableValidation,
//   resetFormInput
// } from '../js/components/validate.js';

// import {
//   openPopup,
//   closePopup,
//   getDefaultValueInput,
//   popupRenderLoading
// } from '../js/components/modal.js';

// import {
//   initialCard,
//   deleteCardFromPage,
//   addsLikeCads,
//   changeLike
// } from '../js/components/card.js';

// let userId = '';

// // проверка поставлен ли лайк в карточке и в зависимости от
// // полученного ответа удаляет/добавляет информацию на сервер.
// // Следит за счётчиком лайков
// const switchLikeCard = (event) => {
//   let methodToggle = '';
//   const element = event.target.closest('.element');
//   const btnLike = element.querySelector('.element__btn-like');
//   const id = element.dataset.cardId;
//   const likeStatus = event.target.classList.contains('element__btn-like_active')

//   !likeStatus ? methodToggle = 'PUT' : methodToggle = 'DELETE';
//   putLikeCard(id, methodToggle)
//     .then((card) => {
//       addsLikeCads(btnLike);
//       changeLike(element, card.likes.length);
//     })
//     .catch((err) => isRejected(err));
// }

// const deleteCardFromServer = () => {
//   const id = popupRemoveCard.dataset.id
//   const element = elementsCards.querySelector(`[data-card-id = '${id}']`);

//   cardDelete(id)
//     .then(() => {
//       deleteCardFromPage(element)
//       closePopup(btnRemoveCard)
//     })
//     .catch((err) => isRejected(err));
// }

// const submitProfileForm = (event) => {
//   event.preventDefault();
//   popupRenderLoading(formProfile, true);

//   const valueName = nameInput.value;
//   const valueJob = jobInput.value;

//   setProfileData(valueName, valueJob)
//     .then((profile) => {
//       profileName.textContent = profile.name;
//       profileActivity.textContent = profile.about;

//       closePopup(formProfile);
//     })
//     .catch((err) => isRejected(err))
//     .finally(() => popupRenderLoading(formProfile, false));
// }

// const submitCardsForm = (event) => {
//   event.preventDefault();
//   popupRenderLoading(formCard, true);

//   const nameImgInput = formCard.querySelector('input[name = name_img]');
//   const linkInput = formCard.querySelector('input[name = url_img]');

//   setNewCard(nameImgInput.value, linkInput.value)
//     .then((card) => {
//       elementsCards.prepend(initialCard(userId, card, switchLikeCard));
//       closePopup(formCard);
//     })
//     .catch((err) => isRejected(err))
//     .finally(() => {
//       popupRenderLoading(formCard, false);
//       formCard.reset();
//     });
// }

// const submitAvatarForm = (event) => {
//   event.preventDefault();
//   popupRenderLoading(formAvatar, true);

//   const avatarInput = formAvatar.querySelector('input[name = url_avatar]');

//   setProfileAvatar(avatarInput.value)
//     .then((profile) => {
//       linkImg.src = profile.avatar;
//       closePopup(formAvatar);
//     })
//     .catch((err) => isRejected(err))
//     .finally(() => {
//       popupRenderLoading(formAvatar, false);
//       formAvatar.reset();
//     });
// }

// export const closeOnEsc = (evt) => {
//   if (evt.key === keyboardBtn) {
//     const popupActive = document.querySelector('.popup_opened');
//     closePopup(popupActive);
//   }
// }

// // получение данных пользователя при загрузки страницы
// Promise.all([getInitialProfile(), getInitialCards()])
//   .then(([user, cards]) => {
//     profileName.textContent = user.name;
//     profileActivity.textContent = user.about;
//     linkImg.src = user.avatar;
//     userId = user._id;
//     cards.forEach((card) => {
//       elementsCards.append(initialCard(userId, card, switchLikeCard));
//     })
//   })
//   .catch((err) => isRejected(err));

// // включение валидации
// enableValidation(listSettings);

// profileButtonEdit.addEventListener('click', () => {
//   getDefaultValueInput(profileName, nameInput);
//   getDefaultValueInput(profileActivity, jobInput);
//   openPopup(popupEditProfile);
// });

// profileBtnAddCards.addEventListener('click', () => {
//   resetFormInput(formCard, listSettings);
//   openPopup(popupAddCards);
// });

// profileBtnEditAvatar.addEventListener('click', () => {
//   resetFormInput(formAvatar, listSettings);
//   openPopup(popupEditAvatar);
// });

// btnRemoveCard.addEventListener('click', deleteCardFromServer);

// document.addEventListener('mousedown', (evt) => {
//   if (evt.target.classList.contains("popup")) {
//     closePopup(evt.target);
//   }
// });

// popupButtonsLeave.forEach((item) => {
//   item.addEventListener('click', () => closePopup(item));
// });

// formProfile.addEventListener('submit', submitProfileForm);
// formCard.addEventListener('submit', submitCardsForm);
// formAvatar.addEventListener('submit', submitAvatarForm);

import {
  popupEditProfile,
  profileButtonEdit,
  // popupButtonsLeave,
  profileBtnAddCards,
  profileBtnEditAvatar,
  // btnRemoveCard,
  // formProfile,
  // formCard,
  // formAvatar,
  cardTemplate,
  popupShowImg,
  popupRemoveCard,
  popupAddCards,
  profileName,
  profileActivity,
  linkImg,
  elementsCards,
  popupEditAvatar,
  // nameInput,
  // jobInput,
} from "../js/utils/constants.js";

import { listSettings } from "../js/utils/constants.js";

// -----------------------------------------------------------------------
import PopupWithForm from "../js/components/PopupWithForm.js";
import PopupWithImage from "../js/components/PopupWithImage.js";
import PopupWithDeleteCard from "../js/components/PopupWithDeleteCard.js";

const popupAvatarEdit = new PopupWithForm(popupEditAvatar);
const popupEdit = new PopupWithForm(popupEditProfile);
const popupImage = new PopupWithImage(popupShowImg);
const popupAddNewCard = new PopupWithForm(popupAddCards);

const popupDisposeCard = new PopupWithDeleteCard(
  popupRemoveCard,
  {
    callbackDeleteCard: (ElementId, card) => {
      api.cardDelete(ElementId)
        .then((res) => {
          card.deleteCard();
          popupDisposeCard.close();
        })
        .catch((err) => api.isRejected(err));
    }
  });

profileBtnEditAvatar.addEventListener("click", () => {
  popupAvatarEdit.open();
  popupAvatarEdit._getInputValues();
});

profileBtnAddCards.addEventListener("click", () => {
  popupAddNewCard.open();
  popupAddNewCard._getInputValues();
});

profileButtonEdit.addEventListener("click", () => {
  popupEdit.open();
  popupEdit._getInputValues();
});

popupAvatarEdit.setEventListeners();
popupAddNewCard.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();
popupDisposeCard.setEventListeners();
// ------------------------------------------------------------------------
import FormValidator from "../js/components/FormValidator.js";

const validEditProfile = new FormValidator(listSettings, popupEditProfile);
validEditProfile.enableValidation();

// -------------------------------------------------------------------------

import UserInfo from "../js/components/UserInfo.js";

const userInfo = new UserInfo(profileName, profileActivity, linkImg);

// -------------------------------------------------------------------------
import Api from "../js/components/Api.js";
import { cohortId, token } from "../js/utils/constants.js";

const api = new Api({
  baseUrl: `https://nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});
// -------------------------------------------------------------------------
import Section from "../js/components/Section.js";
import Card from "../js/components/Card.js";

// --------------------------------------------------------------------------

let userId = "";

// получение данных пользователя при загрузки страницы
Promise.all([api.getInitialProfile(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user);

    const section = new Section(
      {
        items: cards,
        renderer: (item) => {
          const cardElement = initialCard(item).createCard();
          section.addItemAppend(cardElement);
        },
      },
      elementsCards
    );

    section.renderItems();
  })
  .catch((err) => api.isRejected(err));

// создаём карточку, добавляем логику в слушатели
function initialCard(cardList) {
  const card = new Card(userId, cardList, cardTemplate, {
    likeCallback: (id, containsLike) => {
      (!containsLike ? api.putLikeCard(id) : api.removeLikeCard(id))
        .then((likeState) => {
          card.changeLikeState(likeState);
        })
        .catch((err) => api.isRejected(err));
    },
    showImgCallback: (name, link) => {
      popupImage.open(name, link);
    },
    deleteCardCallback: (ElementId) => {
      popupDisposeCard.open(ElementId, card);
    },
  });

  return card;
}
