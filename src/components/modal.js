import { closeOnEsc } from '../pages/index.js';

const openPopup = (modalWindow) => {
  const popupElement = modalWindow.classList;
  popupElement.add('popup_opened');

  document.addEventListener('keydown', closeOnEsc);
}

const closePopup = (modalWindow) => {
  const popupElement = modalWindow.closest('.popup');
  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeOnEsc);
}

const getDefValueInp = (classText, classInput) => {
  classInput.value = classText.textContent;
}

export { openPopup, closePopup, getDefValueInp };
