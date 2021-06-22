let resultNode = document.querySelector('.j-result');
let btnNode = document.querySelector('.j-btn-request');

btnNode.addEventListener('click', () => {
  let userWidth = document.getElementById('pic_width').value;
  let userHeight = document.getElementById('pic_height').value;
    if (userWidth < 100 || userWidth > 300 || userHeight < 100 || userHeight > 300){
    resultNode.innerHTML = "<span>Одно из чисел вне диапазона от 100 до 300</span>"
  }else {
    fetch(`https://picsum.photos/${userWidth}/${userHeight}`)
    .then((response) => {
      let cardBlock = `
      <div class="card">
        <img
          src="${response.url}"
          class="card-image"
        />
      </div>
    `;
    resultNode.innerHTML = cardBlock;
    })
    .catch(() => { console.log('error') });
  }
});