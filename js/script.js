const cycloneLogoButton = document.getElementById('cyclone-logo-button');
const audio = document.querySelector('audio'); 

function adjustTime() {
	const time = new Date().toLocaleTimeString();
	const timeElement = document.querySelector('time');
	timeElement.textContent = time;
}

setInterval(adjustTime, 1000);
adjustTime();

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
    const activePanel = e.target.closest('.accordion-panel');

    if (!activePanel) return;
    switchAccordionPanel(activePanel);
  });
}



cycloneLogoButton.addEventListener('click', showAccordion);

// audio.play();
