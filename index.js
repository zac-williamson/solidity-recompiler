// const bytecode = require(`./bytecodeFiles/${process.env.FILE_PATH}`);

if (process.argv.length !== 3) {
    console.error('Invalid number of arguments, please specify input file');
}

const bytecodeJSON = require(`${process.argv.length}`);

const { bytecode } = bytecodeJSON;

if (!bytecode) {
    console.error('unknown file format');
}

const decompiler = {};

