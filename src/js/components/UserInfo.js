export default class UserInfo {
  constructor(name, myInfo, avatar) {
    this._name = document.querySelector(name);
    this._myInfo = document.querySelector(myInfo);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      first_name: this._name.textContent,
      activity: this._myInfo.textContent,
    };
  }

  setUserId() {
    return this._id;
  }

  setUserInfo({ name: me, about, avatar, _id }) {
    this._name.textContent = me;
    this._myInfo.textContent = about;
    this._avatar.src = avatar;
    this._id = _id;
  }
}
