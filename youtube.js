
const container = document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls');
const button = document.createElement('button');
var fill = "#F1EFEC";
const svgDownloadIcon = `<svg xmlns="http://www.w3.org/2000/svg" stroke="#5B5238" stroke-width="1px" fill="${fill}" height="100%" viewBox="0 -960 960 960" width="100%"><path d="M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z"/></svg>`

button.innerHTML = svgDownloadIcon;
button.id = 'download-button';
button.style.backgroundColor = 'transparent';
button.style.border = 'none';
button.style.outline = 'none';
button.style.cursor = 'pointer';
button.style.width = '38px';
button.style.height = '100%';
button.style.color = '#F1EFEC';
button.style.display = 'inline-block';
button.style.position = 'relative';
button.style.lineHeight = 'inherit';
button.style.marginRight = '6px';

button.onmouseenter = function() {
  fill = "#FFF";
  var svgElement = button.querySelector('svg');
  svgElement.setAttribute('fill', fill);
}

button.onmouseleave = function() {
    button.innerHTML = svgDownloadIcon;
}

const firstChild = container.firstChild;

if (firstChild) {
  container.insertBefore(button, firstChild);
} else {
  container.appendChild(button);
}

button.addEventListener('click', () => {
    var currentURL = window.location.href;

    var appURL = "nitro-downloader://video?url=" + encodeURIComponent(currentURL);

    var a = document.createElement('a');
    a.href = appURL;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
