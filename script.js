// script.js
let sessionId = new URLSearchParams(window.location.search).get('id');

// Fonction d'autosauvegarde améliorée
async function autoSaveParticipants() {
  if (!sessionId) return;

  const participants = Array.from(document.querySelectorAll('#addresses .flex'))
    .map(row => ({
      name: row.querySelector("input[data-type='name']").value.trim(),
      address: row.querySelector("input[data-type='address']").value.trim()
    }))
    .filter(p => p.name || p.address);

  try {
    await fetch('https://boire-facile-api.onrender.com/save_participants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, participants })
    });
  } catch (error) {
    console.error('Erreur autosave:', error);
  }
}

// Débounce optimisé
const debounceAutoSave = debounce(autoSaveParticipants, 300);

// Génération de lien avec création de session
async function generateLink() {
  sessionId = 'session-' + Math.random().toString(36).substring(2, 8);
  
  try {
    // Création initiale de la session
    await fetch('https://boire-facile-api.onrender.com/create_session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId })
    });

    const sessionURL = `session.html?id=${sessionId}`;
    const fullURL = `${window.location.origin}/${sessionURL}`;

    await navigator.clipboard.writeText(fullURL);
    window.open(sessionURL, '_blank');
  } catch (error) {
    alert("Erreur de création de session");
    console.error(error);
  }
}

// Partage WhatsApp
function shareOnWhatsApp() {
  const link = `${window.location.origin}/session.html?id=${sessionId}`;
  const message = `🍻 Beuverie organisée! Lien de session: ${link}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
}

// Partage Facebook
function shareOnFacebook() {
  const link = `${window.location.origin}/session.html?id=${sessionId}`;
  const message = `🗺 Trouvons le meilleur bar! Lien de session: ${link}`;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(message)}`, '_blank');
}

// Fonction debounce générique
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Écouteurs d'événements pour l'autosave
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', debounceAutoSave);
  });
});
