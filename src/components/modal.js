
import { closeOnEsc } from '../pages/index.js';
import { hideInputError, resetButtonState } from './validate.js';

const opensPopup = (classItem) => {
  const selector = classItem.classList;
  selector.add('popup_opened');

  document.addEventListener('keydown', closeOnEsc);
}

const closesPopup = (classItem, settings) => {
  const selector = classItem.closest('.popup');
  const formElement = selector.querySelector(settings.formSelector);

  selector.classList.remove('popup_opened');

  if (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, settings);
      formElement.reset();
    });

    resetButtonState(buttonElement, settings);
  }
  document.removeEventListener('keydown', closeOnEsc);
}

const getDefValueInp = (classText, classInput) => {
  classInput.value = classText.textContent;
}

export { opensPopup, closesPopup, getDefValueInp };
