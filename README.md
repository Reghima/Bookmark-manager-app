# Bookmark-manager-app

---

## Stack technique

- Front :
  React.js ,
  Antd

- Backend :
  Node JS ,
  Express JS

- Base de Données :
  MongoDB

## Instructions d'installation du client

1. Pour installer les dependencies du client , Accédez au dossier client "bookmark_client" et lancez cette commande :
   ` npm install`
2. Pour démarrer le client , il suffit de lancer cette commande dans le dossier client :
   ` npm start`

## Instructions d'installation du serveur

1. Pour installer les dependencies du serveur , Accédez au dossier serveur "bookmark_server" et lancez cette commande :
   ` npm install`
2. Créez un nouveau fichier ".env.local" à la racine du dossier et écrire ces lignes :
   `
   PORT=5000
   MONGO_URL=mongodb://127.0.0.1:27017/bookmark

   `

3. Pour démarrer le serveur , il suffit de lancer cette commande dans le dossier serveur :
   ` npm run dev`

## Fonctionnalités de l'application

- Ajouter des bookmark pour les sites vimeo.com et flickr.com avec un lien d'une video ou une photo
- Récupération des propriétés du lien référencé avec le protocole oEmbed
- Lister les bookmark créés dans la base de données dans une liste paginée
- Afficher les détails d'un bookmark
- Ajout de nouveaux mots-clés (formulaire)
- Suppression de mots-clés associés à un favori
