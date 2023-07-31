
# :robot: **Bot de /backup by ruwinou & xifi_yt & biggy**

## :pencil: **Description**
Un bot capable de gérer les backups et les bannières de différents serveur ! 
Ce bot est un remade du bot de https://discord.gg/backup

## :gear: **Fonctionnalités**
- système d'ajout de backup et de bannière

## :wrench: **Configuration**

### **Prérequis**
- Discord.js (version 14.11.0)
- mysql (version 2.18.1)
- phpMyAdmin (voir étape instalation)

### **Étapes d'installation**
1. Clone le repository : `git clone https://github.com/Ruwin-dsc/`
2. Installe les dépendances : `npm install`
3. Utilise phpMyAdmin et met le fichier `backupbot.sql` dessus si tu n'as pas phpMyAdmin ou que tu ne sais pas l'utiliser je t'invite à te rendre dans le serveur https://discord.gg/cloudheaven et demander un hébergeur avec phpMyAdmin pour le backupbot C'EST TOTALEMENT GRATUIT !!! Toutefois si t'as d'autre problème je t'invite à te rendre dans le serveur https://discord.gg/xkebY6nsxk ou https://discord.gg/cloudheaven
4. Configure ton fichier de configuration `backupbot.json` avec les informations nécessaires.
5. Lance le bot : `node index.js`

### **Configuration du fichier `config.json`**
```json
{
  "token": "TON_TOKEN_BOT",
  "prefix": "TON_PREFIXE",
  "ownerId": "ID_DU_BUYER",

  "linkbot": "Lien_du_bot",
  "BDD": {
        "host": "HOST",
        "port": "PORT",
        "user": "USER",
        "database": "coinsbot",
        "charset": "utf8mb4"
    }
  
}
```

## :raised_hands: **Contribution**
Si tu souhaites contribuer à ce projet, n'hésite pas à ouvrir une pull request !

## :page_facing_up: **License**
Ce projet est sous license Apache. Voir le fichier `LICENSE` pour plus d'informations.

## **Support**
Serveur Discord: https://discord.gg/xkebY6nsxk & https://discord.gg/cloudheaven
Message Privé: ruwinou ou biggy ou xifi_yt

