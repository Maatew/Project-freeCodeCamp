function convertToRoman(num){
    const numeral = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    let roman = '';
    const decimal = Object.keys(numeral).reverse();
    decimal.forEach(key => {
        while (key <= num){
            roman += numeral[key];
            num -= key;
        }
    });
    return roman;
}
console.log(convertToRoman(36));