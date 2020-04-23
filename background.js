/*
 * Since rules are persistent across browsing sessions, on every installation
 * we should clear previously installed rules and then register new rules.
 */

// Show the extension's page action if we are on the Courseworks page
const rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'courseworks2.columbia.edu' },
    }),
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([ rule ]);
  });
});
