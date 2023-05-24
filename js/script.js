const cycloneLogoButton = document.getElementById('cyclone-logo-button');
const cycloneCursor = document.getElementById('cyclone-cursor');
const audio = document.querySelector('audio');
const timeCapsule = document.getElementById('time-capsule');

function adjustTime() {
  const time = new Date().toLocaleTimeString();
  const timeElement = document.querySelector('time');
  timeElement.textContent = time;
}

function switchAccordionPanel(panelToActivate) {
  const buttons =
    panelToActivate.parentElement.querySelectorAll('.accordion-trigger');
  const contents =
    panelToActivate.parentElement.querySelectorAll('.accordion-content');

  buttons.forEach((button) => {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', false);
    }
    panelToActivate
      .querySelector('.accordion-trigger')
      .setAttribute('aria-expanded', true);
  });

  contents.forEach((content) => {
    if (content.getAttribute('aria-hidden') === 'false') {
      content.setAttribute('aria-hidden', true);
    }

    panelToActivate
      .querySelector('.accordion-content')
      .setAttribute('aria-hidden', false);
  });
}

function showAccordion() {
  const cycloneAccordionContainer = this.parentNode.querySelector(
    '#cyclone-accordion-container'
  );
  const cycloneAccordion = document.getElementById('cyclone-accordion');
  const cycloneAccordionCloseButton = document.getElementById(
    'cyclone-accordion-close-button'
  );

  this.classList.add('clicked');
  cycloneAccordionContainer.classList.add('active');

  cycloneAccordionCloseButton.addEventListener('click', function () {
    cycloneLogoButton.classList.remove('clicked');
    this.parentNode.classList.remove('active');
  });

  cycloneAccordion.addEventListener('click', (e) => {
    const clickedPanel = e.target.closest('.accordion-panel');
    
    if (!clickedPanel) return;
    switchAccordionPanel(clickedPanel);
  });
}

function moveCursor(e) {
  if (!cycloneCursor.classList.contains('no-cursor-element')) return;
  const cSize = cycloneCursor.getBoundingClientRect().width;
  const mouseX = e.clientX - cSize / 2;
  const mouseY = e.clientY - cSize / 2;

  cycloneCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

function showCursor() {
  cycloneCursor.classList.remove('hidden');
}

function hideCursor() {
  cycloneCursor.classList.add('hidden');
}

cycloneLogoButton.addEventListener('click', showAccordion);
document.addEventListener('mousemove', moveCursor);
document.addEventListener('mouseenter', showCursor);
document.addEventListener('mouseleave', hideCursor);

// audio.play();
setInterval(adjustTime, 1000);
adjustTime();
