function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        let result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
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
    let userValue = document.querySelector('input').value;
    if (userValue < 1 || userValue > 10){
      resultNode.innerHTML = "<span>Число вне диапазона от 1 до 10</span>"
    }else{
      useRequest(`https://picsum.photos/v2/list/?limit=${userValue}`, displayResult); 
    }
  })