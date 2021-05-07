console.log("Move Onshape Tab Manager Button is Active");
let re = /onshape.com\/documents\//

let moveButton = () => {
    try {
        tabManagerButton = document.getElementsByClassName('os-panel-select-bottom-buttons')[0].getElementsByClassName('os-panel-selector-button')[0]
        if (tabManagerButton != undefined) {
            document.getElementsByClassName('os-panel-select-top-buttons')[0].prepend(tabManagerButton)
            console.log('Tab Manager Button Moved')
        }
    } catch (err) {
        console.log('Error when Moving button')
        return
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // listen for messages sent from background.js
        if (request.message === 'url_changed' && request.url.match(re)) {
            // console.log(request.url) // new url is now in content scripts!
            setTimeout(moveButton(), 500);
        }
    });

