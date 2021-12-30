# Vue Directivas

[Vue.js CDN](https://v3.vuejs.org/guide/installation.html#cdn)
[Bootstrap CDN](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
[Renderizado Declarativo](https://v3.vuejs.org/guide/introduction.html#declarative-rendering)

## Directivas

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Vue 3 CDN</title>
  </head>
  <body>
    <div id="app">
      <h1>{{ saludo }}</h1>
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script>
      const App = {
        data() {
          return {
            saludo: "Hola Mundo",
          };
        },
      };
      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```
### MUSTACHE o llaves dobles - enlazar datos al documento html

Vue.js [mustache](https://v3.vuejs.org/guide/template-syntax.html#interpolations)

#### template
```html
<h1>{{ saludo }}</h1>
<h1>{{ saludo.toLocaleUpperCase() }}</h1>
```

#### script data()
```js
saludo: 'Hola Mundo',
```
        
### V-MODEL - añadir datos desde el documento html

Vue.js [v-model](https://es.vuejs.org/v2/guide/components.html#Usando-v-model-en-Componentes)
#### template
```html
<input type="text" v-model="nombre" >
 <h1>{{ nombre }}</h1>

```

#### script data()
```js
nombre: '',
```
### V-BIND / : - enlazar con atributos de las etiquetas html

Vue.js [v-bind](https://es.vuejs.org/v2/guide/syntax.html)

```html
<!-- full syntax -->
<a v-bind:href="url"> Google </a>

<!-- abreviado -->
<a :href="url"> Google </a>
<img :src="imagen">
```
#### script data()
```js
url: 'https://www.google.es',
imagen: './imagenes/logo.png',
```
### V-ON / @CLICK - escuchar/ejecutar funciones en el documento html

Vue.js [@click](https://es.vuejs.org/v2/guide/syntax.html)

```html
<!-- full syntax -->
<button v-on:click="saludar"> Saludo </button>
<!-- abreviado -->
<button @click="saludar"> Saludo </button>
```
#### script methods:
```js
methods: {
  saludar() {
  alert('Bienvenidos')
  console.log('Bienvenidos')
  }
}
```

### V-FOR - iteración de arrays (matrices) de objetos

Vue.js [v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for)

```html
<div v-for="(objeto, index) in objetos" :key="index">
  {{ index }}: {{ objeto.nombre }}
</div>
```
#### script data()
```js
objetos: [
  { nombre: 'Objeto1' },
  { nombre: 'Objeto2' }
]
```
### V-IF / v-show - condicionales

Vue.js [v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if)

Aquí veremos como mostrar/ocultar un botón en función de una variable booleana

```html
<p v-if="cantidad > 10 ">En stock</p>
<p v-else-if="cantidad <= 10 && cantidad > 0">Ultimas unidades</p>
<p v-else="cantidad > 10 ">Sin stock</p>
```
```html
<h1 v-show="cantidad === 0">Sin stock</h1>
<h1 v-show="cantidad > 0">En stock</h1>
```
```js
cantidad: 0
```


### Como modificar una variable booleana

Con ***this.editar = !this.editar*** invertimos el booleano.

```html
<button 
  @click.prevent="this.mostrar = !this.mostrar;" 
  >Mostar/Ocultar
</button>

<h1 v-if='mostrar'> Un saludo </h1>
```
```js
  mostrar: false,
```
## Final
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/vue@next"></script>
  <title>Document</title>
</head>
<body>
  <div id="html">
    <h1>{{ saludo }}</h1>
    <h1>{{ saludo.toLocaleUpperCase() }}</h1>

    <input type="text" v-model="nombre" >
    <h1>{{ nombre }}</h1>

    <!-- full syntax -->
    <a v-bind:href="url"> Google </a>

    <!-- abreviado -->
    <a :href="url"> Google </a>
    <img :src="imagen">

    <!-- full syntax -->
    <button v-on:click="saludar"> Saludo </button>
    <!-- abreviado -->
    <button @click="saludar"> Saludo </button>

    <div v-for="(objeto, index) in objetos" :key="index">
      {{ index }}: {{ objeto.nombre }}
    </div>
    
    <p v-if="cantidad > 10 ">En stock</p>
    <p v-else-if="cantidad <= 10 && cantidad > 0">Ultimas unidades</p>
    <p v-else="cantidad > 10 ">Sin stock</p>

    <h1 v-show="cantidad === 0">Sin stock</h1>
    <h1 v-show="cantidad > 0">En stock</h1>
    
    <button 
      @click.prevent="this.mostrar = !this.mostrar;" 
      >Mostar/Ocultar
    </button>

    <h1 v-if='mostrar'> Un saludo </h1>
    
  </div>
  <script>
    const Script = {
  data() {
    return {
      saludo: "Hola Mundo",
      nombre: '',
      url: 'https://www.google.es',
      imagen: './imagenes/logo.png',
      cantidad: 0,
      mostrar: false,
      objetos: [
        { nombre: 'Objeto1' },
        { nombre: 'Objeto2' }
      ]
    }
  },
  methods: {
    saludar() {
    alert('Bienvenidos')
    console.log('Bienvenidos')
    }
  }
}
Vue.createApp(Script).mount('#html')
  </script> 
</body>
</html>
```
