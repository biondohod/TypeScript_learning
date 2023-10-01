const powDigits = (num: number): number => {
    const digits : string[] = num.toString().split('');
    digits.forEach((digit : string, index : number) => {
        digits[index] = (parseInt(digit) ** 2).toString();
    });
    return parseInt(digits.join(''));
}
