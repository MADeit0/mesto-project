

import {
  popupEditProfile,
  profileButtonEdit,
  profileBtnAddCards,
  profileBtnEditAvatar,
  formAvatar,
  cardTemplate,
  popupShowImg,
  popupRemoveCard,
  popupAddCards,
  profileName,
  profileActivity,
  linkImg,
  elementsCards,
  popupEditAvatar,
  nameInput,
  jobInput,
} from "../js/utils/constants.js";

import { listSettings } from "../js/utils/constants.js";

// -----------------------------------------------------------------------
import PopupWithForm from "../js/components/PopupWithForm.js";
import PopupWithImage from "../js/components/PopupWithImage.js";
import PopupWithDeleteCard from "../js/components/PopupWithDeleteCard.js";

const popupImage = new PopupWithImage(popupShowImg);

const popupEdit = new PopupWithForm(popupEditProfile, {
  submitForm: ({ first_name, activity }) => {
    api
      .setProfileData(first_name, activity)
      .then((profile) => {
        userInfo.setUserInfo(profile);
        popupEdit.close();
      })
      .catch((err) => api.isRejected(err))
      .finally(() => { popupEdit.renderLoading(false) });
  }
});

const popupAddNewCard = new PopupWithForm(popupAddCards, {
  submitForm: ({ name_img, url_img }) => {
    api
      .setNewCard(name_img, url_img)
      .then((card) => {
        const cardElement = initialCard(card).createCard();
        section.addItemPrepend(cardElement);
        popupAddNewCard.close();
      })
      .catch((err) => api.isRejected(err))
      .finally(() => { popupAddNewCard.renderLoading(false) });
  }
});

const popupAvatarEdit = new PopupWithForm(popupEditAvatar, {
  submitForm: ({ url_avatar }) => {
    api
      .setProfileAvatar(url_avatar)
      .then((url) => {
        userInfo.setAvatar(url);
        popupAvatarEdit.close();
      })
      .catch((err) => api.isRejected(err))
      .finally(() => { popupAvatarEdit.renderLoading(false) });
  }
});

const popupDisposeCard = new PopupWithDeleteCard(popupRemoveCard, {
  callbackDeleteCard: (ElementId, card) => {
    api
      .cardDelete(ElementId)
      .then((res) => {
        card.deleteCard();
        popupDisposeCard.close();
      })
      .catch((err) => api.isRejected(err));

  },
});

profileBtnEditAvatar.addEventListener("click", () => {
  validEditAvatar.resetFormInput();
  popupAvatarEdit.open();
});

profileBtnAddCards.addEventListener("click", () => {
  validAddNewCard.resetFormInput();
  popupAddNewCard.open();
});

profileButtonEdit.addEventListener("click", () => {
  validEditProfile.resetFormInput();
  popupEdit.setInputValues(userInfo.getUserInfo());
  validEditProfile.toggleButtonState()
  popupEdit.open();
});

popupAvatarEdit.setEventListeners();
popupAddNewCard.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();
popupDisposeCard.setEventListeners();
// ------------------------------------------------------------------------
import FormValidator from "../js/components/FormValidator.js";

const validEditProfile = new FormValidator(listSettings, popupEditProfile);
const validAddNewCard = new FormValidator(listSettings, popupAddCards);
const validEditAvatar = new FormValidator(listSettings, popupEditAvatar);

validEditProfile.enableValidation();
validAddNewCard.enableValidation();
validEditAvatar.enableValidation();

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
let section = "";

// получение данных пользователя при загрузки страницы
Promise.all([api.getInitialProfile(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user);

    section = new Section(
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
