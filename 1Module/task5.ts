const powDigits = (num: number): number => {
    const digits : string[] = num.toString().split('');
    const powedDigits : number[] = digits.map((digit: string) : number => parseInt(digit) ** 2)
    if (digits[0] === '-') return parseInt(digits.join(''));
    return parseInt(powedDigits.join(''));
}