// Configuration de la connexion à la base de données (Supabase)
// 1. Remplace l'URL et la clé par celles de ton projet Supabase (Project Settings > API)
// 2. Mets ton email (celui de ton compte) dans "admins" : tu seras administrateur
// Ne mets JAMAIS la clé "service_role" ici, seulement la clé "anon public".
window.PC13 = {
  url: "https://TON-PROJET.supabase.co",
  key: "TA-CLE-ANON-PUBLIQUE",
  admins: ["ton-email@exemple.fr"]
};
