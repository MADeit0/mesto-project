import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formPopup = this._popup.querySelector('.popup__form');
    this._listInput = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._valueList = {};
    this._listInput.forEach((inputs) => {
      this._valueList[inputs.name] = inputs.value;
    });
    return this._valueList;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (event) => {
      event.preventDefault();
      // this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}

