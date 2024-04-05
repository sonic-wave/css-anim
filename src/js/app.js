const collapsibleBtn = document.querySelector('.collapsible-btn');
const collapsibleContent = document.querySelector('.collapsible-content');

collapsibleBtn.addEventListener('click', () => {
    collapsibleContent.classList.toggle('show');
})