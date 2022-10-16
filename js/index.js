const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCards = document.querySelector('.popup_add-cards');

const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupBtnLeave = document.querySelectorAll('.popup__btn-leave');
const profileBtnAddCards = document.querySelector('.profile__btn-add-cards');


const formProfile = document.querySelector('form[name = profile_data]');
const formCard = document.querySelector('form[name = add_img_data]');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const nameInput = formProfile.querySelector('input[name = firstname]');
const jobInput = formProfile.querySelector('input[name = activity]');



function opensPopup(classItem) {
  selector = classItem.classList;
  selector.add('popup_opened');
}

function closesPopup(classItem) {
  const millisecond = 300;
  const listItem = classItem.closest('.popup');

  listItem.classList.add('popup_closed');
  setTimeout(() => listItem.classList.remove('popup_opened', 'popup_closed'), millisecond);
}

function getDefValueInp(classText, classInput) {
  classInput.value = classText.textContent;
}

profileBtnEdit.addEventListener('click', () => {
  opensPopup(popupEditProfile);
  getDefValueInp(profileName, nameInput);
  getDefValueInp(profileActivity, jobInput);
});

profileBtnAddCards.addEventListener('click', () => opensPopup(popupAddCards));

popupBtnLeave.forEach((item) => {
  item.addEventListener('click', () => closesPopup(item));
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName || 'Жак-Ив Кусто';
  profileActivity.textContent = valueJob || 'Исследователь океана';

  closesPopup(formProfile);
}

formProfile.addEventListener('submit', formSubmitHandlerProfile);






