// Простая анимация сердечек при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const heartsContainer = document.getElementById('hearts');

  // Создаём 20 сердечек
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 24 + 16 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    heart.style.zIndex = '1';

    heartsContainer.appendChild(heart);
  }

  // Добавляем CSS-анимацию через JS (чтобы не дублировать в style.css)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Обработка кнопки
  const btn = document.getElementById('loveBtn');
  btn?.addEventListener('click', () => {
    alert('Я знал, что ты меня любишь! 💖\nС Днём святого Валентина!');
    // Можно заменить на confetti или другую анимацию позже
  });
});
