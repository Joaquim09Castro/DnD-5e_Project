class MonsterSearchCrView extends MonsterSearchView {
  constructor(element) {
    super(element);
  }

  template(Model) {
    return `
      <label for="monster-search">
        <h4>Choose a CR</h4>
      </label>

      <div class="content row justify-content-center align-items-center">
        <select class="custom-select monster-search-bar-size mr-2" id="search-value">
          <option value="0">CR 0</option>
          <option value="1/8">CR 1/8</option>
          <option value="1/4">CR 1/4</option>
          <option value="1/2">CR 1/2</option>
          <option value="1">CR 1</option>
          <option value="2">CR 2</option>
          <option value="3">CR 3</option>
          <option value="4">CR 4</option>
          <option value="5">CR 5</option>
          <option value="6">CR 6</option>
          <option value="7">CR 7</option>
          <option value="8">CR 8</option>
          <option value="9">CR 9</option>
          <option value="10">CR 10</option>
          <option value="11">CR 11</option>
          <option value="12">CR 12</option>
          <option value="13">CR 13</option>
          <option value="14">CR 14</option>
          <option value="15">CR 15</option>
          <option value="16">CR 16</option>
          <option value="17">CR 17</option>
          <option value="18">CR 18</option>
          <option value="19">CR 19</option>
          <option value="20">CR 20</option>
          <option value="21">CR 21</option>
          <option value="22">CR 22</option>
          <option value="23">CR 23</option>
          <option value="24">CR 24</option>
          <option value="25">CR 25</option>
          <option value="26">CR 26</option>
          <option value="27">CR 27</option>
          <option value="30">CR 30</option>
        </select>

        <button class="btn btn-bg-custom my-2 my-sm-0" type="submit" id="submit-search">Search</button>
      </div>
    `;
  }
}