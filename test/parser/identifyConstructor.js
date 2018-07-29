/* eslint no-confusing-arrow: 0 */
/* eslint no-nested-ternary: 0 */
/* eslint no-unused-expressions: 0 */

// ### External Dependencies
const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');

const convertStringToBinary = require('../../parser/convertStringToBinary');
const createOpcodeTable = require('../../parser/createOpcodeTable');
const identifyConstructor = require('../../parser/identifyConstructor');

const testContract = require('../testData/testContract');

const { txBytecode, constructorBytecode, contractBytecode } = testContract;

describe.only('IdentifyConstructor', () => {
    let txBinaryData;
    let constructorBinaryData;
    let contractBinaryData;
    let txOpcodes;
    let txPushTable;
    let constructorOpcodes;
    let constructorPushTable;
    let contractOpcodes;
    let contractPushTable;
    beforeEach(() => {
        txBinaryData = convertStringToBinary(txBytecode);
        constructorBinaryData = convertStringToBinary(constructorBytecode);
        contractBinaryData = convertStringToBinary(contractBytecode);
        ({ opcodeTable: txOpcodes, pushTable: txPushTable } = createOpcodeTable(txBinaryData, txBytecode));
        ({ opcodeTable: constructorOpcodes, pushTable: constructorPushTable } = createOpcodeTable(constructorBinaryData, constructorBytecode));
        ({ opcodeTable: contractOpcodes, pushTable: contractPushTable } = createOpcodeTable(contractBinaryData, contractBytecode));
    });

    afterEach(() => {
        txBinaryData= 0;
        constructorBinaryData= 0;
        contractBinaryData= 0;
        txOpcodes= 0;
        txPushTable= 0;
        constructorOpcodes= 0;
        constructorPushTable= 0;
        contractOpcodes= 0;
        contractPushTable= 0;
    });

    it('Correctly identifies constructor in opcode table and returns code for constructor and main contract', () => {
        const { contractCode, constructorCode } = identifyConstructor(txOpcodes, txPushTable);
        expect(constructorCode).to.deep.equal(constructorOpcodes);
        expect(contractCode.map(({ pushTableIdx, ...rest }) => rest)).to.deep.equal(contractOpcodes.map(({ pushTableIdx, ...rest }) => rest));
    });
});