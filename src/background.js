setInterval(function() {
  chrome.browserAction.setBadgeText({text: "..."});
  let root = getAllAngularRootElements()[0];
  ng.probe(root).componentInstance.backgroundService.load().then((daysToGo) => {
    if(daysToGo) {
      chrome.browserAction.setBadgeText({text: daysToGo.toString()});
    } else {
      chrome.browserAction.setBadgeText({text: ""});
    }
  });  
}, 1000 * 60 * 60 * 24);
