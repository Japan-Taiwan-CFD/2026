(function () {
  const url = (window.WORKSHOP_CONFIG || {}).registrationFormUrl || '';
  const isGoogleForm = /^https:\/\/(?:forms\.gle\/|(?:docs|forms)\.google\.com\/forms\/)/i.test(url);
  if (!isGoogleForm) return;
  document.querySelectorAll('[data-registration-link]').forEach(function (el) {
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.hidden = false;
  });
  document.querySelectorAll('[data-registration-pending]').forEach(function (el) {
    el.hidden = true;
  });
})();
