const cycloneLogoButton = document.getElementById('cyclone-logo-button');
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

cycloneLogoButton.addEventListener('click', function () {
  const cycloneAccordionContainer = this.parentNode.querySelector(
    '#cyclone-accordion-container'
  );
  const cycloneAccordion = document.getElementById('cyclone-accordion');
  const cycloneAccordionCloseButton = document.getElementById(
    'cyclone-accordion-close-button'
  );

  this.classList.add('clicked');
  cycloneAccordionContainer.classList.add('active');

  // setTimeout(() => {
  //   console.log(this);
  //   this.style.transition = 'none';
  //   this.style.visibility = 'hidden';
  // }, 1000);

  cycloneAccordionCloseButton.addEventListener('click', function () {
    cycloneLogoButton.classList.remove('clicked');
    this.parentNode.classList.remove('active');
    // cycloneLogoButton.style.visibility = 'visible';
  });

  cycloneAccordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordion-panel');

    if (!activePanel) return;
    toggleAccordion(activePanel);
  });
});

// audio.play();
