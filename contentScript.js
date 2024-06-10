// Add event listener for text selection
document.addEventListener("mouseup", function() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
      // Send selected text to the background script
      chrome.runtime.sendMessage({ type: "textSelected", text: selectedText });
  }
});
