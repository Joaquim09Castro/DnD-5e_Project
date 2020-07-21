let searchInfo = {
  apiUrl: `https://api.open5e.com/monsters/?`,

  monsterName: `name=${"hey"}`,
  monsterCr: `challenge_rating=${"hi"}`,
  monsterType: `type=${"uhh"}`,

  searchMethod: undefined,

  exibitionContainer: document.querySelector("#search-param-input"),
  searchBtn: undefined,
  
  option: {
    nameOp: document.querySelector("#search-name"),
    crOp: document.querySelector("#search-cr"),
    typeOp: document.querySelector("#search-type")
  },

  searchType: {
    nameSearch: document.querySelector("#search-name"),
    crSearch: document.querySelector("#search-cr"),
  }
};