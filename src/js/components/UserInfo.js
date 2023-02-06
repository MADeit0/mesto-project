export default class UserInfo {
  constructor(name, myInfo, avatar) {
    this._name = document.querySelector(name);
    this._myInfo = document.querySelector(myInfo);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    this.name = this._name.textContent;
    this.myInfo = this._myInfo.textContent;
    return this;
  }

  setUserInfo({ name: me, about }) {
    this._name.textContent = me;
    this._myInfo.textContent = about;
  }

  setAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}
