const opcodes = require('../config/opCodes');
const helpers = require('../helpers');

const { isPushOp, getStackChange } = helpers;
const { OPCODE } = opcodes;

function getCodeCopyParamIndices(
    opcodeTable,
    ptr,
    stackDepth = 0,
    params = [],
) {
    if (params.length === 3) {
        return params;
    }
    if (ptr === -1) {
        throw new Error('could not get codecopy params!');
    }
    const opcode = opcodeTable[ptr];
    const newStackDepth = stackDepth + getStackChange(opcode.charcode);
    // simple case: we assume params are literals pushed onto stack.
    // If this is not the case you've got some WEIRD code on your hands.
    const foundParam = (params.length === (newStackDepth - 1)) && isPushOp(opcode.charcode);
    return getCodeCopyParamIndices(
        opcodeTable,
        opcode.prev,
        newStackDepth,
        [
            ...params,
            ...(foundParam ? [opcode.pushTableIdx] : []),
        ],
    );
}

module.exports = function identifyConstructor(opcodeTable, pushTable, ptr = 0) {
    if (ptr === opcodeTable.length) {
        return -1;
    }
    const op = opcodeTable[ptr];
    if (
        (op.charcode === OPCODE.CODECOPY) &&
        (opcodeTable[op.next].charcode === OPCODE.PUSH1) &&
        (opcodeTable[opcodeTable[op.next].next].charcode === OPCODE.RETURN)
    ) {
        const [destIdx, sourceIdx, sizeIdx] = getCodeCopyParamIndices(opcodeTable, op.prev);
        const source = pushTable[sourceIdx];
        const size = pushTable[sizeIdx];
        // at this point we haven't refined the opcode table, so we can use the
        // byte index to slice our array
        return {
            contractCode: opcodeTable.slice(Number(source) + 1, source + size).map((o) => ({
                ...o,
                prev: o.prev - source - 1,
                next: o.next === -1 ? -1 : o.next - source - 1,
            })),
            constructorCode: [
                ...opcodeTable.slice(0, opcodeTable[op.next].next),
                {
                    ...opcodeTable[opcodeTable[op.next].next],
                    next: -1,
                },
            ],
        }
    }
    return identifyConstructor(opcodeTable, pushTable, op.next);
}
