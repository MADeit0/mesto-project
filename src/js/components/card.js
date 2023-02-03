export default class card {
  constructor(myId, { _id, name , link, likes , owner }, cardTemplate,likeCallback,showImgCallback,DeleteCardCalback) {
    this._myId = myId;
    this._id = _id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._cardTemplate = cardTemplate;
    this._owner = owner;
    this._likeCallback = likeCallback;
    this._showImgCallback = showImgCallback;
    this._DeleteCardCalback = DeleteCardCalback;
  }

  _addsLike() {
    this._cardLike.classList.add("element__btn-like_active");
  }

  _removesLike() {
    this._cardLike.classList.remove("element__btn-like_active");
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _getLikeInfo() {
    this._likes.some((likes) => likes._id === this._myId);
  }

  _isLiked() {
    if (this._getLikeInfo()) {
      this._addsLike();
    } else {
      this._removesLike();
    }
    this._changeLike()
  }

  changeLikeState({likes}) {
    this._likes = likes;
    this._getLikeInfo() = !this._getLikeInfo();
    this._isLiked();
  }

  _changeLike({likes}) {
    this._likesCount.textContent = likes.length;
  }

  create() {
    this._element = this._getElement;
    this._cardLike = this._element.querySelector(".element__btn-like");
    this._cardRemove = this._element.querySelector(".element__btn-remove");
    this._cardImage = this._element.querySelector(".element__image");
    this._cardTitle = this._element.querySelector(".element__title");
    this._likesCount = this._element.querySelector(".element__like-count");

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._likesCount.textContent = this._likes.length;
    this._element.dataset.cardId = this._id;

    this._isLiked();
    this._setEventListeners();
    if (myId !== this._owner._id) {
      this._cardRemove.remove();
    }

    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener("click", this._likeCallback.bind(this));
    this._cardImage.addEventListener("click", this._showImgCallback.bind(this));
    this._cardRemove.addEventListener("click", this._DeleteCardCalback.bind(this));
  }
}
