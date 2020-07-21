class MonsterSearchNameView extends MonsterSearchView {
  constructor(element) {
    super(element);
  }
  
  template(model) {
    return `
        <label for="monster-search">
        <h4>Enter the monster name</h4>
      </label>
      <div class="content row justify-content-center align-items-center">
        <input class="form-control mr-2 search-bar-size" id="name-search" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn btn-bg-custom my-2 my-sm-0" type="submit" id="submit-search">Search</button>
      </div>
    `;
  }
}