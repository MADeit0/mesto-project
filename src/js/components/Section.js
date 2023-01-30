export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }

  setElement() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItemAppend(element) {
    this._container.append(element);
  }
  addItemPrepend(element) {
    this._container.prepend(element);
  }
}
