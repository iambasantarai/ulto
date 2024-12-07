chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: invertPageColors,
  });
});

function invertPageColors() {
  const htmlElement = document.documentElement;
  const filter = htmlElement.style.filter;

  if (filter === "invert(100%) hue-rotate(180deg)") {
    htmlElement.style.filter = "";
    htmlElement.style.transition = "";
  } else {
    htmlElement.style.filter = "invert(100%) hue-rotate(180deg)";
    htmlElement.style.transition = "filter 0.3s ease-in-out";
  }
}
