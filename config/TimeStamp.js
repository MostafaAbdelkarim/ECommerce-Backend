const dateObject = new Date();
const date = (`0${dateObject.getDate()}`).slice(-2);
const month = (`0${dateObject.getMonth() + 1}`).slice(-2);
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();

const currentTimeStamp = `${date}/${month}/${year} - ${hours}:${minutes}:${seconds}`;

module.exports = {
    currentTimeStamp
};