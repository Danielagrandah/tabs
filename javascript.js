function showTab(tabId) {
    // hide all the divs
    const tabs = document.querySelectorAll('.div-hidden'); // return a NodeList every element with '.div-hidden'
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // show thz div correspondiente al tabId
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'flex';
}