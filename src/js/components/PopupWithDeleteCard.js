import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, { callbackDeleteCard }) {
    super(popupSelector);
    this._callbackDeleteCard = callbackDeleteCard;
    this._btnAccept = this._popup.querySelector(".popup__btn-accept");
  }

  open(ElementId, card) {
    super.open();
    this._ElementId = ElementId;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._btnAccept.addEventListener("click", () => {
      this._callbackDeleteCard(this._ElementId, this._card);
    });
  }

}
