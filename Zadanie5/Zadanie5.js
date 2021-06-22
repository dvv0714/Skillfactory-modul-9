function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      
      let result = JSON.parse(xhr.response);  
      let lastSuccess = localStorage.setItem('myJSON', xhr.response);
      if (callback) {
        callback(result);
      }
    };
    xhr.send();
  };
  
  let resultNode = document.querySelector('.j-result');
  let btnNode = document.querySelector('.j-btn-request');
  function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
      let cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }

btnNode.addEventListener('click', () => {
  let userPage = document.getElementById('userPage').value;
  let userLim = document.getElementById('userLim').value;
  if ((userPage < 1 || userPage > 10) && (userLim < 1 || userLim > 10)){
    resultNode.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10<p>"
  } else if(userPage < 1 || userPage > 10){
    resultNode.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10<p>"
  } else if(userLim < 1 || userLim > 10){
    resultNode.innerHTML = "<p>Лимит вне диапазона от 1 до 10<p>"
  }else{
    useRequest(`https://picsum.photos/v2/list?page=${userPage}&limit=${userLim}`, displayResult);
  }
});

window.onload = function() {
  let lastSuccess = localStorage.getItem("myJSON");
  if (lastSuccess !== null) {
    displayResult(JSON.parse(lastSuccess));
  }
};