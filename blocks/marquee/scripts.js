const init = (element) => {
    const bg = element.querySelector(':scope > div:first-of-type > div');
    bg.classList.add('background');
    const bgImg = bg.querySelector(':scope img');
    if (!bgImg) {
        bg.style.display = 'none';
        const bgColor = bg.textContent;
        element.style.background = bgColor;
    }
    const content = element.querySelector(':scope > div:last-of-type');
    if (element.classList.contains('contained')) {
        content.classList.add('container');
    }
    content.querySelector(':scope > div:first-of-type').classList.add('text');
    content.querySelector(':scope > div:last-of-type').classList.add('image');
};

export default init;
