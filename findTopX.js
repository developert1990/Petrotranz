const chalk = require('chalk');
const { pickOnlyWords } = require('./utils');
const CONJUNCTION = ['and', 'or', 'nor', 'for', 'yet', 'so'];
const findTopX = (fileData, topX, option) => {
    switch (option) {
        case 'NO_CONJUNCTION':
            return findTopXwithoutConjunction(fileData, topX);
        case 'CONJUNCTION':
            return findTopXWithConjunction(fileData, topX);
        default:
            return;
    }
};

const findTopXWithConjunction = (fileData, topX) => {
    const uniqueArr = uniqueArrwithWords(fileData);
    uniqueArr.filter((data, index) => index + 1 <= topX && log(data, index))
};

const findTopXwithoutConjunction = (fileData, topX) => {
    const uniqueArr = uniqueArrwithWords(fileData);
    const withoutConjunctionArr = uniqueArr.filter((data) => !CONJUNCTION.includes(data.toLowerCase()));
    withoutConjunctionArr.filter((data, index) => index + 1 <= topX && log(data, index))
};

const uniqueArrwithWords = (fileData) => {
    const words = pickOnlyWords(fileData);
    const uniqueArr = [...new Set(words)];
    return uniqueArr;
};

const log = (data, index) => {
    return console.log(`${chalk.yellowBright('Top')} ${chalk.greenBright(index + 1)} ${chalk.yellowBright('word is')} ${chalk.blueBright(data)}`);
};

module.exports = {
    findTopX
}
