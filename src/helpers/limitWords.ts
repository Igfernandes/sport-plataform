export function limitWords(words: string, limit: number) {
  return words.length <= limit ? words : words.substring(0, limit) + '...';
}
