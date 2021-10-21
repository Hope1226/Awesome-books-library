const dateTimeTxt = document.querySelector('#date-time');
const currentTime = luxon.DateTime.local();

const dataString = `${currentTime.monthLong} ${currentTime.day}th ${currentTime.year}, ${currentTime.hour}:${currentTime.minute}:${currentTime.second} `;

dateTimeTxt.textContent = dataString;