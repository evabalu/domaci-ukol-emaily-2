console.log ('funguju!');

const displayEmail = (emails, elementId) => {
  document.getElementById (elementId).innerHTML = emails
    .map (email => {
      let iconClass = 'closed';
      if (elementId === 'read') {
        iconClass = 'opened';
      }

      return `
  <div class="email">
  <div class="email__head">
    <div class="email__icon email__icon--closed"></div>
    <div class="email__info">
      <div class="email__sender">${email.sender.name}</div>
      <div class="email__subject">${email.subject}</div>
    </div>
    <div class="email__time">${email.time}</div>
  </div>
  <div class="email__body"></div>
  </div>
  `;
    })
    .join ('');
};

fetch (`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then (response => response.json ())
  .then (data => displayEmail (data.emails, 'unread'));

fetch (`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then (response => response.json ())
  .then (data => displayEmail (data.emails, 'read'));
