class MonsterSearchView {
  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error("Implement the child class template");
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}