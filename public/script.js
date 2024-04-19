document.getElementById('urlForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const response = await fetch('/tiny/makemeshort', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullURL: urlInput })
    });
    const data = await response.json();
    const resultDiv = document.getElementById('shortUrl');
    if(data.shortURL) {
        resultDiv.innerHTML = `Shortened URL: <a href="${location.origin}/tiny/${data.shortURL}" target="_blank">${location.origin}/tiny/${data.shortURL}</a>`;
    } else {
        resultDiv.textContent = 'Error shortening URL. Please try again.';
    }
});
