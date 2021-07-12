<div align="center">
    <h1>Genetic</h1>
</div>

# Installation

## Pré-requis

- node.js
- npm ou yarn (les commandes seront indiqués avec yarn mais en général il suffit de remplacer yarn par npm run ou simplement npm)

## Environnement de développement

Cloner le projet :

```bash
git clone https://github.com/Wilmaxys/sudoku-resolver.git
```

Se déplacer dans le dossier du projet :

```bash
cd sudoku-resolver
```

Installer les dépendances :

```bash
yarn install
```

Pour lancer l'application, lancer l'un de ses deux commandes

```bash
yarn start
```
ou

```bash
yarn ts-node src/run.ts -d -s 9 -p 5
```
> - -s la taille (Pas encore testé avec d'autres tailles que 9)
> - -p la population