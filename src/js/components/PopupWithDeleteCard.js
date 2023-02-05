import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, { callbackDeleteCard }) {
    super(popupSelector);
    this._callbackDeleteCard = callbackDeleteCard;
    this._btnAcept = this._popup.querySelector(".popup__btn-accept");
  }

  setEventListeners() {
    this._formPopup.addEventListener("click", () => {
      this._callbackDeleteCard();
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}
