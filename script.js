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
function shareLink(platform) {
  const link = `${window.location.origin}${window.location.pathname}?id=${sessionId}`;
  const encodedLink = encodeURIComponent(link);

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
      break;
    case "whatsapp":
      shareUrl = `https://api.whatsapp.com/send?text=Rejoins-moi ici : ${encodedLink}`;
      break;
    case "instagram":
      alert(
        "Instagram ne supporte pas directement le partage de liens. Vous pouvez copier le lien et le coller dans votre story ou message."
      );
      return; // Pas de redirection pour Instagram
    default:
      alert("Plateforme inconnue.");
      return;
  }

  window.open(shareUrl, "_blank");
}
