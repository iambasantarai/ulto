chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: invertPageColors,
  });
});

function invertPageColors() {
    document.body.style.filter = "invert(100%)";
}
