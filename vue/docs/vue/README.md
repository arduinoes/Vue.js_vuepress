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
npm i --save bootstrap@^5.1
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

### Firebase firestore auth storage

7. Instalar **firebase**

Docuemtación [Firebase](https://firebase.google.com/docs/web/setup?authuser=0)

```
npm install firebase
```

8. Abrir archivo **main.js** en la carpeta **src** y pegar

```html
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
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

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };
```

### Formulario firestore

Bootstrap Formularios [input group](https://getbootstrap.com/docs/5.1/forms/input-group/)

Bootstrap Botones [buttons](https://getbootstrap.com/docs/5.1/components/buttons/)

Vue.js [v-model](https://es.vuejs.org/v2/guide/components-custom-events.html#Personalizacion-de-componente-v-model)

Vue.js [@click](https://es.vuejs.org/v2/guide/syntax.html)

Vue.js [v-bind](https://es.vuejs.org/v2/guide/syntax.html)



9. Crea un formulario con boostrap

```html
<!-- ////////// formulario Añadir ////////// -->
    <!-- Nombre -->
  <div class="container my-4">
  <form>  
    <div class="input-group mb-3">
    <span class="input-group-text">Nombre</span>
    <input v-model="producto.nombre" type="text" class="form-control">
    </div>
    <!-- Familia -->
    <div class="input-group mb-3">
    <span class="input-group-text">Familia</span>
    <input v-model="producto.familia" type="text" class="form-control">
    </div>
    <!-- Descripción -->
    <div class="input-group mb-3">
    <span class="input-group-text">Descripción</span>
    <input v-model="producto.descripción" type="text" class="form-control">
    </div>
    <!-- Precio -->
    <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Precio</span>
    <input v-model="producto.precio" type="text" class="form-control">
    </div>
    <!-- Valoración -->
    <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Valoración</span>
    <input v-model="producto.valoracion" type="text" class="form-control">
    </div>
    <!-- Unidades -->
    <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Unidades</span>
    <input v-model="producto.unidades" type="text" class="form-control">
    </div>
    <!-- Cargar Imagen --> 
    <div class="input-group my-3">
        <input type="file" @change="buscarImagen($event)">
    </div>
    <div>
      <img :src="datoImagen">
    </div>
    <!-- Mostrar/Ocultar Botones Guardar-Editar -->
    <div class="mt-3">  
    <button v-show="this.editar === true" 
            @click.prevent="actualizarImagen(id)" 
            class="btn btn-primary">Actualizar
    </button>
    <button v-show="this.editar === false" 
            @click.prevent="subirImagen()" 
            class="btn btn-primary">Añadir
    </button>
    </div>
  </form>
  </div>
```
### Tabla firestore

Bootstrap Tablas [tables](https://getbootstrap.com/docs/5.1/content/tables/)

Vue.js [v-for](https://es.vuejs.org/v2/guide/list.html)

- Crea una tabla con **bootstrap**
- Utiliza **v-for** para recorrer el array de datos

```html
<!-- ////////// tabla ////////// -->
<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Familia</th>
        <th scope="col">Precio</th>
        <th scope="col">Unidades</th>
        <th scope="col">Editar</th>
        <th scope="col">Elinimar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in productos" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.familia}}</td>
        <td>{{item.precio}}</td>
        <td>{{item.id}}</td>
        <td>
          <button @click.prevent="obtenerDatoID( item.id );this.editar = !this.editar;" 
            class="btn btn-primary">Editar
          </button>
        </td>
        <td>
          <button @click.prevent="eliminarDato( item.id )" 
            class="btn btn-danger">Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
```

## Métodos Firestore

Agregar y leer datos [Firestore](https://firebase.google.com/docs/firestore/quickstart?authuser=0)

Elimina datos [Firestore](https://firebase.google.com/docs/firestore/manage-data/delete-data)

Actualiza un dato [Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data)

Obtener datos por ID [Firestore](https://firebase.google.com/docs/firestore/query-data/get-data)

### Script firestore

- importa **firebase**
- Crea los datos en **data**
- Crea funciones en **methods**
- Crea la función **mounted()** para llamar la funcióm

```html
<script>
// @ is an alias to /src
import { collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { db, storage } from "../main";

export default {
  name: 'Formulario',
  components: {
  },
  data() {
    return {
      editar: false,
      file: null,
      datoImagen: null,

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
          urlFoto: ''}
    }
  },
  methods:{
  // GET
    async obtenerDatos () { 
      const data = await getDocs(collection(db, "productos"));
        data.forEach((doc) => {
        let producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
        console.log(producto)
      });
    },
    // ADD / AGREGAR / AÑADIR
    async agregarDato( producto ){
      const docRef = await addDoc(collection(db, "productos"), {
        nombre: this.producto.nombre,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        valoracion: this.producto.valoracion,
        familia: this.producto.familia,
        unidades: this.producto.unidades,
        enlace: this.producto.enlace,
      })
        .then(() => {
          console.log("Documento añadido");
        })
        .catch(function(error) {
          console.error("Error al añadir el documento: ", error);
        });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato (id){
      await deleteDoc(doc(db, "productos", id ));
    },
    // GET BY ID / OBTENER POR ID
    async obtenerDatoID (id){
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.producto = docSnap.data()
            this.producto.id = docSnap.id
            } 
            else {
            console.log("¡No existe el documento!");
            }
    },
    // UPDATE / ACTUALIZAR
    async actualizarDato (producto) {
      const elemento = doc(db, "productos", this.producto.id );
      await updateDoc(elemento, {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        familia: producto.familia,
        precio: producto.precio,
        valoracion: producto.valoracion,
        unidades: producto.unidades,
        enlace: producto.enlace,
        urlFoto: producto.urlFoto
        })
        .then(() => {
        //router.push('Home');
        })
    },
    // BUSCAR IMAGEN
    buscarImagen(event){
      console.log(event.target.files[0]);
      const tipoArchivo = event.target.files[0].type;
        if(tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png'){
          this.file = event.target.files[0]
          this.error = null
        }
          else{
          this.error = 'Archivo no válido'
          this.file = null
          return 
          }
          const reader = new FileReader();
          reader.readAsDataURL(this.file);
          reader.onload = (e) => {
            this.datoImagen = e.target.result
            // console.log(e.target.result)
          }
    },
    // SUBIR IMAGEN STORAGE
    async subirImagen(){
      try {
        this.loading = true
        const refImagen = storage.ref().child('imagenes').child(this.file.name)
        const res = await refImagen.put(this.file)
        console.log(res);
        const urlDescarga = await refImagen.getDownloadURL()
        this.photo = urlDescarga
        await 
          addDoc(collection(db, "productos"), {
            nombre: this.producto.nombre,
            descripcion: this.producto.descripcion,
            precio: this.producto.precio,
            valoracion: this.producto.valoracion,
            familia: this.producto.familia,
            unidades: this.producto.unidades,
            enlace: this.producto.enlace,
            urlFoto: urlDescarga
          })
          this.error = 'Imagen subida con éxito'
          this.file = null
      } 
        catch (error) {
          console.log(error);
        } 
        finally {
          this.loading = false
        }
      },
    async actualizarImagen(){
      try {
        this.loading = true
        const refImagen = storage.ref().child('imagenes').child(this.file.name)
        const res = await refImagen.put(this.file)
        console.log(res);
        const urlDescarga = await refImagen.getDownloadURL()
        this.photo = urlDescarga
        const elemento = doc(db, "productos", this.producto.id );
          await updateDoc(elemento, {
            nombre: this.producto.nombre,
            descripcion: this.producto.descripcion,
            precio: this.producto.precio,
            valoracion: this.producto.valoracion,
            familia: this.producto.familia,
            unidades: this.producto.unidades,
            enlace: this.producto.enlace,
            urlFoto: urlDescarga
          })
          this.error = 'Imagen subida con éxito'
          this.file = null
      } 
        catch (error) {
          console.log(error);
        } 
        finally {
          this.loading = false
        }
      }        
  },
  mounted() {
    this.obtenerDatos();
  },
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