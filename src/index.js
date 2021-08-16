let toStringNum = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",

    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",

    100: "hundred",

    1000: "thousand",
};
let tenth = {
    10: "ten",
    100: "hundred",

    1000: "thousand",
};

module.exports = function toReadable(number) {
    let result = "";
    let numNew = number;
    if (number === 0) {
        return "zero";
    }
    if (numNew.toString().length === 3) {
        let firstNum = numNew.toString()[0];
        numNew = Number(
            numNew.toString().substr(1, numNew.toString().length - 1)
        );
        result += `${toStringNum[firstNum]} hundred`;
        /*[100-999]*/
    }

    if (numNew.toString().length === 2 && numNew >= 10 && numNew < 20) {
        console.log(`${toStringNum[numNew.toString()]}`);
        result += ` ${
            toStringNum[numNew.toString()]
        }`; /*соотв для 10-19 табл */
    } else {
        if (numNew.toString().length === 2) {
            let firstNum = numNew.toString()[0] * 10;
            numNew = Number(
                numNew.toString().substr(1, numNew.toString().length - 1)
            );
            result += ` ${toStringNum[firstNum]}`; /*[20-99]*/
        }
        if (numNew.toString().length === 1) {
            result += ` ${toStringNum[numNew.toString()]}`; /*0-9*/
        }
    }
    return result.trim();
};
