const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCards = document.querySelector('.popup_add-cards');

const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupBtnLeave = document.querySelectorAll('.popup__btn-leave');
const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');
const millisecond = 300;

function opensPopup(classItem) {
  selector = classItem.classList;
  selector.add('popup_opened');
}

profileBtnEdit.addEventListener('click', () => opensPopup(popupEditProfile));
profileBtnAddCards.addEventListener('click', () => opensPopup(popupAddCards));

popupBtnLeave.forEach((item) => {
  item.addEventListener('click', function () {
    const listItem = item.closest('.popup');

    listItem.classList.add('popup_closed');
    setTimeout(() => listItem.classList.remove('popup_opened', 'popup_closed'), millisecond);
  });
});
