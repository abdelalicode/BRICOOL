# BRICOOL

# Énoncé du problème

 Quel problème essayez-vous de résoudre ? S’il existe un document des exigences produit (PRD), il peut s’agir d’un bloc synchronisé du PRD. Créez un lien vers tout autre document pertinent pour comprendre l’historique ou le contexte.

 En raison de la difficulté de trouver le bon maitre-ouvrier pour votre maintenance ou construction , BRICOOL est votre plateforme idéale pour chercher , naviguer et même créer des offres et présenter votre main d’œuvre au clients potentiels .
Si vous êtes un ouvrier qui cherche des appels de travail vous trouveriez facilement des milliers des invitations de travail.

## Objectifs

Plateforme Site web d’offre d’emploi réservé aux travailleur avec compétences manuelles : de la mécanique jusqu’au travaux publiques.

## Non-objectifs

Dashboard de chaque ouvrier pour gérer les offres d’emploi.

# Solution proposée

**Quels sont les changements fondamentaux dans notre modèle de données ?**

Il s’agit de toute modification du schéma de la base de données, ou de toute modification des champs structurés, par exemple une colonne JSON existante.

1. **Plateforme BRICOOL :** Mettre en place une plateforme web conviviale et intuitive, accessible aux artisans et clients potentiels. Assurez-vous que l'interface utilisateur permet une navigation facile et la création d'offres.
2. **Système de recherche avancée :** Implémenter un système de recherche avancée qui permet aux utilisateurs de trouver rapidement le maître-ouvrier adapté à leurs besoins spécifiques. Intégrer des filtres tels que la localisation, les compétences, l'expérience, etc.
3. **Création d'offres :** Permettre aux maîtres-ouvriers de créer des offres attrayantes en fournissant des détails pertinents sur leurs compétences, expériences antérieures, tarifs et disponibilités.
4. **Système de notifications :** Mettre en place un système de notifications pour informer les ouvriers des nouvelles offres correspondant à leurs compétences et disponibilités, ainsi que les clients potentiels des candidatures reçues.
5. **Système de notation et de commentaires :** Intégrer un système de notation et de commentaires pour permettre aux clients de laisser des retours sur les maîtres-ouvriers, et vice versa. Cela renforcera la confiance et la transparence au sein de la communauté.

**Quels sont les principaux changements apportés à l’interface utilisateur ?**

Interface graphique adaptée et responsive à tout appareil, en utilisant Html, Css et Javascript native
    

## LIVRABLES

→ Conception UML: Diagramme de Classe, Diagramme de Séquence, Cas d’utilisation.

→ Conception Interface graphique: Figma

→ Application Web et site web fonctionnel

## TECHNOLOGY

**Backend :**

- un système d'authentification sécurisé.

une base de données pour stocker les informations des utilisateurs, des offres de travail, et des demandes de travail.

- un système de validation pour les demandes de travail et les offres de travail.
- envoyer des notifications par email aux utilisateurs pour confirmer l'inscription et les actions importantes (acceptation ou refus d'une offre, etc.).
- la sécurité des transactions et des données sensibles.
- utiliser le framework Laravel pour le développement du backend.
- le système de routage de Laravel pour gérer les différentes pages et fonctionnalités
- des requêtes SQL efficaces pour récupérer, insérer, mettre à jour et supprimer des données de la base de données.
