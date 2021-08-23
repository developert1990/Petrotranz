const chalk = require('chalk');

const matchedLines = (fileData, keyword) => {
    const splitedByLine = fileData.split(/\n/g);
    let found = false;
    for (const [index, value] of splitedByLine.entries()) {
        if (value.includes(keyword)) {
            found = true;
            console.log(`${chalk.yellowBright('The Keyword')} "${chalk.greenBright(keyword)}" ${chalk.yellowBright('is found on line')} `, chalk.blueBright(index + 1));
        }
    }
    if (!found) return console.log(`${chalk.redBright('Sorry, The Keyword')} "${chalk.greenBright(keyword)}" ${chalk.redBright('can not be found in the file')} `);
};

module.exports = {
    matchedLines
}
