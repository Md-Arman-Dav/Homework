let onBtn = document.getElementsByClassName('onBtn')[0];
let offBtn = document.getElementsByClassName('offBtn')[0];
let bulb = document.getElementsByClassName('bulb')[0];

onBtn.addEventListener('click', function () {
  bulb.src = './on.png';
});
offBtn.addEventListener('click', function () {
  bulb.src = './off.png';
});
