// Simplify querySelector
var q = (selecror) => {
    return document.querySelector(selecror);
};

// Global variable
var resp; // 原本放在 getStreamsFromAPI() 中，出錯。

getStreamsFromAPI(function(){

    // Show the first stream
    const stream = q('.stream-box');
    showStreams(stream, 0);

    // Append streams
    for (let i = 1; i < 20; i++) {
        let newStreamBox = stream.cloneNode(true);
        showStreams(newStreamBox, i);
        q('.container').appendChild(newStreamBox);
    };
});

function getStreamsFromAPI(callback) { // Callback function 似乎不能用 arrow function 改寫。

    const xhr=  new XMLHttpRequest();
    const url = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends';

    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    xhr.setRequestHeader('Client-ID', 'ncmihnqjyl674x3e0ohj35nh5gbubp');

    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Code to execute with response
            resp = xhr.response;
            console.log(resp);
            callback(resp);
        };
    };
    xhr.send();
};

const showStreams = (stream, n) => {
    // Channel url
    stream.firstElementChild.setAttribute('href', resp.streams[n].channel.url);
    // Preview image
    stream.firstElementChild.firstElementChild.firstElementChild.setAttribute('src', resp.streams[n].preview.medium);
    // Channel logo
    stream.firstElementChild.lastElementChild.firstElementChild.firstElementChild.setAttribute('src', resp.streams[n].channel.logo);
    // Channel status
    stream.firstElementChild.lastElementChild.lastElementChild.firstElementChild.innerText = resp.streams[n].channel.status;
    // Channel display name
    stream.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerText = resp.streams[n].channel.display_name;
};
