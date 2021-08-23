const { pickOnlyWords, getCounts } = require('./utils');
const chalk = require('chalk');

const distinctWords = (fileData) => {
    const words = pickOnlyWords(fileData);
    const hashMap = getCounts(words);
    const sortableArr = [];

    for (const [word, count] of hashMap) {
        sortableArr.push([word, count]);
    }

    sortableArr.sort((a, b) => a[0] - b[0]);

    for (let [key, value] of sortableArr) {
        console.log(`${chalk.yellowBright('Word:')} ${chalk.greenBright(key)} , ${chalk.yellowBright('Times:')} ${chalk.blueBright(value)}`);
    }

};

module.exports = {
    distinctWords
}
