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

const nameImgInput = formCard.querySelector('input[name = name_img]');
const linkInput = formCard.querySelector('input[name = url_img]');

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

profileBtnAddCards.addEventListener('click', () => {
  nameImgInput.value = '';
  linkInput.value = '';
  opensPopup(popupAddCards);
});

popupBtnLeave.forEach((item) => {
  item.addEventListener('click', () => closesPopup(item));
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();

  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  checkingStringsProfile(valueName, valueJob)
}

function checkingStringsProfile(valueName, valueJob) {

  if ((valueName !== '') && (valueJob !== '')) {

    profileName.textContent = valueName;
    profileActivity.textContent = valueJob;

    closesPopup(formProfile);
  }
}

  formProfile.addEventListener('submit', formSubmitHandlerProfile);

  // лайк через делегирование
  const elementsCards = document.querySelector('.elements');

  function addsLikeCads(event) {
    const likeCard = event.target.closest('.element__btn-like');

    if (likeCard) {
      likeCard.classList.toggle('element__btn-like_active');
    }
  }

  elementsCards.addEventListener('click', addsLikeCads);
  // добавление списка ссылок в карточки
  // массив url картинок
  const initialCards = [
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
  // ивент при загрузки страницы
  document.addEventListener("DOMContentLoaded", downloadСards);

  function downloadСards() {
    for (let i = 0; i < initialCards.length; i++) {
      const nameCard = initialCards[i].name;
      const linkCard = initialCards[i].link;

      addsElementCard(nameCard, linkCard);
    }
  }

  function addsElementCard(nameCard, linkCard) {
    const cardTemplate = document.querySelector('#tmp-card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__title').textContent = nameCard
    cardElement.querySelector('.element__image').src = linkCard
    cardElement.querySelector('.element__image').alt = nameCard

    elementsCards.prepend(cardElement);
  }

  // функция считывания с формы ссылки и название для карточки

  function formSubmitHandlerCards(evt) {
    evt.preventDefault();

    let nameCard = elementsCards.name;
    let linkCard = elementsCards.link;

    nameCard = nameImgInput.value;
    linkCard = linkInput.value;

    checkingStringsCards(nameCard, linkCard)
  }

  function checkingStringsCards(nameCard, linkCard) {

    if ((nameCard !== '') && linkCard.startsWith('http') && linkCard.endsWith('.jpg')) {
      addsElementCard(nameCard, linkCard);
      closesPopup(formCard);
    }

  }
  // событие нажатия на кнопку в окне с добавление карточек
  formCard.addEventListener('submit', formSubmitHandlerCards);
