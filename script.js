
// Function to generate the session link
function generateLink() {
  sessionId = 'session-' + Math.random().toString(36).substring(2, 8); // Generate session ID
  const sessionURL = `session.html?id=${sessionId}`;

  const linkContainer = document.getElementById('link-container');
  const link = document.getElementById('link');

  link.href = sessionURL;
  link.innerText = window.location.origin + '/' + sessionURL;
  linkContainer.classList.remove('hidden');
}

// Function to copy the session link to the clipboard
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

// Function to share the session link via WhatsApp
function shareOnWhatsApp() {
  if (!sessionId) {
    alert("Veuillez générer un lien avant de partager.");
    return;
  }
  const link = `${window.location.origin}/session.html?id=${sessionId}`;
  const message = `Rejoignez-moi sur Mi-Chemin ! Voici le lien de la session : ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

// Function to share the session link via Facebook
function shareOnFacebook() {
  if (!sessionId) {
    alert("Veuillez générer un lien avant de partager.");
    return;
  }
  const link = `${window.location.origin}/session.html?id=${sessionId}`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
  window.open(facebookURL, "_blank");
}
