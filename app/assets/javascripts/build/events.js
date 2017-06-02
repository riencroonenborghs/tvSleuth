var options;

options = {
  periodInMinutes: 1
};

chrome.alarms.clear("tvSleuth");

chrome.alarms.create("tvSleuth", options);

chrome.alarms.onAlarm.addListener((function(_this) {
  return function(alarm) {
    return angular.element("body").scope().BackgroundApp.service.checkAiringTVPrograms();
  };
})(this));
