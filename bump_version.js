var fs = require('fs');

const version = process.argv[2];

const data = fs.readFileSync('./package.json', 'utf8');
let document = JSON.parse(data);
document.version = version;
fs.writeFileSync('./package.json', JSON.stringify(document, null, 2));

const dataLock = fs.readFileSync('./package-lock.json', 'utf8');
let documentLock = JSON.parse(dataLock);
documentLock.version = version;
fs.writeFileSync('./package-lock.json', JSON.stringify(documentLock, null, 2));
