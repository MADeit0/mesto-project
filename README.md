# Проект: Mesto

## Описание
---

- Проект является одностраничным сайтом с Блоком профиля пользователя и блоком галереи изображения. На сайте реализован функционал через JavaScript, добавляющий больше интерактива странице.


##  Используемые языки
---

- HTML
- CSS
- JavaScript

## О проекте
---
 ### HTML CSS
- Ссылка на страницу [клик!](https://madeit0.github.io/mesto-project/ "Место")

- Страница сайта полностью адаптивна под разрешение экранов с шириной в диапазоне 320...1280px.

- Адаптивность сделана при помощи (media query).

- Файловая структура выполнена по методологии БЭМ, схема организации файлов Nasted.

- Для выравнивания элементов задействован CSS Flexbox и CSS Grid Layout для выравнивания галереи карточек с изображениями.

- В проекте добавлены интерактивные элементы в виде кнопок, инпутов для ввода текста, и всплывающего окна.

- текст в профиле и в карточках при переполнении блока обрезается и к концу строки добавлено многоточие.

### JS
- Имена переменных и функций написаны в camelCase

- Реализован функционал редактирования профиля и добавление картинок через модальные окна

- Карточки с картинками можно добавлять и удалять, а также им можно ставить лайки

- Добавлена возможность просмотра изображения в полном размере при нажатии на поле с картинкой в карточках

- Добавлена валидация вводимых данных, теперь при вводе неправильных данных кнопка отправки формы будет не активна до тех пор пока поля не будут исправлены

- Js код теперь разделён на модули, функции выполняющие работу с модальными окнами, валидацией, добавление карточек и т.д. разделены по тематике.

- За сборку проекта отвечает бандлер webpack

- Страница при принятии данных от пользователя защищена от XSS-уязвимости



## Установка
---

- Содержимое архива распаковать в свободный каталог.

- Выполнить запуск index.html.

### Через git

- Клонировать репозиторий:

  `git clone git@github.com:MADeit0/mesto-project.git`


## Будущие изменения
---

- ~~Добавление функционала кнопкам с помощью JavaScript~~

- Добавление счётчиков лайков

- ~~Добавить валидацию в инпутах~~

- Оптимизация кода

- ~~добавление формы для изменения картинки профиля~~

- перенос страницы на React

