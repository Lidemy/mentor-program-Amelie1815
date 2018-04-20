// Include data for accessing Bitly APIs

const accessToken = '43030348ac3e94a4a9a6cf18a96f057b9acd378d';
const url = 'https://api-ssl.bitly.com';

// Page elements

const inputURL = document.querySelector('.url-input').value;
const encodedInputURL = encodeURIComponent(inputURL);
const shortenButton = document.querySelector('.shorten-button');
const responseField = document.querySelector('.response-url');

// Call function on click shortenButton

shortenButton.addEventListener('click', function(){
	
	const urlWithParameters = url + '/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodedInputURL;
  
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      responseField.innerText(xhr.response.data.url);
    } else {
			console.log('error');
		}
  };
  xhr.open('GET', urlWithParameters);
  xhr.send();
});