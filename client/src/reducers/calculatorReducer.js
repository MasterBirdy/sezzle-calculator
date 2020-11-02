import CALCULATOR_CONSTANTS from "../constants/calculatorConstants";
import CALCULATOR_OPERATORS from "../constants/calculatorOperators";

export const calculatorReducer = (state, action) => {
    const { value, savedValue, decimal, operator, negative, log } = state;
    switch (action.type) {
        /**
         * ADD NUMBER
         * Add a number to the end of value. If the payload's value is 0 and
         * the value is already 0, return 0.
         */
        case CALCULATOR_CONSTANTS.ADD_VALUE:
            const numberAdded = action.payload;
            if (value === "0") {
                if (numberAdded === "0") {
                    return state;
                } else {
                    return { ...state, error: false, errorMessage: null, value: "" + numberAdded };
                }
            }
            return { ...state, error: false, errorMessage: null, value: value + numberAdded };
        /**
         * REMOVE NUMBER
         * Remove a number at the end of the value. If the value is a single digit,
         * change it to 0. If the value is already 0, if the state has a saved value,
         * delete the associated value and the saved value.
         */
        case CALCULATOR_CONSTANTS.REMOVE_VALUE:
            if (value === "0") {
                return {
                    log,
                    value: "0",
                };
            }
            const numberRemoved = value.slice(-1);
            return {
                ...state,
                error: false,
                errorMessage: null,
                decimal: numberRemoved === "." ? false : decimal,
                value: value.length <= 1 ? "0" : value.slice(0, value.length - 1),
            };
        /**
         * CLEAR VALUE
         * Change value back to 0 and reset decimal value and negative value.
         */
        case CALCULATOR_CONSTANTS.CLEAR_VALUE:
            return { value: "0", log };
        /**
         * ADD DECIMAL
         * Add's a decimal to the value and sets decimal value to true. If decimal
         * is already present, just returns the current state.
         */
        case CALCULATOR_CONSTANTS.ADD_DECIMAL:
            if (!state.decimal) {
                return {
                    ...state,
                    error: false,
                    errorMessage: null,
                    value: value + ".",
                    decimal: true,
                };
            }
            return state;
        /**
         * ADD AN OPERATOR
         * Stores the current value as a saved value and saves the operator. If a saved
         * value and operator is already present, calculates the value, saves it, and saves
         * the operator.
         */
        case CALCULATOR_CONSTANTS.ADD_OPERATOR:
            if (operator && savedValue) {
                if (operator === CALCULATOR_OPERATORS.DIVIDE_SIGN && value === "0") {
                    return {
                        error: true,
                        errorMessage: "Divide by zero not allowed!",
                        value: "0",
                        log,
                    };
                }
                const { value: calculatedValue, negative: calculatedNegative } = calculateToString(
                    calculate(parseFloat(savedValue), parseFloat(value), operator)
                );
                return {
                    error: false,
                    errorMessage: null,
                    operator: action.payload,
                    savedValue: "" + (calculatedNegative ? "-" : "") + calculatedValue,
                    value: "0",
                    decimal: false,
                    negative: false,
                    log: { operator, savedValue, prevValue: value, calculatedValue },
                };
            }
            return {
                error: false,
                errorMessage: null,
                operator: action.payload,
                savedValue: negative ? "-" + value : value,
                value: "0",
                decimal: false,
                negative: false,
                log,
            };
        /**
         * MAKE NEGATIVE
         * Negates the current value of negative in the state. If value is 0, return
         * state.
         */
        case CALCULATOR_CONSTANTS.MAKE_NEGATIVE:
            if (value === "0") return state;
            return {
                ...state,
                negative: !negative,
            };
        /**
         * EQUAL OPERATOR
         * Calculates the stored value and current value with the operator. Displays the result
         * in the value and resets all other values in the state. It adds decimal and negative to
         * state depending on calculate value. If no saved value or operator is present, returns the state.
         */
        case CALCULATOR_CONSTANTS.EQUALS_OPERATOR:
            if (savedValue && operator) {
                if (operator === CALCULATOR_OPERATORS.DIVIDE_SIGN && value === "0") {
                    return {
                        error: true,
                        errorMessage: "Divide by zero not allowed!",
                        value: "0",
                        log,
                    };
                }

                const calculated = calculateToString(calculate(parseFloat(savedValue), parseFloat(value), operator));

                return {
                    ...calculated,
                    log: {
                        operator,
                        savedValue,
                        prevValue: value,
                        calculatedValue: (calculated.negative ? "-" : "") + calculated.value,
                    },
                };
            }
            return state;
        default:
            return state;
    }
};

/**
 * @desc Takes in the saved value, the current value, and the operator
 * and calculates the value.
 */

const calculate = (first, second, operator) => {
    switch (operator) {
        case CALCULATOR_OPERATORS.PLUS_SIGN:
            return first + second;
        case CALCULATOR_OPERATORS.MINUS_SIGN:
            return first - second;
        case CALCULATOR_OPERATORS.TIMES_SIGN:
            return first * second;
        case CALCULATOR_OPERATORS.DIVIDE_SIGN:
            return first / second;
        default:
            return 0;
    }
};

/**
 * @desc Takes the calculated value of the values and returns an object that
 * describes the value, whether it has a decimal, and whether it is negative.
 */

const calculateToString = (value) => {
    let returnedValue = value;
    if (returnedValue % 1 !== 0) returnedValue = returnedValue.toFixed(2);
    let stringValue = returnedValue + "";
    if (stringValue[0] === "-") {
        stringValue = stringValue.slice(1, stringValue.length);
    }
    return {
        value: stringValue,
        decimal: returnedValue % 1 !== 0,
        negative: returnedValue < 0,
    };
};
