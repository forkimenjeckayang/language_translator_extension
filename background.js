// Create context menu item
chrome.contextMenus.create({
  id: "translateText",
  title: "Translate with Language Translator Extension",
  contexts: ["selection"] // Show context menu item when text is selected
});

// Add click event listener for context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateText" && info.selectionText) {
    // Send selected text to the popup for translation
    chrome.runtime.sendMessage({ type: "translateFromContextMenu", text: info.selectionText });
  }
});

// Add listener for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "textSelected" && message.text) {
    // Create context menu item dynamically for selected text
    chrome.contextMenus.create({
      id: "translateText",
      title: `Translate "${message.text}" with Language Translator Extension`,
      contexts: ["selection"]
    });
  }
});

