let searchParam;

let searchInfo = {
  apiUrl: `https://api.open5e.com/monsters/?`,

  monsterName: `name=`,
  monsterCr: `challenge_rating=`,
  monsterType: `type=`,

  searchMethod: undefined,

  exibitionContainer: document.querySelector("#search-param-input"),
  
  option: {
    nameOp: document.querySelector("#search-name"),
    crOp: document.querySelector("#search-cr"),
    typeOp: document.querySelector("#search-type")
  },

  searchType: {
    nameSearch: document.querySelector("#search-name"),
    crSearch: document.querySelector("#search-cr"),
    typeSearch: document.querySelector("#search-type")
  }
};