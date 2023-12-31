const reverseSentenceWords = (sentence: string): string => {
    const words : string[] = sentence.split(' ');
    if (!words.length) {
        return 'there is no words in sentence';
    }
    const reversedWords : string[] = words.map((word: string) : string => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}
