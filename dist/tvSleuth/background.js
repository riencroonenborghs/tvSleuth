var load = function() {
  chrome.browserAction.setBadgeText({text: "..."});
  let root = getAllAngularRootElements()[0];
  ng.probe(root).componentInstance.backgroundService.load().then((showsAiring) => {    
    if(showsAiring.total > 0) {
      chrome.browserAction.setBadgeText({text: showsAiring.total.toString()});
      chrome.browserAction.setTitle({title: showsAiring.title});
    } else {
      chrome.browserAction.setBadgeText({text: ""});
      chrome.browserAction.setTitle({title: ""});
    }
  });
}

chrome.browserAction.setBadgeBackgroundColor({color: "#3f51b5"});
setTimeout(load, 1000 * 5);
setInterval(load, 1000 * 60 * 60 * 1);
