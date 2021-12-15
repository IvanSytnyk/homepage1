const resume = document.getElementById('resume');
const nyancat = document.createElement('div');
const avatar = document.getElementById('avatar');

nyancat.innerHTML = `       
    <div class="container">
    <img style="width: 500px;" src="./assets/NyanCat.gif"/>
    </div>
`;

avatar.addEventListener('click', (evt) => { 
    resume.prepend(nyancat);
} );