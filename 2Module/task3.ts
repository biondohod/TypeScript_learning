// @ts-ignore
const stringTitle = (str : string) : string => {
    const words : string[] = str.split(' ');
    return words.map((word : string) : string => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(stringTitle('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'));