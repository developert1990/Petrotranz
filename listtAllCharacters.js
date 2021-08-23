const chalk = require('chalk');
const { getCounts } = require('./utils');

const listAllCharacters = (fileData) => {
    const emptyChars = [' ', '\n', '\r', '', '\uFEFF']; // \uFEFF - ZERO WIDTH NO-BREAK SPACE
    const characters = fileData.split('').filter(ch => !emptyChars.includes(ch));
    const sortedCharacters = characters.sort();
    const hashMap = getCounts(sortedCharacters);

    for (const [character, count] of hashMap) {
        console.log(`${chalk.yellowBright('Character:')} ${chalk.greenBright(character)} , ${chalk.yellowBright('Times:')} ${chalk.blueBright(count)}`);
    }

};

module.exports = {
    listAllCharacters
}
