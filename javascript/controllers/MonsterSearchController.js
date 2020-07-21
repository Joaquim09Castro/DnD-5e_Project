let searchField;

searchInfo.option.nameOp.onclick = () => {
  if (searchInfo.searchMethod != searchInfo.monsterName) {
    searchField = new MonsterSearchNameView(searchInfo.exibitionContainer);
    searchField.update();
    searchInfo.searchMethod = searchInfo.monsterName;
    console.log(searchInfo.searchMethod);
  }
};
searchInfo.option.crOp.onclick = () => {
  if (searchInfo.searchMethod != searchInfo.monsterCr) {
    searchField = new MonsterSearchCrView(searchInfo.exibitionContainer);
    searchField.update();
    searchInfo.searchMethod = searchInfo.monsterCr;
    console.log(searchInfo.searchMethod);
  }
};
searchInfo.option.typeOp.onclick = () => {
  if (searchInfo.searchMethod != searchInfo.monsterType) {
    searchField = new MonsterSearchTypeView(searchInfo.exibitionContainer);
    searchField.update();
    searchInfo.searchMethod = searchInfo.monsterType;
    console.log(searchInfo.searchMethod);
  }
};

searchInfo.exibitionContainer.onsubmit = (event) => {
  event.preventDefault();

  searchParam = document.getElementById("search-value").value;
  console.log(searchParam);

  switch (searchInfo.searchMethod) {
    case `name=`:
      searchInfo.searchMethod += `${searchParam}`;
      break;
    case  `challenge_rating=`:
      searchInfo.searchMethod += `${searchParam}`;
      break;
    case `type=`:
      searchInfo.searchMethod += `${searchParam}`;
  }
  console.log(searchInfo.searchMethod);

  let monsterSearchXhr = new XMLHttpRequest();
  monsterSearchXhr.open("GET", searchInfo.apiUrl + searchInfo.searchMethod);

  monsterSearchXhr.onload = () => {
    const responseJson = JSON.parse(monsterSearchXhr.responseText);

    //responseJson.results.forEach( (m) => console.log(m.name));
    console.log(responseJson);
  };

  monsterSearchXhr.send();
};