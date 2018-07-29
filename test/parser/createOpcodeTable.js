/* eslint no-confusing-arrow: 0 */
/* eslint no-nested-ternary: 0 */
/* eslint no-unused-expressions: 0 */

// ### External Dependencies
const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');

const convertStringToBinary = require('../../parser/convertStringToBinary');
const createOpcodeTable = require('../../parser/createOpcodeTable');

describe('CreateOpcodeTable', () => {
    let oneByte;
    let thirtyTwoBytes;
    let binaryData;
    let stringData;
    beforeEach(() => {
        thirtyTwoBytes = '012345678910111213141516171819202122232425262728292a2b2c2d2e2f30';
        oneByte = '93';
        stringData = `60${oneByte}827f${thirtyTwoBytes}f3`;
        binaryData = convertStringToBinary(stringData);
    });

    afterEach(() => {
        thirtyTwoBytes = '';
        oneByte = '';
        binaryData = '';
        stringData = '';
    });

    it('Converts binary array of opcodes into formatted tables', () => {
        const { opcodeTable, pushTable } = createOpcodeTable(binaryData, stringData);
        expect(opcodeTable).to.deep.equal([
            {
                charcode: parseInt('60', 16),
                prev: -1,
                next: 1,
                pushTableIdx: 0,
                jumpTableIdx: -1,
            },
            {
                charcode: parseInt('82', 16),
                prev: 0,
                next: 2,
                pushTableIdx: -1,
                jumpTableIdx: -1,
            },
            {
                charcode: parseInt('7f', 16),
                prev: 1,
                next: 3,
                pushTableIdx: 1,
                jumpTableIdx: -1,
            },
            {
                charcode: parseInt('f3', 16),
                prev: 2,
                next: -1,
                pushTableIdx: -1,
                jumpTableIdx: -1,
            },
        ]);
        expect(pushTable).to.deep.equal([
            oneByte,
            thirtyTwoBytes,
        ]);
    });
});