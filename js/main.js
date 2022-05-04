const navigation = document.querySelector('.filter-nav');
const cards = document.querySelectorAll('.filter-content__item');

navigation.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return false
    const selectorName = e.target.dataset.filter;
    cards.forEach(elem => {
        !elem.classList.contains(`filter-content__item--${selectorName}`) && selectorName !== 'all' ? elem.classList.add('hide') : elem.classList.remove('hide');
    });
});
