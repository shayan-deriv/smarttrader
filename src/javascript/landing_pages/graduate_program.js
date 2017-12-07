window.onload = function() {
    toggleMobileMenu();
    window.onresize = checkWidth;

    document.querySelectorAll('.page-scroll').forEach(function(el) {
        el.addEventListener('click', scrollToSection);
    });

    tabWithIndicator();
    tabWithButtons();
};

function scrollToSection(e) {
    if (e) e.preventDefault();
    const target = this.getAttribute('href').substr(1);
    const offset = /who-we-are|page-top/.test(target) ? 70 : 75;
    const to = document.getElementById(target).offsetTop - offset;

    scrollTo(to, 500);
    collapseMenu();
}

function tabWithIndicator() {
    const indicator = document.getElementById('active-tab-indicator');
    const tabs      = document.querySelectorAll('.tab');
    const contents  = document.querySelectorAll('.tab-content > div');
    const numOfTabs = tabs.length;

    indicator.style.width = `${(100 / numOfTabs)}%`;

    tabs.forEach(function(el, index) {
        el.index = index;
        el.addEventListener('click', updateActiveTab);
    });

    contents.forEach(function(el, index) {
        if (index) {
            el.classList.add('invisible');
        }
    });

    function updateActiveTab(e) {
        if (e) e.preventDefault();

        indicator.style.left = `${(100 / numOfTabs) * (this.index)}%`;

        const target = this.querySelector('a').getAttribute('href').substr(1);
        updateTabContent(target);
    }

    function updateTabContent(target) {
        contents.forEach(function(el) {
            el.classList[el.id === target ? 'remove' : 'add']('invisible');
        });
    }
}

function tabWithButtons() {
    const contents   = document.querySelectorAll('#content > div');
    const numOfItems = contents.length;

    contents.forEach(function(el, index) {
       if (index) {
           el.classList.add('invisible');
       }
    });

    let index = 0;
    document.getElementById('next').addEventListener('click', function(e) {
        e.preventDefault();
        updateTabContent(++index);
    });
    document.getElementById('prev').addEventListener('click', function(e) {
        e.preventDefault();
        updateTabContent(--index);
    });

    function updateTabContent(target_index) {
        document.querySelectorAll('#content > div').forEach(function(el, index) {
            const toShow = target_index % numOfItems < 0 ? (target_index % numOfItems) + numOfItems : target_index % numOfItems;
            el.classList[toShow === index ? 'remove' : 'add']('invisible');
        });
    }
}
