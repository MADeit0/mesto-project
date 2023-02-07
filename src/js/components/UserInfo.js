export default class UserInfo {
  constructor(name, myInfo, avatar) {
    this._name = document.querySelector(name);
    this._myInfo = document.querySelector(myInfo);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      first_name: this._name.textContent,
      activity: this._myInfo.textContent
    };
  }

  setUserInfo({ name: me, about }) {
    this._name.textContent = me;
    this._myInfo.textContent = about;
  }

  setAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}
