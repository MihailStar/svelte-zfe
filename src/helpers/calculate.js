/**
 * @typedef {('+' | '-' | '*' | '/' )} Operation
 */

/**
 * @type {Array<Operation>}
 */
const operations = ['+', '-', '*', '/'];

/**
 * @param {number} leftOperand
 * @param {Operation} operation
 * @param {number} rightOperand
 * @returns {number}
 */
function calc(leftOperand, operation, rightOperand) {
  if (
    Number.isNaN(leftOperand) ||
    !operations.some((op) => op === operation) ||
    Number.isNaN(rightOperand)
  )
    return NaN;

  return {
    '+': leftOperand + rightOperand,
    '-': leftOperand - rightOperand,
    '*': leftOperand * rightOperand,
    '/': leftOperand / rightOperand,
  }[operation];
}

/**
 * @param {Array<number>} values
 * @param {Array<Operation>} operation
 * @returns {number}
 */
function calculate(values = [], operation = []) {
  const vals = [...values];

  return vals.reduce(
    (result, val, index) => calc(result, operation[index], val),
    vals.shift()
  );
}

export { operations };
export default calculate;
