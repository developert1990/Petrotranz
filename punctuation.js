const chalk = require('chalk');
const { getCounts } = require('./utils');

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

const punctuation = (fileData) => {
    const punctuationArr = fileData.match(regex);
    const hashMap = getCounts(punctuationArr);
    const sortableArr = [];

    for (const [puctuation, count] of hashMap) {
        sortableArr.push([puctuation, count]);
    }

    sortableArr.sort((a, b) => b[1] - a[1]);
    for (const [key, value] of sortableArr) {
        console.log(`${chalk.yellowBright('Punctuation:')}  ${chalk.greenBright(key)} , ${chalk.yellowBright('Times:')} ${chalk.blueBright(value)}`)
    }
};

module.exports = {
    punctuation
}
