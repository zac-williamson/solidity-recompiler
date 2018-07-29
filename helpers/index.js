
const stackChange = {
    [parseInt('00', 16)]: 0,
    [parseInt('01', 16)]: -1,
    [parseInt('02', 16)]: -1,
    [parseInt('03', 16)]: -1,
    [parseInt('04', 16)]: -1,
    [parseInt('05', 16)]: -1,
    [parseInt('06', 16)]: -1,
    [parseInt('07', 16)]: -1,
    [parseInt('08', 16)]: -2,
    [parseInt('09', 16)]: -2,
    [parseInt('0a', 16)]: -1,
    [parseInt('0b', 16)]: -2,
    [parseInt('10', 16)]: -1,
    [parseInt('11', 16)]: -1,
    [parseInt('12', 16)]: -1,
    [parseInt('13', 16)]: -1,
    [parseInt('14', 16)]: -1,
    [parseInt('15', 16)]: 0,
    [parseInt('16', 16)]: -1,
    [parseInt('17', 16)]: -1,
    [parseInt('18', 16)]: -1,
    [parseInt('19', 16)]: -1,
    [parseInt('1a', 16)]: -1,
    [parseInt('20', 16)]: -1,
    [parseInt('30', 16)]: 1,
    [parseInt('31', 16)]: 1,
    [parseInt('32', 16)]: 1,
    [parseInt('33', 16)]: 1,
    [parseInt('34', 16)]: 1,
    [parseInt('35', 16)]: 0,
    [parseInt('36', 16)]: 1,
    [parseInt('37', 16)]: -3,
    [parseInt('38', 16)]: 1,
    [parseInt('39', 16)]: -3,
    [parseInt('3a', 16)]: 1,
    [parseInt('3b', 16)]: 0,
    [parseInt('3c', 16)]: -4,
    [parseInt('3d', 16)]: 1,
    [parseInt('3e', 16)]: -3,
    [parseInt('40', 16)]: 1,
    [parseInt('41', 16)]: 1,
    [parseInt('42', 16)]: 1,
    [parseInt('43', 16)]: 1,
    [parseInt('44', 16)]: 1,
    [parseInt('45', 16)]: 1,
    [parseInt('50', 16)]: -1,
    [parseInt('51', 16)]: 0,
    [parseInt('52', 16)]: -1,
    [parseInt('53', 16)]: -1,
    [parseInt('54', 16)]: 0,
    [parseInt('55', 16)]: -1,
    [parseInt('56', 16)]: -1,
    [parseInt('57', 16)]: -2,
    [parseInt('58', 16)]: 1,
    [parseInt('59', 16)]: 1,
    [parseInt('5A', 16)]: 1,
    [parseInt('5B', 16)]: 0,
    [parseInt('60', 16)]: 1,
    [parseInt('61', 16)]: 1,
    [parseInt('62', 16)]: 1,
    [parseInt('63', 16)]: 1,
    [parseInt('64', 16)]: 1,
    [parseInt('65', 16)]: 1,
    [parseInt('66', 16)]: 1,
    [parseInt('67', 16)]: 1,
    [parseInt('68', 16)]: 1,
    [parseInt('69', 16)]: 1,
    [parseInt('6a', 16)]: 1,
    [parseInt('6b', 16)]: 1,
    [parseInt('6c', 16)]: 1,
    [parseInt('6d', 16)]: 1,
    [parseInt('6e', 16)]: 1,
    [parseInt('6f', 16)]: 1,
    [parseInt('70', 16)]: 1,
    [parseInt('71', 16)]: 1,
    [parseInt('72', 16)]: 1,
    [parseInt('73', 16)]: 1,
    [parseInt('74', 16)]: 1,
    [parseInt('75', 16)]: 1,
    [parseInt('76', 16)]: 1,
    [parseInt('77', 16)]: 1,
    [parseInt('78', 16)]: 1,
    [parseInt('79', 16)]: 1,
    [parseInt('7a', 16)]: 1,
    [parseInt('7b', 16)]: 1,
    [parseInt('7c', 16)]: 1,
    [parseInt('7d', 16)]: 1,
    [parseInt('7e', 16)]: 1,
    [parseInt('7f', 16)]: 1,
    [parseInt('80', 16)]: 1,
    [parseInt('81', 16)]: 1,
    [parseInt('82', 16)]: 1,
    [parseInt('83', 16)]: 1,
    [parseInt('84', 16)]: 1,
    [parseInt('85', 16)]: 1,
    [parseInt('86', 16)]: 1,
    [parseInt('87', 16)]: 1,
    [parseInt('88', 16)]: 1,
    [parseInt('89', 16)]: 1,
    [parseInt('8a', 16)]: 1,
    [parseInt('8b', 16)]: 1,
    [parseInt('8c', 16)]: 1,
    [parseInt('8d', 16)]: 1,
    [parseInt('8e', 16)]: 1,
    [parseInt('8f', 16)]: 1,
    [parseInt('90', 16)]: 0,
    [parseInt('91', 16)]: 0,
    [parseInt('92', 16)]: 0,
    [parseInt('93', 16)]: 0,
    [parseInt('94', 16)]: 0,
    [parseInt('95', 16)]: 0,
    [parseInt('96', 16)]: 0,
    [parseInt('97', 16)]: 0,
    [parseInt('98', 16)]: 0,
    [parseInt('99', 16)]: 0,
    [parseInt('9a', 16)]: 0,
    [parseInt('9b', 16)]: 0,
    [parseInt('9c', 16)]: 0,
    [parseInt('9d', 16)]: 0,
    [parseInt('9e', 16)]: 0,
    [parseInt('9f', 16)]: 0,
    [parseInt('a0', 16)]: -2,
    [parseInt('a1', 16)]: -3,
    [parseInt('a2', 16)]: -4,
    [parseInt('a3', 16)]: -5,
    [parseInt('a4', 16)]: -3,
    [parseInt('f0', 16)]: -2,
    [parseInt('f1', 16)]: -6,
    [parseInt('f2', 16)]: -6,
    [parseInt('f3', 16)]: -2,
    [parseInt('f4', 16)]: -5,
    [parseInt('f5', 16)]: 0,
    [parseInt('fa', 16)]: -5,
    [parseInt('fb', 16)]: -3,
    [parseInt('fd', 16)]: -2,
    [parseInt('fe', 16)]: -2,
    [parseInt('ff', 16)]: -1,
};

const isPushOp = opcode => (opcode > 95) && (opcode < 128);

const getStackChange = (charcode) => {
    return stackChange[charcode];
}


module.exports = {
    isPushOp,
    getStackChange,
};
