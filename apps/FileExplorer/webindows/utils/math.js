/**
 * Subtracts a value from another until limit.
 * If limit is met, then subtract from value the rest.
 * Default limit is 150
 * @param {number} value - The value to subtract.
 * @param {number} from - The value to subtract from.
 * @param {number} [limit=150] - The limit to subtract from.
 * @return {Object} An object with properties x and y representing the subtracted values.
 */
function subtractFrom(value, from, limit = 150) {
    let remainingFrom = from - value;
    let subtractedValue = value;

    if (remainingFrom < limit) {
        const toSubtract = value - Math.abs(limit - from);
        remainingFrom = limit;
        subtractedValue = value - toSubtract;
    }

    return { x: subtractedValue, y: remainingFrom };
}

/**
 * Clamps a value between an upper and lower bound.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @return {number} The clamped value.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Subtracts an equal share from each element in the array based on the total value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to subtract from.
 * @return {Array} The modified array after subtracting the equal share from each element.
 */
function subtractEqualShare(value, array) {
    if (array.length == 0) return array;
    const share = value / array.length;
    for (let i = array.length - 1; i >= 0; i--) {
        const newValue = array[i] - share;
        array[i] = Math.max(newValue, 150);
        value -= array[i] - newValue;
    }
    return array;
}

/**
 * Calculates if two numbers are nearly equal within a specified epsilon value.
 *
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * @param {number} [epsilon=1] - The acceptable difference between the numbers.
 * @return {boolean} True if the numbers are nearly equal, false otherwise.
 */
function nearlyEqual(num1, num2, epsilon = 1) {
    return Math.abs(num1 - num2) < epsilon;
}

/**
 * Adds an equal share to each element in the array based on the value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to add to.
 * @return {Array} The modified array.
 */
function spreadValueAcrossArray(value, arr) {
    const length = arr.length;
    if (length === 0) return arr;
    const equalValue = value / length;
    const spreadArray = arr.map((num) => num + equalValue);
    return spreadArray;
}

export { subtractFrom, clamp, subtractEqualShare, nearlyEqual, spreadValueAcrossArray };
