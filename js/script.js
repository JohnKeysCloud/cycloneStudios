const cycloneLogoButton = document.getElementById('cyclone-logo-button');
const cycloneAccordionContainer = document.getElementById(
  'cyclone-accordion-container'
);
const cycloneAccordion = document.getElementById('cyclone-accordion');
const cycloneAccordionCloseButton = document.getElementById(
  'cyclone-accordion-close-button'
);
const audio = document.querySelector('audio');

function toggleAccordion(panelToActivate) {
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

cycloneLogoButton.addEventListener('click', () => {
  cycloneAccordionCloseButton.addEventListener('click', () => {
    cycloneAccordionContainer.style.visibility = 'hidden';
    cycloneAccordionContainer.style.opacity = 0;
    cycloneAccordionContainer.style.transform =
      'translate(-50%, -50%) scale(0)';

    cycloneLogoButton.style.animationPlayState = 'running';
    cycloneLogoButton.style.opacity = 1;
    cycloneLogoButton.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  cycloneLogoButton.style.animationPlayState = 'paused';
  cycloneLogoButton.style.opacity = 0;
  cycloneLogoButton.style.transform = 'translate(-50%, -50%) scale(0)';

  cycloneAccordionContainer.style.visibility = 'visible';
  cycloneAccordionContainer.style.opacity = 1;
  cycloneAccordionContainer.style.transform = 'translate(-50%, -50%) scale(1)';
});

cycloneAccordion.addEventListener('click', (e) => {
  const activePanel = e.target.closest('.accordion-panel');

  if (!activePanel) return;
  toggleAccordion(activePanel);
});

// audio.play();
