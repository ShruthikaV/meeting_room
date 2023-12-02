const fs = require('fs');
const filePath = 'room_data.json';

function readData() {
    // Implement reading from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}

function writeData(data) {
    // Implement writing to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = {
    readData,
    writeData
};
