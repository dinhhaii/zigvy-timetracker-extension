'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi I am from Background`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});
