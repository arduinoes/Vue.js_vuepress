---
sidebar: auto
---
# Comenzando

## Instalación CLI de Vue.js

### Prerequisitos Node.js

Descarga e instala [Node.js](https://nodejs.org/en/)

Descarga e instala [Visual Studio Code](https://code.visualstudio.com/)

### Instalación CLI Vue.js

1. Instalar

Descarga e instala [Vue.js CLI](https://cli.vuejs.org/guide/installation.html)

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

### Creando un proyecto 

- Usando una interfaz gráfica

```c
vue ui
```
- Crear proyecto
- Introducir un nombre
- Manual
- Seleccionar Vue.js 3
- Añadir Router y Vuex

### Instalando módulos Boostrap y Popper

1. Instala bootstrap

Instala [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/#npm)

```c
npm i --save bootstrap
```

2. Instala también **Popper** en algunos componentes de Bootstrap es necesario

Necesita [Popper](https://getbootstrap.com/docs/5.0/getting-started/parcel/#install-bootstrap)

Instala [Popper](https://popper.js.org/)

```c
npm i @popperjs/core 
```
3. Copia en **main.js**

```html
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
```

## Componentes > TarjetaProducto

Comencemos modificando el componente "HelloWorld" por un Componente "TarjetaProducto" en el que mostrar los productos.

Renombremos el archivo

### Template
```html
<template>
  <div class="card" style="width: 18rem">
    <img :src="producto.imagen" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">
        {{ producto.descripcion }}
      </p>
      <a href="#" class="btn btn-primary">Leer mas</a>
    </div>
  </div>
</template>
```
### Script
```js
<script>
export default {
  data () {
    return {
       producto: {
         id: "01", 
         nombre: "Gamora", 
         imagen: "./imagenes/Gamora.jpeg",
         descripcion: "Gamora es la hija adoptiva de Thanos, y la última de su especie. Sus poderes incluyen fuerza y agilidad sobrehumanas y un factor de curación acelerada"
      }
    }
  }
}
</script>
```

## Views > Home

### Template
```html
<template>
  <div>
   <TarjetaProducto />
  </div>
</template>
```
### Script
```js
<script>
import TarjetaProducto from '@/components/TarjetaProducto.vue'

export default {
  name: 'Home',
  components: {
    TarjetaProducto
  }
}
</script>
```

## Props Componente TarjetaProducto 

### Script
```js
<script>
export default {
    props: {
    producto: Object
  }
}
</script>
```
## Props Views Home 

### Template
```html
<template>
  <div class="container">
    <div class="row justify-content-md-center row-cols">
      <TarjetaProducto
        class="mx-2"
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>
```

### Script
```js
<script>
import TarjetaProducto from '@/components/TarjetaProducto.vue'

export default {
  name: 'Home',
  components: {
    TarjetaProducto
  },
    data() {
          return {
            productos: [
              { id: "01", nombre: "Gamora", imagen: "./imagenes/Gamora.jpeg", descripcion: "Gamora es la hija adoptiva de Thanos, y la última de su especie. Sus poderes incluyen fuerza y agilidad sobrehumanas y un factor de curación acelerada"},
              { id: "02", nombre: "Groot", imagen: "./imagenes/Groot.jpeg", descripcion: "Groot es un coloso Flora del Planeta X, la capital de los mundos secundarios"},
              { id: "03", nombre: "Rocket", imagen: "./imagenes/Rocket.jpeg", descripcion: "Rocket, es un individuo genéticamente modificado parecido a un mapache que se convirtió en un criminal al igual que su amigo Groot"},
              { id: "04", nombre: "StarLord", imagen: "./imagenes/StarLord.jpeg", descripcion: "Es el hijo mestizo del emperador J'Son del planeta Spartax y la humana Meredith Quill"},
            ],
          };
        },
}
</script>
```

## Router

### Views Home => ListaProductos
Cambiar el nombre del archivo
#### Script
```js
 name: "ListaProductos",
 ```
### Router > index.js => ListaProductos

```js
import ListaProductos from "../views/ListaProductos.vue";
```
```js
  {
    path: "/",
    name: "ListaProductos",
    component: ListaProductos
  },
```
### Router > index.js => SobreNosotros
Cambiar archivo About
```js
  {
    path: "/sobre-nosotros",
    name: "SobreNosotros",
    component: () =>
      import("../views/SobreNosotros.vue")
  }
```
### src > App.vue

```html
 <router-link to="/sobre-nosotros">Sobre nosotros</router-link>
 ```

## Axios

### Creando un servidor de json

[my-json](https://my-json-server.typicode.com)

```json
{
  "productos": [
    {
      "id": "01",
      "nombre": "Gamora",
      "imagen": "./imagenes/Gamora.jpeg",
      "descripcion": "Gamora es la hija adoptiva de Thanos, y la última de su especie. Sus poderes incluyen fuerza y agilidad sobrehumanas y un factor de curación acelerada"
    },
    {
      "id": "02",
      "nombre": "Groot",
      "imagen": "./imagenes/Groot.jpeg",
      "descripcion": "Groot es un coloso Flora del Planeta X, la capital de los mundos secundarios"
    },
    {
      "id": "03",
      "nombre": "Rocket",
      "imagen": "./imagenes/Rocket.jpeg",
      "descripcion": "Rocket, es un individuo genéticamente modificado parecido a un mapache que se convirtió en un criminal al igual que su amigo Groot"
    },
    {
      "id": "04",
      "nombre": "StarLord",
      "imagen": "./imagenes/StarLord.jpeg",
      "descripcion": "Es el hijo mestizo del emperador J'Son del planeta Spartax y la humana Meredith Quill"
    }
  ]
}
```


### Views > ListaEventos

Instalar **axios**
```c
npm install axios
```


```js
import axios from "axios";
```
```js
 productos: null
```
```js
created () {
    axios
      .get('https://my-json-server.typicode.com/arduinoes/datos/eventos')
      .then(response => {
        this.productos = response.data;
        console.log('productos:', response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
```
### Servicios (modulando)

Crea en **src** una carpeta **servicios** con un archivo **ServiciosProductos.js**

```js
import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://my-json-server.typicode.com/arduinoes/datos',
    withCredentials: false,
    headers: {
        Aceppt: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    obtenerProductos(){
       return apiClient.get('/productos')
    }
}
```

### Views > ListaEventos

#### Script
```js
import ServiciosProductos from "@/servicios/ServiciosProductos.js"
```

```js
created () {
   ServiciosProductos.obtenerProductos()
      .then(response => {
        this.productos = response.data;
        console.log('productos:', response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
```
## Nueva Vista DetalleProducto

### Servicio > ServiciosProducto
Añadir
```js
obtenerProducto(id){
      return apiClient.get('/productos/' + id )
    }
```

### Views > DetallesEvento

#### Template
```html
<template>
  <div v-if="producto">
    <h1>{{ producto.nombre }}</h1>
    <p>{{ producto.descripcion }}</p>
    <img :src="producto.imagen" class="card-img-top" alt="" />
  </div>
</template>
```
#### Script
```js
<script>
import ServiciosProductos from "../servicios/ServiciosProductos.js";
export default {
  props: ["id"],
  data() {
    return {
      producto: null,
    };
  },
  created() {
    // ServicioEventos.getEvent(this.$route.params.id)
    ServiciosProductos.obtenerProducto(this.id)
      .then((response) => {
        this.producto = response.data;
        console.log("producto:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
```
## Rutas dinámicas

### Router > index.js 
```js
{
  path: "/detalle-producto/:id",
  name: "DetalleProducto",
  props: true,
  component: () =>
    import("../views/DetalleProducto.vue")
}
```
### Componente TarjetaEvento
```html
 <router-link :to="{ name: 'DetalleProducto', params: { id: producto.id }}">
<a href="#" class="btn btn-primary">Leer mas</a> 
</router-link>
```
```js
<script>
export default {
  props: {
    producto: Object,
  },
};
</script>
```


