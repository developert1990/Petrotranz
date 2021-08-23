const prompts = require('prompts');
const chalk = require('chalk');
const { distinctWords } = require('./distinctWords');
const { findTopX } = require('./findTopX');
const { listAllCharacters } = require('./listtAllCharacters');
const { matchedLines } = require('./matchedLines');
const { punctuation } = require('./punctuation');
const { readFile } = require('./readFile');

const main = async () => {
    const firstQuestion = await prompts({
        type: 'select',
        name: 'value',
        message: 'Please chosse one file to read ',
        choices: [
            { title: 'Alices Adventures in Wonderland - Lewis Carroll', value: 'Alices Adventures in Wonderland - Lewis Carroll.txt' },
            { title: 'A Tale of Two Cities - Charles Dickens', value: 'A Tale of Two Cities - Charles Dickens.txt' },
        ],
    });
    const secondQuestion = await prompts({
        type: 'select',
        name: 'value',
        message: 'Please select the number you want to get service',
        choices: [
            { title: '1. A distinct list of all the characters', value: 1 },
            { title: '2. A distinct list of all punctuation', value: 2 },
            { title: '3. A list of distinct words', value: 3 },
            { title: '4. Search', value: 4 },
            { title: '5. Search Top "X" words', value: 5 },
            { title: '6. Quit', value: 6 },
        ],
    })
    const firstAnswer = firstQuestion.value;
    const secondAnswer = secondQuestion.value;
    const fileData = readFile(firstAnswer);
    switch (secondAnswer) {
        case 1:
            listAllCharacters(fileData);
            reTry();
            break;
        case 2:
            punctuation(fileData);
            reTry();
            break;
        case 3:
            distinctWords(fileData);
            reTry();
            break;
        case 4:
            const keyword = await getSearchKeyword();
            matchedLines(fileData, keyword);
            reTry();
            break;
        case 5:
            const { topX, option } = await getTopXOptions();
            findTopX(fileData, topX, option);
            reTry();
            break;
        default:
            console.log(chalk.magenta(`Thank you for using Sangmean's Petrotranz Application, See you again!😃`));
            return;
    }

}

const reTry = async () => {
    const { value: reTryAnswer } = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'Do you want to keep going?',
        initial: true
    });
    if (reTryAnswer) {
        main();
    } else {
        console.log(chalk.magenta(`Thank you for using Sangmean's Petrotranz Application, See you again!😃`));
    }
};

const getSearchKeyword = async () => {
    const { value: search } = await prompts({
        type: 'text',
        name: 'value',
        message: 'Please type any word to search',
    });
    return search;
};

const getTopXOptions = async () => {
    const { value: topX } = await prompts({
        type: 'number',
        name: 'value',
        message: 'Please enter the number',
    });
    const { value: option } = await prompts({
        type: 'select',
        name: 'value',
        message: 'Please select one search option',
        choices: [
            { title: '1. Search with conjunction', value: 'CONJUNCTION' },
            { title: '2. Search without conjunction', value: 'NO_CONJUNCTION' },
        ],
    });
    return { topX, option };
};

main();