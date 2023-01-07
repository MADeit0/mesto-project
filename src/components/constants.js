export const keyboardBtn = 'Escape';

export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddCards = document.querySelector('.popup_add-cards');
export const popupEditAvatar = document.querySelector('.popup_edit-avatar');

export const profileButtonEdit = document.querySelector('.profile__btn-edit');
export const popupButtonsLeave = document.querySelectorAll('.popup__btn-leave');
export const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');
export const profileBtnEditAvatar = document.querySelector('.profile__btn-avatar');

export const formProfile = document.querySelector('form[name = profile_data]');
export const formCard = document.querySelector('form[name = add_img_data]');
export const formAvatar = document.querySelector('form[name = add_avatar_data]');

export const profileName = document.querySelector('.profile__name');
export const profileActivity = document.querySelector('.profile__activity');

export const elementsCards = document.querySelector('.elements');
export const popupShowImg = document.querySelector('.popup_show-img');

export const nameInput = formProfile.querySelector('input[name = first-name]');
export const jobInput = formProfile.querySelector('input[name = activity]');

export const listSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-accept',
  inactiveButtonClass: 'popup__btn-accept_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

export const initialCards = [
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
