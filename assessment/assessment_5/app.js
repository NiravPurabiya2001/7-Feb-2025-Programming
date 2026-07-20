document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('linkForm');
    const urlInput = document.getElementById('linkUrl');
    const urlError = document.getElementById('urlError');
    const adminLinkList = document.getElementById('adminLinkList');
    const previewLinkList = document.getElementById('previewLinkList');
    const themeToggle = document.getElementById('themeToggle');


    const initTheme = () => {
        const savedTheme = localStorage.getItem('bioTheme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    };

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('bioTheme', next);
        themeToggle.textContent = next === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    });

    initTheme();


    let links = JSON.parse(localStorage.getItem('bioLinks')) || [];

    const saveLinks = () => {
        localStorage.setItem('bioLinks', JSON.stringify(links));
    };

    const renderLinks = () => {
        adminLinkList.innerHTML = '';
        previewLinkList.innerHTML = '';

        links.forEach((link, index) => {

            const div = document.createElement('div');
            div.className = 'admin-link-item';
            div.innerHTML = `
                <div>
                    <strong>${link.title}</strong><br>
                    <small class="text-muted">${link.url}</small>
                </div>
                <button class="delete-btn" data-index="${index}">&times;</button>
            `;
            adminLinkList.appendChild(div);


            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'preview-link-btn';
            a.textContent = link.title;
            previewLinkList.appendChild(a);
        });
    };

    renderLinks();


    const isValidUrl = (string) => {
        try {
            const url = new URL(string);
            return url.protocol === "http:" || url.protocol === "https:";
        } catch (_) {
            return false;
        }
    };

    urlInput.addEventListener('input', () => {
        if (!isValidUrl(urlInput.value) && urlInput.value.length > 0) {
            urlError.style.display = 'block';
        } else {
            urlError.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('linkTitle').value.trim();
        const url = urlInput.value.trim();

        if (!isValidUrl(url)) {
            urlError.style.display = 'block';
            return;
        }

        links.push({ title, url });
        saveLinks();
        renderLinks();
        form.reset();
    });


    adminLinkList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            links.splice(index, 1);
            saveLinks();
            renderLinks();
        }
    });
});
