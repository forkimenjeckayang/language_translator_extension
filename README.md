# language_translator_extension

A web browser extension which as of now can be used to translate from one language to another. It supports four languages currenty French, English , German and Spanish. You simply copy text which you want to translate, paste it into the text area , selct your langaue and click the traslate button. 

It uses [Libre Translate](https://hub.docker.com/r/libretranslate/libretranslate) an open source project to handle the transaltions . This translation engine is sef hosted on AWS as an EC2 instance which can be accessed publicly.

## Steps To Test and Use Plugin With Chrome Browser

Welcome to the Language Translator Extension! This extension allows you to easily translate text within your browser.

## Installation Guide

Follow these steps to install the Language Translator Extension on Google Chrome.

### Step 1: Download the Extension

1. Navigate to the [Releases](https://github.com/forkimenjeckayang/language_translator_extension/releases/tag/v1.0.0) page of this repository.
2. Download the latest release ZIP file(*Source code(zip)*).
3. Extract the contents of the ZIP file to a directory on your computer.

### Step 2: Load the Extension in Chrome

1. Open Google Chrome.
2. Go to the Extensions page by entering `chrome://extensions/` in the address bar.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click the **Load unpacked** button that appears.
5. In the dialog that opens, navigate to the directory where you extracted the extension files, and select the folder containing the `manifest.json` file.Use the directory which came from the unzipped extension

### Step 3: Using the Extension

1. Once the extension is loaded, pin it and you should see its icon appear in the Chrome toolbar.
2. Click the extension icon to open the Language Translator.
3. You can now transalte by putting text in input field, select your langauage and translate.

## Troubleshooting

If you encounter any issues while installing or using the extension, please follow these steps:

1. Make sure you have downloaded and extracted the files correctly.
2. Ensure that you have selected the correct folder containing the `manifest.json` file when loading the unpacked extension.
3. Check that **Developer mode** is enabled in Chrome.

If you continue to experience problems, feel free to open an issue on the [GitHub repository](https://github.com/forkimenjeckayang/language_translator_extension/issues).

## Contributing

We welcome contributions to the Language Translator Extension! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

Thank you for using the Language Translator Extension! If you find it useful, please consider starring the repository and sharing it with others.

