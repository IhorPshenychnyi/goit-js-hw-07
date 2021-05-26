
const categories = document.querySelectorAll('.item');

console.log(`В списке ${ categories.length } категории.`);

categories.forEach(el => {
    const titleEl = el.querySelector('h2').textContent;
    console.log('Категория:', titleEl);

    const itemEl = el.querySelectorAll('li').length;
    console.log('Количество элементов:', itemEl);
}
)



