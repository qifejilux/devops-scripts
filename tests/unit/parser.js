const fs = require('fs');
const path = require('path');

class Parser {
  constructor(file) {
    this.file = file;
  }

  async readFile() {
    try {
      const data = await fs.promises.readFile(this.file, 'utf8');
      return data;
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  parseData(data) {
    const lines = data.split('\n');
    const parsedData = lines.map(line => line.trim());
    return parsedData;
  }

  async parseFile() {
    const data = await this.readFile();
    const parsedData = this.parseData(data);
    return parsedData;
  }
}

module.exports = Parser;