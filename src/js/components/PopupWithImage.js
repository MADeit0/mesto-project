import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup-image');
    this._caption = this._popup.querySelector('.popup__text');
  }

  open(event) {
    this._image.src = event.target.src;
    this._image.alt = event.target.alt;
    this._caption.textContent = event.target.alt;
    super.open();
  }
}
