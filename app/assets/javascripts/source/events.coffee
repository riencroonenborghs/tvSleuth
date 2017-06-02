options = 
  periodInMinutes: 1
chrome.alarms.clear "tvSleuth"
chrome.alarms.create "tvSleuth", options
chrome.alarms.onAlarm.addListener (alarm) =>
  angular.element("body").scope().BackgroundApp.service.checkAiringTVPrograms()