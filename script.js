const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
});

revealItems.forEach((item) => observer.observe(item));

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const resumeModal = document.getElementById('resumeModal');
const resumeButtons = document.querySelectorAll('[data-open-resume]');
const closeButtons = document.querySelectorAll('[data-close-resume]');

const openResumeModal = () => {
  if (resumeModal) {
    resumeModal.classList.add('is-open');
    resumeModal.setAttribute('aria-hidden', 'false');
  }
};

const closeResumeModal = () => {
  if (resumeModal) {
    resumeModal.classList.remove('is-open');
    resumeModal.setAttribute('aria-hidden', 'true');
  }
};

resumeButtons.forEach((button) => {
  button.addEventListener('click', openResumeModal);
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeResumeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && resumeModal && resumeModal.classList.contains('is-open')) {
    closeResumeModal();
  }
});
