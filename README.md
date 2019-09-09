# Prueba Humboldt 

## Descripción
Desarrollar un geovisor que permita capturar coordenadas, listar estas coordenadas y poder visualizarlas en otro geovisor de consulta, la prueba debe seguir las siguientes condiciones:
Para el desarrollo de la prueba es necesario que utilices ReactJs y la librería de mapas Leaflet.
La aplicación debe tener una manera de persistencia de los datos, según lo prefieras puede ser implementación nativa con el localStorage del navegador, utilizar REDUX como contenedor del estado,  una base de datos externa o cualquier opción que consideres viable y útil.
La captura se debe hacer posicionando un marcador sobre el mapa en la posición deseada, para así guardar las coordenadas.
El listado debe mostrar las coordenadas de los puntos registrados.
El geovisor de consulta puede encontrarse en otra vista, un tab o en la misma vista abajo de el geovisor de registro.
El geovisor de consulta debe  tener al menos una funcionalidad extra que ofrezca la librería Leaflet, pueden ser tooltips, polilíneas, un polígono, entre otras.  
Hay total libertad para la apariencia y diseño de la aplicación, si deseas usar librerías o guías de estilos disponibles puedes hacerlo.

## Frameworks y librerias empleadas
React
Node,
Express,
Redux,
MongoDB,
Mlab,
Leaflet

## Como Correr el Proyecto

El proyecto esta dividido en dos capas: la capa frontEnde desarrollada en react con el boletTemplae de react, y la otra capa, la capa backEnd esta en node con express para montar la api rest.

### Prender el servidor capa BackEnd

En una consola de comando ir al proyecto con el comando:

```
cd  prueba_humboldt2
```

Instalar las dependencias 

```
npm install
```

Luego prender el servidor con el comando:

```
npm start
```

La api rest esta displonible en el puerto 5000


### Prender el servidor capa FronEnd

Abrir otra consola de comando e ir al siguiente archivo:

```
cd  prueba_humboldt2/client
```

Instalar las dependencias 

```
npm install
```

Luego prender el servidor con el comando:

```
npm start
```
Esta capa está disponible en el puerto 3000, por lo cual para abrir erl proyecto en el navegado es necesario colocar la siguiente url:

```
http://localhost:3000/
```





El BoletTemplate se desacargo del siguiente proyecto de Git
https://github.com/esausilva/example-create-react-app-express.git