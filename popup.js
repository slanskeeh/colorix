// getting our buttons elements
const pickColorButton = document.getElementById("colorPick");
const pickFontButton = document.getElementById("fontPick");

// checking if click event works
pickFontButton.addEventListener("click", () => {
  alert("FONT CLICKED");
});

// checking if we interact only with active tab
pickColorButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    tab
      ? alert(`ID of our active tab is: ${tab.id}`)
      : alert("There are no active tabs");
  });
});
