var plusify = require('plusify');

function mapSearch(place) {
	var formatPlace = plusify(place);
	var newURL = "https://www.google.com/maps/search/" + formatPlace;
	chrome.tabs.create({ url: newURL });
}

chrome.browserAction.onClicked.addListener(function(activeTab)
{
	chrome.storage.sync.get({
    	place: '',
  	}, function(items) {
      if (items.place === '') {
        items.place = 'Bubble Tea';
      }
      
    	var place = plusify(items.place);
    	mapSearch(place);
  	});

});

// Context Menu

function onContextMenuClicked(info,tab) {
  mapSearch(info.selectionText);           
}

var contextMenuId = chrome.contextMenus.create({
  title: "Find near me ʺ%sʺ", 
  contexts:["selection"], 
  onclick: onContextMenuClicked,
});