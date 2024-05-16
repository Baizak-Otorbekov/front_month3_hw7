
document.getElementById('preloader').style.display = 'block';

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(item => {
                html += `<h1>Name: ${item.name}</h1>
                             <p>Username: <b>${item.username}</b></p>
                             <p>Email: <b>${item.email}</b></p>
                             <p>ID: <b>${item.id}</b></p>
                             <hr>`;
            });
            document.getElementById('homeWork').innerHTML = html;
            document.getElementById('preloader').style.display = 'none';
        })
        .catch(error => {
            console.error('error:', error);
        });
}, 1500); 










