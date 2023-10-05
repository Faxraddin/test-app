function findLongestWordWithMostVowels(sentence) {
    const words = sentence
      .toLowerCase()
      .match(/[a-z]+/g)
      .filter(word => word.length > 0);
  
    if (!words.length) {
      return null; // No valid words found
    }
  
    // Find the length of the longest word
    const maxLength = Math.max(...words.map(word => word.length));
  
    // Filter words that have the longest length
    const longestWords = words.filter(word => word.length === maxLength);
  
    // Function to count vowels in a word
    function countVowels(word) {
      const vowels = "aeiou";
      return word.split("").filter(char => vowels.includes(char)).length;
    }
  
    // Find the word with the highest number of vowels among the longest words
    let maxVowels = 0;
    let longestWordWithMostVowels = longestWords[0];
    for (const word of longestWords) {
      const vowelCount = countVowels(word);
      if (vowelCount > maxVowels) {
        maxVowels = vowelCount;
        longestWordWithMostVowels = word;
      }
    }
  
    return longestWordWithMostVowels;
  }
  
  const inputSentence =
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  const result = findLongestWordWithMostVowels(inputSentence);
  console.log(result); // Output: "experience"
  