# Analyse

## Analyse sémantique

Les tests passent pour les programmes p et p'. Si l'on regarde le code de p', on comprend qu'il suit bien l'algorithme de calcul du PGCD. Il vérifie que b est bien différent de 0 mais arrête le programme s'il est égal à 0. Sinon il enregistre b, calcul a%b, récupère b puis intervertit a%b et b dans la stack pour que la nouvelle valeur de a soit b et celle de b soit a%b. Le programme retourne ensuite à la vérification de si b vaut 0 ce qui fait donc une boucle.

## Analyse syntaxique

Les deux programmes sont syntaxiquement assez différents. Le programme p utilise beaucoup plus la mémoire qui permet de stocker des valeurs dans un tableau. Je n'ai aussi pas laissé d'espace vide entre les flèches de direction pensant que c'était nécessaire, ce qui n'est apparement pas le cas. 

Le programme p' est donc plus court et plus efficace. Il utilise beaucoup moins de mémoire et est plus simple à comprendre. Mon programme est donc moins bien en terme de lisibilité car j'ai une moins bonne gestion de la stack.