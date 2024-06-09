chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.sidePanel.setOptions({
    path: 'sidepanel.html',
    enabled: true
});

