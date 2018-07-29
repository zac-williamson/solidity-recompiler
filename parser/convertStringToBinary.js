module.exports = function convertStringToBinary(input, accumulator = [], charPointer = 0) {
    if (charPointer < input.length) {
        return convertStringToBinary(
            input,
            [
                ...accumulator,
                parseInt(`${input[charPointer]}${input[charPointer + 1]}`, 16),
            ],
            charPointer + 2,
        );
    }
    return accumulator;
}
