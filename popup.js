const button = document.getElementById('class-network-button');

button.onclick = element => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.body.style.backgroundColor = "red";' },
    );
  });
};
