Mon-projet
Nom du Projet : Site de Voyage

    Application Backoffice de gestion réalisée dans le cadre du module Dévelopement web.

🔗 Liens Importants

    APPLICATION DÉPLOYÉE (Live Demo) : CLIQUEZ ICI POUR VOIR LE SITE
    Repository GitHub : Lien vers ce repo

👥 Membres de l'Équipe

Nom du Groupe : [HHH]
Prénom & Nom 	Rôle / Tâches principales 	Lien Github
Haytham Laouini 		@haythamlaouini-alt
Hajar Meskaoui 		@Hajar2085
Hajar El moutiou 		
📝 Thème Choisi

    Thème : site de voyage
    Description : Votre guide pour des voyages inoubliables.

✅ État d'Avancement (Checklist)
Fonctionnalités Principales

    CRUD 1 : Utilisateurs (Create, Read, Update, Delete)
    → (id_utilisateur, nom, email, mot_de_passe)
    CRUD 2 : Destinations (Create, Read, Update, Delete)
    → (id_destination, nom, pays, ville , description,prix_moyen)
    CRUD 3 :Séjours (Create, Read, Update, Delete)
    → (id_voyage, titre, id_destination, prix, date_depart, date_retour)
     CRUD 4 : Réservations (Create, Read, Update, Delete)
    → (id_reservation, date_reservation, nombre_personnes, prix_total, mode_paiement, id_utilisateur, id_voyage)
    CRUD 5 : Avis  (Create, Read, Update, Delete)
    → (id_avis, note, commentaire, date_avis, id_utilisateur, id_voyage)
    Recherche & Filtres dans les tableaux :
    Recherche par destination, prix, dates
    Filtres par pays, budget, durée, note
    Pagination

Dashboard & Data

    KPIs : Cartes avec chiffres clés (Total utilisateurs, revenus, etc.)
    Chart 1 : [Type, ex: Pie Chart]
    Chart 2 : [Type, ex: Bar Chart]
    Chart 3 : [Type]
    Chart 4 : [Type]
    Chart 5 : [Type]

Technique & Bonus

    Export : (PDF ou CSV)
    Architecture : Code organisé sans Framework (Vanilla JS)
    Design : Interface Responsive (Mobile/Tablette)

🛠 Stack Technique

    HTML5 / CSS3 (Framework CSS utilisé : Bootstrap / Tailwind / Autre ?)
    JavaScript (ES6+) (Vanilla JS obligatoire)
    Bibliothèques JS utilisées : (ex: Chart.js, Faker.js, jsPDF, Lodash...)

APIs Utilisées

    Source des données : [ex: JSONPlaceholder, Mockaroo, API locale...]
        Endpoint 1 : https://api.emple.com/users
        Endpoint 2 : ...

⚙️ Installation Locale

Pour lancer le projet localement :

    Cloner le repo :

    git clone https://github.com/votre-user/votre-repo.git

Ouvrir le dossier :

cd votre-dossier

    Lancer l'application :
        Ouvrez simplement index.html dans votre navigateur.
        OU utilisez Live Server (VS Code Extension).

📸 Captures d'écran (Optionnel)
Initialiser le README
