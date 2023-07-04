function $(str) {
  if (typeof str === 'string') {
    return document.querySelector(str);
  }else if (typeof str === 'function') {
    window.onload = str;
  }
}

$(function () {
  const obtainImg = $('#box').getElementsByTagName('img')[0];
  const obtainButtons = $('#box').getElementsByTagName('button');
  let timer = null;
  let page = 0;
  let currentBt = null;

  for (var i = 0; i < obtainButtons.length; i++) {
    obtainButtons[i].onclick = function () {
      stopTimer();
      currentBt = this;
      startTimer();
    }
  }

  function startTimer() {
    if (timer == null) {
      timer = setInterval(upDate, 100);
    }
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function upDate() {
    page++;
    changeView();
  }

  function changeView() {
    const temp = currentBt.getElementsByTagName('img')[0];
    if (page > temp.alt) {
      page = 0;
      stopTimer();
    }
    obtainImg.src = 
      'img/' + temp.name + '/' + temp.name + '_' + format(page, 2) + '.jpg';
  }

  function format(index, num) {
    let str = index.toString();
    while (str.length != num) {
      str = '0' + str;
    }
    return str;
   }
});
