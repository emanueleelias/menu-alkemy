# Menu Alkemy
## _Proyecto Creación de menu para aceleración de ALkemy
> Challenge React-Js de [Alkemy](https://www.alkemy.org/). Año 2022 

## Contenido
- Este proyecto tiene una única rama, main.
- Proyecto/ challenge para alkemy de Emanuele Elias Daniel.

## Objetivos y Características
El objetvo del proyecto es desarrollar una aplicación para crear una carta de opciones de menús para un hotel que consumirá una
API externa y mostrará diferentes atributos a nivel individual de cada plato y del menú finalizado.

## Tenología
Este proyecto se está desarrolando en React-js utilizando vite (creador de proyectos):

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App.
- Se utilizan librerías externas, las mismas se detallan en complementos.
- yarn como gestor de dependencias.

## Instalación
El proyecto requiere [Node.js](https://nodejs.org/en/) para ejecutarse.
Abra un terminal y utilize los siguientes comandos:

```
    $ git clone https://github.com/emanueleelias/menu-alkemy.git
    $ cd menu-alkemy
    $ yarn //Para instalar todas las dependencias que se utilizaron en el proyecto.
    $ yarn run dev  //Para iniciar el proyecto.
```
- Por mayor información [Click Aquí.](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

## Estilos
Para los estilos en general se uso el framework bootstrap, ademas hay algunos estilos personalizados en el archivo index.css, el listado de items en forma de cards cuando se busca un plato se acomodo con css grid.

## Complementos
Las librerias utilizadas en el proyecto son las siguientes:

- `react-router-dom v6.0.2`: Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Más información [aquí.](https://v5.reactrouter.com/web/guides/quick-start).
- `react-icons v4.3.1`: Incluye íconos populares para usar en proyectos de React fácilmente, utiliza importaciones de ES6 que permiten incluir solo los íconos que se usan en el proyecto. Más información [aquí.](http://react-icons.github.io/react-icons/)
- `react-table v7.7.0`: Sirve para crear y diseñar potentes experiencias de tablas de datos a la vez que se conserva el 100% de control sobre el marcado y los estilos, utilizada para mostrar la información en el carrito de compras. Más información [aquí.](https://react-table.tanstack.com/)
- `bootstrap v5.1.13`: El framework front-end más popular para desarrollar proyectos responsive facilmente.
- `formik v2.2.9`: Creación de formularios.
- `history v5.3.0`: history permite administrar fácilmente el historial de sesión. Un objeto history abstrae las diferencias en varios entornos y proporciona una API mínima para administrar la pila de historial, navegar y conservar el estado entre sesiones.
- `query-string v7.7.0`: Utilizado para analizar y clasificar cadenas de consulta de URL
- `sweetalert v2.1.2`: Generador de alertas vistosas.
- `use-query-params v1.2.3`: Una solución React Hook , HOC y Render Props para administrar el estado en los parámetros de consulta de URL con una fácil serialización.

## Principales componentes del proyecto

- `Home`: Se muestra en una tabla el menu con los platos que el usuario elija desde el componente DishSearch. a su vez usa el componente MenuTalbe.
- `MenuTable`: MenuTable acomoda en una tabla de manera dinamica los datos que se le pasa por props desde home, para la construcción de la tabla se utiliza react-table.
- `DishSearch`: En este componente se hace el llamado a la api el cual trae los datos de los platos que se buscan, gracias al componente Form search y para mostrar cada uno de los items se usa el componente DishItem.
- `FormSearch`: Se usa Formik para validar la busqueda y obtener correctamente el nombre del plato a buscar.
- `DishItem`: Internamente simplemente es un card que toma los datos por props para mostrar cada uno de los platos buscados.
- `DishItemDetail`: Componente al que se accede a traves del id de un plato seleccionado y muestra más detalles sobre el mismo en una nueva ruta.
- `NoMatch`: Componente ustilizado para mostrarse en caso de querer acceder a una ruta que no existe o no es valida.
- `Login`: En el componente Login se obtienen los datos para el correcto inicio de sesión.
- `ProtectedRoute`: Este componente se usa en App, para redirigir al usuario a Login si no esta autenticado, de otra forma puede navegar por las rutas que estan protegidas. 
- `useContextMenu`: Este componente contiene toda la lógica para trabajar con los datos del Menu.
- `useContextAuth`: Este componente contiene toda la lógica para trabajar con los datos de inicio de sesión.
