const digitsSqrt = (num: number): number => {
    if (num < 10) {
        return num;
    }
    let result: number = 0;
    let digits: number[] =num.toString().split('').map((digit: string) :number => {return parseInt(digit)});
    while (digits.length > 1) {
        result = digits.reduce((acc: number, current: number) : number => {return acc + current});
        digits = result.toString().split('').map((digit: string) :number => {return parseInt(digit)});
    }
    return result;
}

console.log(digitsSqrt(493193));