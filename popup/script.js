function download() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentURL = tabs[0].url;

        var appURL = "nitro-downloader://video?url=" + encodeURIComponent(currentURL);

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

var directDownloadButton = document.getElementById("directDownloadButton");

directDownloadButton.addEventListener("click", download);