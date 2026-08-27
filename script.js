const menuItems = {
	coffee: [
		['House espresso', 'Dark chocolate, toasted almond', '$3.50'],
		['Flat white', 'Velvety, double shot, whole milk', '$5.00'],
		['Morrow filter', 'Rotating single origin, brewed fresh', '$4.50'],
		['Oat milk latte', 'Espresso, oat milk, a touch of honey', '$5.50']
	],
	food: [
		['Morning bun', 'Cinnamon, brown sugar, orange zest', '$4.50'],
		['Sourdough toast', 'Cultured butter, jam, sea salt', '$6.00'],
		['Green bowl', 'Avocado, egg, herbs, chili crisp', '$12.00'],
		['Morrow breakfast', 'Eggs, toast, greens, house beans', '$14.00']
	],
	cold: [
		['Iced oat latte', 'Espresso, oat milk, plenty of ice', '$5.50'],
		['Seasonal tonic', 'Cold brew, citrus, sparkling water', '$6.00'],
		['Chocolate rye cookie', 'Dark chocolate, rye, sea salt', '$3.50'],
		['Strawberry cream', 'Seasonal berries, vanilla, cream', '$7.00']
	]
};

const menuList = document.querySelector('[data-menu-list]');
const tabs = document.querySelectorAll('.tab');

function renderMenu(category) {
	menuList.innerHTML = menuItems[category]
    .map(([name, description, price]) => `
		<article class="menu-item">
			<div><h3>${name}</h3><p>${description}</p></div>
			<span class="menu-price">${price}</span>
		</article>
	`).join('');
}

tabs.forEach((tab) => tab.addEventListener('click', () => {
	tabs.forEach((item) => item.classList.remove('active'));
	tab.classList.add('active');
	renderMenu(tab.dataset.category);
}));

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
	const isOpen = navigation.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
	menuToggle.textContent = isOpen ? '×' : '☰';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
	navigation.classList.remove('open');
	menuToggle.setAttribute('aria-expanded', 'false');
	menuToggle.textContent = '☰';
}));

renderMenu('coffee');
