export default class UserInfo {
  constructor(name, myInfo, avatar) {
    this._name = document.querySelector(name);
    this._myInfo = document.querySelector(myInfo);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo({ name: me, about }) {
    this._infoList = {};
    this._infoList.name = me;
    this._infoList.about = about;
    return this._infoList;
  }

  setUserInfo({ name: me, about }) {
    this._name.textContent = me;
    this._myInfo.textContent = about;
  }

  setAvatar({ avatar }) {
    this._avatar.src = avatar;
}
}
