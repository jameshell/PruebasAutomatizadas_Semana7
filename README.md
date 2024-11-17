# Semana 6 - Pruebas Automatizadas

Nombre | Correo
-- | --
Camila Alejandra Guayara | c.guayara@uniandes.edu.co
Juan Pablo Osorio Beltran | jp.osoriob1@uniandes.edu.co
Jaime Alonso | ja.alonso@uniandes.edu.co
Carlos Bayona | c.bayona@uniandes.edu.co

## NOTA: Para esta entrega se divide en 2 partes

1- Parte 1 Entrega de los 40 escenarios con la toma de las capturas.

2- Parte 2 Entrega con los 20 enscenario para las Pruebas VRT.

---------------------------------------------------------------------------------
# Parte 1
## Paso a paso para instalacion de Kraken

En este caso debemos hacer uso del directorio/carpeta del repositorio ```./kraken``` 

### Instalacion Ghost
- Tener instalado docker en su computador.
- Correr el siguiente comando ```$ docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:5.96```

  NOTA: la version es importante la 5.96.

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas.

  
### Instalacion Kraken
- Instalar node.
- Instala Kraken en nuestro computador de forma global en terminal: **npm install kraken-node**
- Instalar de forma global appium en terminal: npm install -g appium
- Revisar que en el archivo **package.json** de kraken del repositorio tenga el siguiente json:

```
  "dependencies": {

    "@cucumber/cucumber": "^7.2.1",
  
    "kraken-node": "^1.0.24"
  
  }
```
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: ```npm install```
- Modifica archivo **properties.json** que se encuentra en la carpeta Kraken del repo, los datos a cambiar son los siguientes:
  ```
    "GHOST": "http://localhost:3001/ghost/#/signin" - DEPENDE DONDE SE ESTE CORRIENDO GHOST EN SU MAQUINA LOCAL
  
    "USERNAME": "USUARIO@USUARIO.com" -EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
  
    "PASSWORD": "CONTRASEÑA123" - LA CONTRASEÑA QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST

- En la terminal ir a la carpeta de ./kraken
- Correr las pruebas: ```npx kraken-node run```


## Paso a paso para instalacion de Cypress
En este caso debemos hacer uso del directorio/carpeta del repositorio ```./cypress``` 
### Instalacion Ghost
- Tener instalado docker en su computador
- Correr el siguiente comando ```$docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:5.96```

  NOTA: la version es importante la 5.96

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas

  
### Instalacion Cypress
- Instalar node
- Instala Cypres en nuestro computador de forma global: npm install cypress
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: npm install
- Modifica archivo **cypress.config.js** que se encuentra en la carpeta **cypress** del repo, los datos a cambiar son los siguientes:

  NOTA: La cofiguracion de las 2 versiones de las ABP en *cyprees* se genera aca en el literal #4 para la version v4.5 de Ghost y liteteral #5 para la version 5.96 de Ghost

const params = {

        4:{
          'username': 'USUARIO@USUARIO.com', /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST        
          'password': 'XXXXXXXXXX',         /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
          'url': 'http://localhost:3002/', /// Depende del puerto configurado para la version que necesite        
        },
        5:{
          'username': 'test@test.com',       /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
          'password': 'XXXXXXXXXX',         /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
          'url': 'http://localhost:3001/', /// Depende del puerto configurado para la version que necesite 
        },

  }
- En la terminal ir a la carpeta de ./cypress
- Correr las pruebas:
  
  ```npx cypress open --env VERSION=5``` ---> Para test de la version 5.96 de Ghost
  
- Se abre la interfaz de de Cypress
- Ir a pruebubas E2E
- Correr las pruebas que se encuentran en la interfaz
- Opcion se pudede correr desde la terminal con ```npx cypress run --env VERSION=5```

---------------------------------------------------------------------------------
# Parte 2

Para esta parte de la entrega debemos hacer la isntalacion de un nuevo contenedor de Ghost para la version v4.5 de la misma, ira en el paso a paso de cada una las herramientas para hacer los test.

## Paso a paso para instalacion de Kraken
En este caso debemos hacer uso del directorio/carpeta del repositorio ```./kraken-ghost-base```
### Instalacion Ghost
- Tener instalado docker en su computador.
- Correr el siguiente comando ```$ docker run -d --name some-ghost45 -e NODE_ENV=development -e url=http://localhost:3002 -p 3002:2368 ghost:4.5"```

  NOTA: la version es importante la 4.5.

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas.

  
### Instalacion Kraken
- Instalar node.
- Instala Kraken en nuestro computador de forma global en terminal: ```npm install kraken-node```
- Instalar de forma global appium en terminal: ```npm install -g appium```
- Revisar que en el archivo **package.json** de kraken del repositorio tenga el siguiente json:

  ```
  
  "dependencies": {

    "@cucumber/cucumber": "^7.2.1",
  
    "kraken-node": "^1.0.24"
  
  }

- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: **npm install**
- Modifica archivo **properties.json** que se encuentra en la carpeta Kraken del repo, los datos a cambiar son los siguientes:
  ```
    "GHOST": "http://localhost:3002/ghost/#/signin" - DEPENDE DONDE SE ESTE CORRIENDO GHOST EN SU MAQUINA LOCAL
  
    "USERNAME": "USUARIO@USUARIO.com" -EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
  
    "PASSWORD": "CONTRASEÑA123" - LA CONTRASEÑA QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
- En la terminal ir a la carpeta de ```./kraken-ghost-base```
- Correr las pruebas: npx kraken-node run


## Paso a paso para instalacion de Cypress

### Instalacion Ghost
- Tener instalado docker en su computador
- Correr el siguiente comando ```$ docker run -d --name some-ghost45 -e NODE_ENV=development -e url=http://localhost:3002 -p 3002:2368 ghost:4.5```

  NOTA: la version es importante la 4.5

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas

  
### Instalacion Cypress
- Instalar node
- Instala Cypres en nuestro computador de forma global: npm install cypress
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: npm install
- Modifica archivo **cypress.config.js** que se encuentra en la carpeta **cypress** del repo, los datos a cambiar son los siguientes:
  
 NOTA: La cofiguracion de las 2 versiones de las ABP en cyprees se genera aca en el literal #4 para la version v4.5 de Ghost y liteteral #5 para la version 5.96 de Ghost

const params = {

        4:{
          'username': 'USUARIO@USUARIO.com',  /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST         
          'password': 'XXXXXXXXXX',          /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST 
          'url': 'http://localhost:3002/',  /// Depende del puerto configurado para la version que necesite       
        },
        5:{
          'username': 'test@test.com',       /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST 
          'password': 'XXXXXXXXXX',         /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST   
          'url': 'http://localhost:3001/', /// Depende del puerto configurado para la version que necesite 
        },

  }

- En la terminal ir a la carpeta de ./cypress
- Correr las pruebas: 

 ```npx cypress open --env VERSION=4``` ---> Para test de la version 4.5 de Ghost

- Se abre la interfaz de de Cypress
- Ir a pruebubas E2E
- Correr las pruebas que se encuentran en la interfaz
- Opcion se pudede correr desde la terminal con ```npx cypress run --env VERSION=4```


## Paso a paso para instalacion de Resemble js

Para poder ejecutar las pruebas VRT en Resemble debe seguir los siguientes pasos

- Instalar node.
- Instalar las siguientes librerias dependeiendo del OS
  
  MacOS

  ```brew install pkg-config cairo pango libpng jpeg giflib librsvg```

  Linux

  ```sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++```

  Windows

  ```npm install -g windows-build-tools```
  
### Ejecutar test VRT con Resemble

- Ir al directorio/carpeta ```./resemble-kraken```
- Usar el comando ```npm install```
- Ejecutar ```node index.js```  del directorio ```./resemble-kraken```
- Para ver el reporte de cada un de los test ir a ```./resemble-kraken/reports```
- Los reportes tienen el nombre ```comparision-report-E*.html```

El ```*```hace referencia al numero del escenario de prueba
   
## Paso a paso para instalacion de Pixelmatch

Para poder ejecutar las pruebas VRT en Pixelmatch debe seguir los siguientes pasos

- Instalar node.
  
### Ejecutar test VRT con Pixelmatch

- Ir al directorio/carpeta ```./cypress-pixelmatch```
- Usar el comando ```npm install```
- Ejecutar ```node index.js```  del directorio ```./resemble-kraken```
- Para ver el reporte de cada un de los test ir a ```./cypress-pixelmatch/reports```
- Los reportes tienen el nombre ```comparision-report-E*.html```

El ```*```hace referencia al numero del escenario de prueba

