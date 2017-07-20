var plusify = require('plusify');

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    place: '',
  }, function(items) {
    document.getElementById('search-box').value = items.place;
  });
}

function mapSearch() {
    var place = document.getElementById('search-box').value || 'Bubble Tea';
    var formatPlace = plusify(place);
    var newURL = "https://www.google.com/maps/search/" + formatPlace;
    chrome.tabs.create({ url: newURL });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('search-button').addEventListener('click', mapSearch);