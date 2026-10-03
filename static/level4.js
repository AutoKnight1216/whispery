function lvl4Check() {
    const form = document.getElementById('level4Form');

    const formData = new FormData(form);
    const input = String(formData.get('level4')).replaceAll(' ', '');

    fetch('/check-level4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: input })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/jdkdjkd/nig';
        } else {
            console.log('FAILURE.');
        }
    });
}

// comment
