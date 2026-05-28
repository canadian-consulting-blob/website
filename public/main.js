/* main.js — OpenGround Consulting
 *
 * Minimal JS: only handles the contact form submission.
 * No frameworks, no dependencies.
 */

(function () {
  'use strict';

  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name    = form.querySelector('[name="name"]').value.trim();
    var email   = form.querySelector('[name="email"]').value.trim();
    var message = form.querySelector('[name="message"]').value.trim();

    /* Basic validation */
    if (!name || !email || !message) {
      showStatus('Please fill in your name, email, and message.', 'error');
      return;
    }

    /* TODO: replace this block with your actual form endpoint (e.g. a mailto:
     * action, a POST to a server-side script, or a service like Formspree).
     * Example fetch call is left here as a starting point.
     *
     *  fetch('/contact', {
     *    method: 'POST',
     *    headers: { 'Content-Type': 'application/json' },
     *    body: JSON.stringify({ name, email, message })
     *  })
     *  .then(function (r) { return r.ok ? showStatus('Message sent.', 'ok') : showStatus('Something went wrong.', 'error'); })
     *  .catch(function ()  { showStatus('Could not send — please email us directly.', 'error'); });
     */

    /* Placeholder response until a real endpoint is wired up */
    showStatus('Thanks ' + name + ' — we will be in touch at ' + email + '.', 'ok');
    form.reset();
  });

  function showStatus(msg, type) {
    var existing = form.querySelector('.form-status');
    if (existing) existing.remove();

    var el = document.createElement('p');
    el.className = 'form-status';
    el.textContent = msg;
    el.style.fontSize   = '0.85rem';
    el.style.marginTop  = '0.25rem';
    el.style.color      = type === 'ok' ? 'var(--green)' : 'var(--amber)';
    form.appendChild(el);
  }

}());
