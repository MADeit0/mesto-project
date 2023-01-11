const isImgNotloading = (elementImg, defImg) => new Promise((resolve, reject) => {
  elementImg.onerror = reject;
})
  .catch((err) => {
    err.target.src = defImg;
    console.error('Не удалось загрузить изображение');
  })

export { isImgNotloading }
