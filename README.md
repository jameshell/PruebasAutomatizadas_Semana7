# Semana 5 - Entrega Pruebas-automatizadas-de-software

Nombre | Correo
-- | --
Camila Alejandra Guayara | c.guayara@uniandes.edu.co
Juan Pablo Osorio Beltran | jp.osoriob1@uniandes.edu.co
Jaime Alonso | ja.alonso@uniandes.edu.co
Carlos Bayona | c.bayona@uniandes.edu.co

## Paso a paso para instalacion de Kraken
### Instalacion Ghost
- Tener instalado docker en su computador.
- Correr el siguiente comando "$ docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:5.96"

  NOTA: la version es importante la 5.96.

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas.

  
### Instalacion Kraken
- Instalar node.
- Instala Kraken en nuestro computador de forma global en terminal: **npm install kraken-node**
- Instalar de forma global appium en terminal: npm install -g appium
- Revisar que en el archivo **package.json** de kraken del repositorio tenga el siguiente json:

  {
  
  "dependencies": {

    "@cucumber/cucumber": "^7.2.1",
  
    "kraken-node": "^1.0.24"
  
  }
}
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: **npm install**
- Modifica archivo **properties.json** que se encuentra en la carpeta Kraken del repo, los datos a cambiar son los siguientes:
  
    "GHOST": "http://localhost:3001/ghost/#/signin" - DEPENDE DONDE SE ESTE CORRIENDO GHOST EN SU MAQUINA LOCAL
  
    "USERNAME": "USUARIO@USUARIO.com" -EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
  
    "PASSWORD": "CONTRASEÑA123" - LA CONTRASEÑA QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
- Correr las pruebas: npx kraken-node run


## Paso a paso para instalacion de Cypress

### Instalacion Ghost
- Tener instalado docker en su computador
- Correr el siguiente comando "$ docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:5.96"

  NOTA: la version es importante la 5.96

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas

  
### Instalacion Cypress
- Instalar node
- Instala Cypres en nuestro computador de forma global: npm install cypress
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: npm install
- Modifica archivo **cypress.config.js** que se encuentra en la carpeta **cypress** del repo, los datos a cambiar son los siguientes:
  
  env: {
  
    'username': 'USUARIO@USUARIO.com', -EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
  
    'password': 'CONTRASEÑA123' - LA CONTRASEÑA QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
  
    'url': 'http://localhost:3001/', - DEPENDE DONDE SE ESTE CORRIENDO GHOST EN SU MAQUINA LOCAL
  
  }

- En la terminal ir a la carpeta de ./cypress
- Correr las pruebas: **npx cypress open**
- Se abre la interfaz de de Cypress
- Ir a pruebubas E2E
- Correr las pruebas que se encuentran en la interfaz
- Opcion se pudede correr desde la terminal con **npx cypress run**


NOTA: Se suben los reportes de las pruebas al repositorio
