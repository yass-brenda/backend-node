# backend-node

# .gitignore

Es importante crear un archivo dentro de tu repositorio llamado __.gitignore__
en este colocaras las direcciones de las carpetas que no debe tomar en cuenta git,
por ejemplo la carpeta .idea quecontiene archivos del ide que estas utilizando, la carpeta node_modules porque
esa se instala cuando realizas el npm install. Añadiendo las direcciones de estas carpetas
git ignorara estos archivos y facilitarà la realización de un __git add .__

Antes del añadir el archivo __.gitignore__
```bash
# Cuando no esta el archivo .gitignore
git status
En la rama main
Tu rama está actualizada con 'origin/main'.

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
       node_modules/
        .idea/
        main.js
        package-lock.json
        package.json
``` 

Por ejemplo supongamos que el siguiente es nuestro __archivo .gitignore__
```bash
# Este es el contenido del archivo .gitignore
node_modules/
.idea/
``` 
Déspues del añadir el archivo __.gitignore__
```bash
# Git status déspues de añadir .git ignore
git status
En la rama main
Tu rama está actualizada con 'origin/main'.

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        .gitignore
        main.js
        package-lock.json
        package.json

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)

``` 
