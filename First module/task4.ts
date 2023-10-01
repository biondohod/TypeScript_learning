const reverseSentenceWords = (sentence: string): string => {
    const words : string[] = sentence.split(' ');
    if (words[0] === '') {
        return 'there is no words in sentence';
    }
    const reversedWords : string[] = words.map((word: string) : string => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}
