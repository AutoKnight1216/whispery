function lvl4Check() {
    const form = document.getElementById('level4Form');
    const formData = new FormData(form);
    const input = String(formData.get('level4')).replaceAll(' ', '');

    fetch('/check-level4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input })
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    });
}
// haha no more cheating
