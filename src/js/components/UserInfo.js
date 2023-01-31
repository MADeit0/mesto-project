export default class UserInfo {
  constructor({ name, myInfo }) {
    this.name = document.querySelector(name);
    this.myInfo = document.querySelector(myInfo);
  }
  getUserInfo({ name: me, about }) {
    this._infoList = {};
    this._infoList.name = me;
    this._infoList.about = about;
    return this._infoList;
  }

  setUserInfo({ name: me, about }) {
    this.name.textContent = me;
    this.myInfo.textContent = about;
  }
}
