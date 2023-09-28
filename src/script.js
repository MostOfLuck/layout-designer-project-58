const cards = document.querySelectorAll('.card1');

cards.forEach((card) => {
  const link = card.querySelector('a');

  link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Сработал клик на ссылке');
    window.location.href = '#cognitive-distortion-1';
  });
});
