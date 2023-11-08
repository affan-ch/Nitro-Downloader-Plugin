function download() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentURL = tabs[0].url;

        var appURL = "nitro://video?url=" + encodeURIComponent(currentURL);

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: (appURL) => {
                var a = document.createElement('a');
                a.href = appURL;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            },
            args: [appURL]
        });

    });
}

var downloadButton = document.getElementById("DownloadButton");

downloadButton.addEventListener("click", download);