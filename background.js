chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (activeInfo.tabId === tabId && changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
            message: 'url_changed',
            url: changeInfo.url
          })
      }
    })
  })