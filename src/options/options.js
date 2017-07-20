// Saves options to chrome.storage.sync.
function save_options() {
  var place = document.getElementById('place').value;
  chrome.storage.sync.set({
    place: place,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Lock and loaded.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    place: '',
  }, function(items) {
    document.getElementById('place').value = items.place;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);