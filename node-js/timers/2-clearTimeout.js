const timeOut = 3000;
const returnDone = () => console.log('Done!');

const time = setTimeout(returnDone, timeOut);
clearTimeout(time);