function filterMenu(category) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      item.style.display = item.classList.contains(category) ? 'block' : 'none';
    }
  });
}
