# Explication du langage Befunge

La spécificitée du langage Befunge est qu'il peut lire le programme dans différentes directions. Par exemple si le symbole "v" est lu alors le programme va lire les instructions qui sont en dessous du "v" horizontalement. Les symboles "<", ">", "v" et "^" permettent donc de modifier la direction de la lecture du code. Les données sont stockés soit dans une stack pour les nombres lus par le code soit dans un tableau à deux dimensions si on demande explicitement de stocker une valeur avec la commande p. 

Ainsi, si le code lit 801p alors il va enregistrer la valeur 8 dans la case (1,0) du tableau de stockage et ces trois valeurs seront supprimés de la stack. Pour récupérer cette valeur et la placer dans la stack il faudra que le programme lise 01g. Il est aussi possible de faire des opérations entre les derniers éléments de la stack comme une addition avec "+". Il est aussi possible de changer la direction de la lecture du code en fonction de la dernière valeur de la stack. Avec "_" si cette valeur vaut 0 le programme lira le code vers la droite et sinon vers la gauche. "|" suit le même principe mais pour les direction horizontale et verticale. On peut aussi lire une entrée avec le symbole "&".

# Explication du programme p

Ainsi, dans le programme p, on commence par lire une entrée, qui sera notre valeur a, puis on la stocke dans la case (0,0) du tableau. On répète cette opération pour ce qui sra notre valeur b que l'on stocke dans la case (1,0). On récupère cette valeur b et le "!" permet d'insérer 1 dans la stack si la dernière valeur est 0 et autrement d'y ajouter 0. On dirige ensuite le programme vers "_" ce qui permet donc de tester si b vaut 0 ou non. 

S'il vaut 0 le programme va d'abord vers la gauche puis est dirigé vers les instructions 00g.@ avec le "." qui affiche en sortie le dernier élément de la stack sous la forme d'un integer et "@" qui termine le programme. 

Si b est différent de 0, le programme ajoute a et b dans la stack, récupère leur modulo et enregistre cette valeur dans la case (2,0) du tableau. La valeur de b remplace ensuite celle de a et la valeur stockée dans (2,0) est ensuite positionné dans la case (1,0) donc à la place de celle de b. Suite à cela le programme est redirigé avant la vérification que b vaut 0 ce qui fait une boucle. 