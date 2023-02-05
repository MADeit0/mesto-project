export const cohortId = "plus-cohort-18";
export const token = "7385ede6-107c-4a27-9028-b467b4c4382e";

export const keyboardBtn = "Escape";

export const cardTemplate = "#tmp-card";

export const popupEditProfile = ".popup_edit-profile";
export const popupAddCards = ".popup_add-cards";
export const popupEditAvatar = ".popup_edit-avatar";
export const popupRemoveCard = ".popup_remove-card";

export const profileButtonEdit = document.querySelector(".profile__btn-edit");
export const popupButtonsLeave = document.querySelectorAll(".popup__btn-leave");
export const profileBtnAddCards = document.querySelector(
  ".profile__btn-add-cards"
);
export const profileBtnEditAvatar = document.querySelector(
  ".profile__btn-avatar"
);

// export const btnRemoveCard = popupRemoveCard.querySelector(".popup__btn-accept");

export const formProfile = document.querySelector("form[name = profile_data]");
export const formCard = document.querySelector("form[name = add_img_data]");
export const formAvatar = document.querySelector(
  "form[name = add_avatar_data]"
);

export const profileName = ".profile__name";
export const profileActivity = ".profile__activity";
export const linkImg = ".profile__avatar-img";

export const elementsCards = ".elements";
export const popupShowImg = ".popup_show-img";

export const nameInput = formProfile.querySelector("input[name = first-name]");
export const jobInput = formProfile.querySelector("input[name = activity]");

export const listSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-accept",
  inactiveButtonClass: "popup__btn-accept_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};
