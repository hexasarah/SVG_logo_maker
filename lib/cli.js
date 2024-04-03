const inquirer = require('inquirer');
const { validateHTMLColorHex, validateHTMLColorName } = require('validate-color');
const { writeFile } = require('fs');
const { Circle, Square, Triangle } = require('./shapes');

class Cli {
  getUserInput() {
    const questions = [
      {
        type: "input",
        message: "SVG logo file name",
        name: "fileName", 
        default: 'logo',
        filter: (input) => input.replace('.svg', '')
      }
    ]
  }
}