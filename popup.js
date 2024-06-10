document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('languageSelect').value;
    const translatedTextElem = document.getElementById('translatedText');
  
    // Clear previous translated text
    translatedTextElem.innerText = '';
  
    // Show loading indicator
    translatedTextElem.innerText = 'Translating...';
  
    const url = 'http://localhost:5000/translate';
  
    const data = {
      q: inputText,
      target: targetLanguage,
      source: 'auto' // Automatically detect the source language
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.translatedText) {
        translatedTextElem.innerText = data.translatedText;
      } else {
        translatedTextElem.innerText = 'Translation error. Please try again.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      translatedTextElem.innerText = 'An error occurred. Please try again later.';
    });
  });
  