import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, { callbackDeleteCard }) {
    super(popupSelector);
    this._callbackDeleteCard = callbackDeleteCard;
    this._btnAccept = this._popup.querySelector(".popup__btn-accept");
  }

  open(elementId, card) {
    super.open();
    this._elementId = elementId;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._btnAccept.addEventListener("click", () => {
      this._callbackDeleteCard(this._elementId, this._card);
    });
  }

}
