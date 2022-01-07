const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温 :insertx: で外は寒かった。 :inserty:は出かけた。 :insertz:に着いた。 :inserta: 体重:insertb:の:inserty:は驚いたが、:insertc:は驚かなかった。:insertz:ではよくあることだった。';
const insertX = ['摂氏-1度', '華氏40度'];
const insertY = ['スヌーピー', 'ミッキーマウス', 'サンタクロース'];
const insertZ = ['ディズニーランド', '千駄ヶ谷', '津田塾大学'];
const insertA = ['雪が降っていた。', '混雑していた。'];
const insertB = ['50kg', '110ポンド'];
const insertC= ['Ume', '津田','私'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const aItem = randomValueFromArray(insertA);
  const bItem = randomValueFromArray(insertB);
  const cItem = randomValueFromArray(insertC);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserty:',aItem);
  newStory = newStory.replace(':insertz:',bItem);
  newStory = newStory.replace(':inserty:',cItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
