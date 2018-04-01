# **Projet Fil Rouge** #


<p>
  <img src=".\src\assets\images\titre-fil-rouge.png"/>
</p>
Conçu et réalisé par l'équipe GGSF (Gérôme Gilles Stéphan Frédéric)

----------

*Partie Front*

**Pré-requis :**

    NPM : 5.7.1
    NodeJS : 8.9.1
    Angular CLI : 1.6.8

**Mode opératoire :**

1 - Installer NodeJS  
2 - Installer NPM  
3 - Installer Angular CLI  
4 - Installer Karma et Jasmine, pour executer les tests  
5 - Installer les différents packages dans la console de l'IDE choisi (ici Visual Studio Code) et chercher des mises à jour  
6 - Importer le projet sous l'IDE et installer les dépendances, avec la commande NPM install

----------

Personnellement, j'ai particulièrement travaillé sur la partie UML, design (mokup, CSS) et "armes" du projet.


**Attention** : les fichiers notés en *camelcase* pour les attributs et composants deviennent des fichiers en *kebabcase* pour les propriétés et les directives !  

	¤ par exemple, monBeauFichier devient mon-beau-fichier

----------

**Créer la partie front de l'application** :

   - créer un nouveau projet : **ng new 'nom du projet'**
    
   - créer des composants : **ng generate componant 'nom du componant'**
     (ou **ng g c 'nom du componant'**)
    
   - selon le modèle MVC (Modèle Vue Controleur), ou plutôt MVVM, l'architecture 
      d'Angular se décompose ainsi :
    
   => *services* : utilisés pour injecter du code (signalé par @Injectable()) 
       dans différents composants, et qui sera utilsable (à condition d'importer
       le service dans chaque composant). On le crée avec ng g s 'nom du service'

		¤ weapon.service.ts : va répartir les différentes méthodes dans les autres
          composants (ex : la méthode createWeapon(), que l'on retrouve dans le onSubmit()
          du form-weapon.component.ts, va permettre de créer une nouvelle arme)
    
   => *app-module* : c'est le module racine, qui se divise en 2 parties :
    
   ~ les imports : peut importer des librairies externes, d'autres modules, ...
     	  pour les rendre utilisable dans tout le projet
    
		¤ "import { FormWeaponComponent } from './modules/weapon/form-weapon/form-weapon.component';" :
	      importe le fichier, permettant de créer ou modifier une arme

   ~ les décorateurs : interviennent dans l'injection du code et la compilation
		  des templates

		¤ FormWeaponComponent : cette création permet aussi l'import automatique du fichier dans la partie "import"
    
   => *app-routing* : permet de charger et de configurer les routes dans les différents
       modules du projet
    
		¤ path: 'weapons/:id', component: DetailWeaponComponent : la sélection d'une arme précise (id) enverra sur le composant 
		"detail", permettant d'afficher sa fiche détaillée

   => *composants "classique"* : typiquement composés de 4 fichiers :  
    
   ~ .html : architecture du composant  
   ~ .css : habillage du composant (souvent vide, car remplacé par le style.css à la racine)  
   ~ .ts : contient les méthodes et liens avec les autres composants  
   ~ .spec.ts : utilisé pour lesv tests unitaires du module

		¤ table-weapons : contient ces 4 types de fichiers, permettant (grâce au .html
		  et .ts) d'afficher le tableau des armes, en fonction des champs importés de la table

----------
**Tester le code** :  

Pour réaliser des tests unitaires avec Angular, on utilise Karma et Jasmine :  

  - *Karma* : c'est un outil de terminal JavaScript qui permet le lancement de navigateurs web.  
    Une fois le navigateur lancé, Karma y charge le code de l’application et exécute vos tests.

  - *Jasmine* : c'est un framework BDD (Behavior Driven Development) appliqué aux tests et lisible par tous.  
    Il fonctionne avec Chrome.  
    
On utilise ensuite le fichier .spec.ts, créé spécialement pour réaliser un test. Pour ça, on entre dans la console de commande  
de VS Code **ng test**, qui compilera l'application et l'executera via Karma. Le résultat s'affichera dans la console de l'IDE,  
mais aussi dans le navigateur grâce à Jasmine. Si tout est OK, le test a réussi, sinon il faudra chercher la cause de l'échec  
et modifier le fichier en conséquence.  

----------

    
Pour démarrer l'application, il suffira de se placer sur le dossier du projet, de l'ouvrir  dans la console de l'IDE et de taper **ng serve**. Ensuitr, il faudra se connecter (grâce à un navigateur) à l'adresse **http://localhost:4200**. Cela va ainsi permettre de visualiser le fonctionnement du projet de manière complète, mais en version locale.
