function Opcode(charcode, prev, next, pushTableIdx = -1, jumpTableIdx = -1) {
    return {
        charcode,
        prev,
        next,
        pushTableIdx,
        jumpTableIdx,
    };
}

module.exports = function createOpcodeTable(
    code,
    codeString,
) {
    return function iterate(ptr = 0, opcodeTable = [], pushTable = []) {
        if (ptr === code.length) {
            return { opcodeTable, pushTable };
        }
        const charcode = code[ptr];
        const isPush = (charcode > 95 && charcode < 128);
        const ptrIncrement = isPush ? (charcode - 94) : 1;
        const next = (ptr < code.length - 1) ? opcodeTable.length + 1 : -1;
        return iterate(
            ptr + ptrIncrement,
            [
                ...opcodeTable,
                new Opcode(charcode, opcodeTable.length - 1, next, isPush ? pushTable.length : -1),
            ],
            [
                ...pushTable,
                ...(isPush ? [codeString.slice(2 + (ptr * 2), (ptr + ptrIncrement) * 2)] : []),
            ],
        );
    }();
}