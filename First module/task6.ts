const digitsSqrt = (num: number): number => {
    if (num < 10) {
        return num;
    }
    let result: number = 0;
    let digits: number[] =num.toString().split('').map((digit: string) :number => {return parseInt(digit)});
    digits.forEach((num: number) : void => {result += num});
    if (result > 9) {
        while (result > 9) {
            let sum: number = 0;
            let digits: number[] =result.toString().split('').map((digit: string) :number => {return parseInt(digit)});
            digits.forEach((num: number) : void => {sum += num});
            result = sum;
        }
    }
    return result;
}

console.log(digitsSqrt(493193));