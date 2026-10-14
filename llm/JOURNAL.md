# Journal de confrontation au LLM

## Le LLM

Le LLM utilisé est la version Web de Claude le 13 octobre 2026 à 17h17.

## La requête

Je veux un programme prenant en entrée deux nombres et donne en sortie le PGCD de ces deux nombres. Ce programme doit être écrit dans le langage Befunge défini sur cette page web : https://esolangs.org/wiki/Befunge et dont un interpréteur en ligne est disponible sur ce site : https://amicloud.github.io/fungide/

## La réponse

Voici un programme Befunge-93 qui lit deux entiers et affiche leur PGCD avec l'algorithme d'Euclide :
```
&&v  >$.@
  >:!|
     >:05p%05g\v
  ^            <
```
Utilisation : saisissez les deux nombres (séparés par un espace ou un retour à la ligne) quand l'interpréteur les demande. Par exemple, 48 et 18 donnent 6.

Fonctionnement :

- Ligne 1 : && lit les deux entiers a et b (b au sommet de la pile), puis v descend sur la ligne 2.
- Ligne 2 : >:!| duplique b et teste s'il est nul. Si b ≠ 0, on descend dans le corps de la boucle. Si b = 0, on remonte vers >$.@ à la ligne 1, qui supprime le 0, affiche a (le PGCD) et termine.
- Ligne 3 : le corps de la boucle transforme (a, b) en (b, a mod b) :
:05p copie b et le range dans la case (0,5) de la grille, qui est vide ;
% calcule a mod b ;
05g récupère b ;
\ échange les deux valeurs pour obtenir la pile (b, a mod b).
- Ligne 4 : < et ^ forment le chemin de retour vers le début de la boucle (> de la ligne 2).

Remarque : les espaces de début de ligne sont importants, car ils positionnent les instructions aux bonnes colonnes. Copiez le code tel quel dans Fungide.
