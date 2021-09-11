# Comenzando

## Prerequisitos

Descarga e instala [Node.js](https://nodejs.org/en/)

## Instalación

1. Instalar

```c
npm install -g @vue/cli
```

2. Ver la versión

```c
vue --version
```

3. Actualizar

```c
npm update -g @vue/cli
```

### Opción 1

4. Creando un proyecto 
- Usando una interfaz gráfica

```c
vue ui
```
- A través de comandos

```c
vue create nombre_proyecto
```

### Opción 2

4. Prototipo instantáneo
vue serve y vue build

```c
npm install -g @vue/cli @vue/cli-service-global
```

5. Archivo App.vue

```html
<template>
  <h1>Hola!</h1>
</template>
```

6. Visualizarlo en un navegador

```c
vue serve
```

## Modificando/iniciando el proyecto

1. Instala bootstrap

```c
npm i --save bootstrap@^4.6
```

2. Copia en **main.js**

```html
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
```

3. Cambiar nombre de conponente **HelloWorld** por **Navbar**

4. Boostrap copia un **navbar**

5. Modifica en **Home.vue** import, components y etiqueta **HelloWorld** por **Navbar** y elimina la imagen.

6. Suprime en **App.vue** la navegación y los estilos

7. Instalar **firebase**

```
npm install firebase --save
```

### Firebase firestore

8. Crear archivo **firebase.js** en la carpeta **src**

```html
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-yjMEOwF0FAyC4Dsi3IqZcHqoZit4gyI",
  authDomain: "tiendaarduinoes.firebaseapp.com",
  projectId: "tiendaarduinoes",
  storageBucket: "tiendaarduinoes.appspot.com",
  messagingSenderId: "386838491375",
  appId: "1:386838491375:web:518d05af8440e82cb6ab1a",
  measurementId: "G-L90G5CE35V"
};
  // Inicia Firebase
  firebase.initializeApp(firebaseConfig)
  
  // Utilidades
  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export  {firebase, db, auth, storage}
```

### Formulario firestore "Añadir"

9. Crea un formulario con boostrap

10. Crea una etiqueta **script**
- importa **firebase**
- Crea los datos en **data**
- Crea funciones en **methods**
```html
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import { db } from '../firebase'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      producto: {
        id: '',
        nombre: '',
        familia: '',
        descripcion: '',
        precio: '',
        valoracion: '',
        unidades: '',
        enlace: '',
        photo: ''}
    }
  },
  methods: {
   addProducto( producto ){
      db.collection('productos').add({
        nombre: producto.nombre,
        familia: producto.familia,
        descripcion: producto.descripcion,
        precio: producto.precio,
        valoracion: producto.valoracion,
        unidades: producto.unidades,
        enlace: producto.enlace
      })
    },
  }
}
</script>
```

### Crear una tabla para recibir los datos


- Crea una tabla con **bootstrap**
- Utiliza **v-for** para recorrer el array de datos
- importa **firebase**
- Crea los datos en **data**
- Crea funciones en **methods**
- Crea la función **mounted()** para llamar la funcióm

```html
<script>
// @ is an alias to /src
import { db } from '../firebase'

export default {
    name: 'Tabla',
    components: {
    },
    data() {
      return {    
        productos: [],
        producto: {
            id: '',
            nombre: '',
            familia: '',
            descripcion: '',
            precio: '',
            valoracion: '',
            unidades: '',
            enlace: '',
            photo: ''}
        }
    },
    methods:{
        getProductos(){
        this.productos = [];    
        db.collection('productos').get()
        .then(res => {
            res.forEach(doc => {
                let producto = doc.data()
                producto.id = doc.id
                this.productos.push(producto)
                console.log(producto)
          })
      })
    }
    },
   mounted() {
    this.getProductos();
    },
}
</script>
```