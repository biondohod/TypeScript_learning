const powDigits = (num: number): number => {
    const digits : string[] = num.toString().split('');
    digits.forEach((digit : string, index : number) => {
        if (digits[index] === '-') {
            digits[index] = '';
        }
        else {
            digits[index] = (parseInt(digit) ** 2).toString();
        }
    });
    return parseInt(digits.join(''));
}
