window.addEventListener('load', function() {
  const cursiveText = document.getElementById('cursiveText');
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  
  function revealHeaderFooter() {
    header.classList.remove('hidden');
    footer.classList.remove('hidden');
    
    setTimeout(function() {
      header.style.transform = 'translateY(0)';
      footer.style.transform = 'translateY(0)';
    }, 50); // A small delay to trigger the transition
  }
  
  if (cursiveText) {
    const text = cursiveText.textContent;
    cursiveText.textContent = '';

    let currentChar = 0;
    const duration = 350; // Animation duration in milliseconds
    const frameRate = 240; // Frames per second
    const frameDelay = 50 / frameRate; // Delay between frames in milliseconds

    function animateText() {
      if (currentChar < text.length) {
        cursiveText.textContent += text[currentChar];
        currentChar++;
        setTimeout(animateText, (currentChar === 1 ? duration / 2 : duration / (text.length - 1)));
      } else {
        setTimeout(revealHeaderFooter, 1000); // 1-second delay after the animation ends
      }
    }

    setTimeout(animateText, duration / 2); // Delay the start of the animation by half the duration
  } else {
    header.classList.remove('hidden');
    footer.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const boxHeaders = document.querySelectorAll('.box-header');

  boxHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      const content = header.nextElementSibling;
      content.classList.toggle('show');
    });
  });
});