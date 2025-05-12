
// Function to generate the session link
function generateLink() {
      const sessionId = 'session-' + Math.random().toString(36).substring(2, 8);
        const sessionURL = `session.html?id=${sessionId}`;
        
        // Copie dans le presse-papiers
        navigator.clipboard.writeText(window.location.origin + '/' + sessionURL)
          .then(() => {
            // Ouverture dans un nouvel onglet après la copie
            window.open(sessionURL, '_blank');
          })
          .catch(() => {
            alert("Erreur de copie - le lien s'ouvre quand même");
            window.open(sessionURL, '_blank');
          });
      }

// Function to share the session link via WhatsApp
function shareOnWhatsApp() {
  if (!sessionId) {
    alert("Veuillez générer un lien avant de partager.");
    return;
  }
  const link = `${window.location.origin}/session.html?id=${sessionId}`;
  const message = `Beuverie ! Voici le lien de la session : ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

// Function to share the session link via Facebook
function shareOnFacebook() {
  const link = `${window.location.origin}${window.location.pathname}?id=${sessionId}`;
  const message = `Rejoignez-moi sur Mi-Chemin ! Voici le lien de la session : ${link}`;
  const messengerURL = `https://www.facebook.com/messages/t/?text=${encodeURIComponent(message)}`;
  window.open(messengerURL, "_blank");
}
