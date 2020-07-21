let searchField;
searchInfo.option.nameOp.onclick = () => {
  if (searchInfo.searchMethod != searchInfo.monsterName) {
    searchField = new MonsterSearchNameView(searchInfo.exibitionContainer);
    searchField.update();
    searchInfo.searchBtn = document.querySelector("#submit-search");
    searchInfo.searchBtn.onclick = btnSearch;
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
    searchInfo.exibitionContainer.innerHTML = "";
    searchInfo.searchMethod = searchInfo.monsterType;
    console.log(searchInfo.searchMethod);
  }
};


const btnSearch = () => {
    let monsterSearchXhr = new XMLHttpRequest();
    monsterSearchXhr.open("GET",searchInfo.apiUrl );
    
    monsterSearchXhr.onload = () => {
      const responseJson = JSON.parse(monsterSearchXhr.responseText);
    
      //responseJson.results.forEach( (m) => console.log(m.name));
      console.log(responseJson);
    };
    
    monsterSearchXhr.send();
  };