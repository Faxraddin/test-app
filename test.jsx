function findLongestWordWithMostVowels(sentence) {
    const words = sentence
      .toLowerCase()
      .match(/[a-z]+/g)
      .filter(word => word.length > 0);
  
    if (!words.length) {
      return null; 
    }
  
    
    const maxLength = Math.max(...words.map(word => word.length));
  
    
    const longestWords = words.filter(word => word.length === maxLength);
  
    
    function countVowels(word) {
      const vowels = "aeiou";
      return word.split("").filter(char => vowels.includes(char)).length;
    }
  
   
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
  