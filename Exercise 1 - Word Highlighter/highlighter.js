const myParagraph = document.querySelector('#myParagraph');

let para = myParagraph.innerText;

function countRepeatedWords(paragraph) {
    let words = paragraph.split(" ");
    let objWord = {};
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = objWord[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      objWord[words[i]] = count + 1;
    }
    return objWord;
  }
  commonWord = countRepeatedWords(para)
  
  arrayWord =  Object.entries(commonWord)
  
  let obj = {}
  let arr =[]
  arrayWord.forEach(el => {
      obj[el[0]] = el[1]
      arr.push({el[0]:el[1]})
  })
  