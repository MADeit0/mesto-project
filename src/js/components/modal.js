import { popupRemoveCard } from '../utils/constants';

import { closeOnEsc } from '../../pages/index.js';

// открывает модальное окно для подтверждения удаления картинки
const openPopupDeleteCard = (modalWindow) => {
  const element = modalWindow.target.closest('.element');
  popupRemoveCard.dataset.id = element.dataset.cardId;

  openPopup(popupRemoveCard);
}

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

const getDefaultValueInput = (classText, classInput) => {
  classInput.value = classText.textContent;
}
// в зависимости от принятого состояния меняет текст в кнопке при загрузки данных на сервер
const popupRenderLoading = (modalWindow, isLoading) => {
  const btnAcept = modalWindow.querySelector('.popup__btn-accept');
  isLoading ? btnAcept.textContent = btnAcept.dataset.loaded : btnAcept.textContent = btnAcept.dataset.initial;
}

export {
  openPopupDeleteCard,
  openPopup,
  closePopup,
  getDefaultValueInput,
  popupRenderLoading
}
