import { cohortId, token } from './constants';

const config = {
  baseUrl: `https://nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
}

const isResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

const isRejected = (err) => {
  console.log(err);
}

const getInitialData = () => {
  return Promise.all([
    fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    }),
    fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
  ])
    .then((res) => Promise.all(res.map((data) => isResponse(data))));
}

const setProfileData = (profileName, profileAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileAbout
    })
  })
    .then(res => isResponse(res));
}

const setNewCard = (cardName, cardLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
    .then(res => isResponse(res));
}

const setProfileAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(res => isResponse(res));
}

const promiseCardDelete = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => isResponse(res));
}

const putLikeCard = (cardId, methodToggle) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: methodToggle,
    headers: config.headers
  })
    .then(res => isResponse(res));
}

export {
  getInitialData,
  isRejected,
  setProfileData,
  setNewCard,
  setProfileAvatar,
  putLikeCard,
  promiseCardDelete
}
