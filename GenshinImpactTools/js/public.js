const header = Vue.createApp({});

header.component('header-navbar', {
    template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a href="index.html" class="navbar-brand"><b>原神工具箱</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">主頁</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="artifactScoring.html">聖遺物評分工具</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
});

header.mount("#header");

const footer = Vue.createApp({});

footer.component('footer-custom', {
    template: `
<footer class="footer">
    <h6 class="title">原神工具箱 &copy2022 MAPLELEAF3659</h6>
</footer>`
});

footer.mount('#footer');