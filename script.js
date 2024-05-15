const qs = document.querySelector.bind(document);

const el = {
  rabbit: qs('.rabbit'),
  buttons: qs('.buttons'),
  response: qs('.response'),
  blup: qs('.blup'),
  blop: qs('.blop'),
  yesButton: qs('.yes'),
  noButton: qs('.no')
};

let scaleFactor = 1; // Initialize scale factor for yes button

const crtHeart = () => {
  const heart = new mojs.Shape({
    parent: el.rabbit,
    shape: 'heart',
    fill: '#ff5050',
    radius: { 15 : 40 },
    duration: 1500,
    easing: 'sin.inout'
  });

  return heart;
};

const showResponse = (text) => {
  el.response.textContent = text;
  el.response.style.display = 'block';
};

const hideResponse = () => {
  el.response.style.display = 'none';
};

const askQuestion = () => {
  showResponse('');
  el.buttons.style.display = 'block';
};

const handleYes = () => {
  showResponse('.................i love you....................................I love you too!..................................i love you too...............................');
  crtHeart().play();
  el.blup.play();
  el.buttons.style.display = 'none';
};

const handleNo = () => {
  const texts = ["Think again...", "Why?", "Come on, don't lie!", "Please reconsider... I know you love me.", "Seriously?"];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  showResponse(randomText);
  el.blop.play();
  el.buttons.style.display = 'none';
  // Double the size of the Yes button
  scaleFactor *= 2;
  el.yesButton.style.transform = `scale(${scaleFactor})`;
  setTimeout(() => {
    hideResponse();
    askQuestion();
  }, 2000);
};

const init = () => {
  askQuestion();
  el.yesButton.addEventListener('click', handleYes);
  el.noButton.addEventListener('click', handleNo);
};

document.addEventListener('DOMContentLoaded', init);
