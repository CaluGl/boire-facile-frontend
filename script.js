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
