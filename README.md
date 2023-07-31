
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
1. Clone le repository : `https://github.com/Ruwin-dsc/bot-backup-banner.git`
2. Installe les dépendances : `npm install`
3. Utilise phpMyAdmin et met le fichier `backupbot.sql` dessus si tu n'as pas phpMyAdmin ou que tu ne sais pas l'utiliser je t'invite à te rendre dans le serveur https://discord.gg/cloudheaven et demander un hébergeur avec phpMyAdmin pour le backupbot C'EST TOTALEMENT GRATUIT !!! Toutefois si t'as d'autre problème je t'invite à te rendre dans le serveur https://discord.gg/xkebY6nsxk ou https://discord.gg/cloudheaven
4. Configure ton fichier de configuration `config.json` avec les informations nécessaires.
5. Lance le bot : `node index.js`

### **Configuration du fichier `config.json`**
```json
{
    "token": "VOTRE TOKEN",
    "ownerId": ["7VOTRE ID"],
    "prefix": "VOTRE PREFIX", 
    "channelIdForBackup": "ID DE SALON POUR VOS BACKUP",
    "channelIdForbanner": "ID DE SALON POUR VOS BANNIERES",
    "clients": {
        "name": "Backup Remade by ruwinou & xifi_yt & biggy",
        "logo": "https://images-ext-1.discordapp.net/external/PidUutTGrD3gOXhulBlt7u759MFBv81KZqZuH9R3A9U/https/cdn.discordapp.com/avatars/1132275253435957300/9482cad30d38e82ca37bc8a99f25c6b8.webp?width=281&height=281",
        "embedColor": "White"
    },

    "linkbot": "LA BAH TU METS LE LIEN DU BOT oe ça va servir à rien c juste pour le style", 
        "BDD": {
        "note": "si tu ne comprend pas ce qu'il faut faire je te coneille d'aller voir le readme du github ou rejoindre le support https://discord.gg/zcN3sB5KSv",
        "host": "",     
        "user": "VOTRE USER",
        "password": "OPTIONNEL SI VOUS ETES EN LOCALHOST SUPPRIMEZ CETTE LIGNE",
        "database": "VOTRE NOM DE DB",
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

