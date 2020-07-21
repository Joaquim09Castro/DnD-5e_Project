class MonsterSearchTypeView extends MonsterSearchView {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
    <label for="monster-search">
    <h4>Choose a Type</h4>
  </label>

  <div class="content row justify-content-center align-items-center">
    <select class="custom-select monster-search-bar-size mr-2" id="search-value">
    <option value="humanoid">Humanoid</option>
    <option value="stb">Swarm of Tiny beasts</option>
    <option value="stc">Swarm of Tiny constructs</option>
    <option value="aberration">Aberration</option>
    <option value="beast">Beast</option>
    <option value="celestial">Celestial</option>
    <option value="construct">Construct</option>
    <option value="dragon">Dragon</option>
    <option value="elemental">Elemental</option>
    <option value="fey">Fey</option>
    <option value="fiend">Fiend</option>
    <option value="giant">Giant</option>

    </select>

    <button class="btn btn-bg-custom my-2 my-sm-0" type="submit" id="submit-search">Search</button>
  </div>
    `;
  }
}