export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems(items) {
    items.forEach((array) => {
      this._renderer(array);
    });
  }

  addItemAppend(element) {
    this._container.append(element);
  }
  addItemPrepend(element) {
    this._container.prepend(element);
  }
}
