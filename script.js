function generateLink() {
  const id = 'session-' + Math.random().toString(36).substring(2, 8);
  const sessionURL = `session.html?id=${id}`;

  const linkContainer = document.getElementById('link-container');
  const link = document.getElementById('link');

  link.href = sessionURL;
  link.innerText = window.location.origin + '/' + sessionURL;
  linkContainer.classList.remove('hidden');
}

function copyLink() {
  const linkElement = document.getElementById("link");
  const text = linkElement.href;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Lien copié dans le presse-papiers !");
    })
    .catch(() => {
      alert("Erreur lors de la copie du lien.");
    });
}
function shareOnWhatsApp() {
  const link = `${window.location.origin}${window.location.pathname}?id=${sessionId}`;
  const message = `Rejoignez-moi sur Mi-Chemin ! Voici le lien de la session : ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

function shareOnFacebook() {
  const link = `${window.location.origin}${window.location.pathname}?id=${sessionId}`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
  window.open(facebookURL, "_blank");
}

function copyLink() {
  const link = `${window.location.origin}${window.location.pathname}?id=${sessionId}`;
  navigator.clipboard.writeText(link).then(() => {
    alert("Lien copié dans le presse-papiers !");
  });
}
