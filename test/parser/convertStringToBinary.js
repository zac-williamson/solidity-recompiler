/* eslint no-confusing-arrow: 0 */
/* eslint no-nested-ternary: 0 */
/* eslint no-unused-expressions: 0 */

// ### External Dependencies
const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');

const convertStringToBinary = require('../../parser/convertStringToBinary');

describe('ConvertStringToBinary', () => {
    it('Converts hex opcodes into binary representation', () => {
        const result = convertStringToBinary('608040f7f3ac');
        expect(result).to.deep.equal([
            96,
            128,
            64,
            247,
            243,
            172,
        ]);
    });
});