const cohortId = 'plus-cohort-18';
const token = '7385ede6-107c-4a27-9028-b467b4c4382e';

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

export { getInitialData, isRejected, setProfileData, setNewCard };
