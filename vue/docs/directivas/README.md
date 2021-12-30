---
sidebar: auto
---

# Vue Directivas

## Crear un documento HTML

1. Crea una capeta y arrástrala al editor de código
2. Crea un nuevo documento llamado **index.html**
3. Utiliza el **snippet** html:5

### CDN Vue.js y Bootstrap

[Vue.js CDN](https://v3.vuejs.org/guide/installation.html#cdn)
[Bootstrap CDN](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

### Renderizado Declarativo

[Renderizado Declarativo](https://v3.vuejs.org/guide/introduction.html#declarative-rendering)

#### Etiqueta html

```html
  <div id="html">
    {{ saludo }}
  </div>
```

#### Etiqueta script

```js
<script>
  const Script = {
    data() {
      return {
        saludo: "Hola Mundo"
      }
    }
  }
  Vue.createApp(Script).mount('#html')
</script>
```

### Extensión **live Server**

Vete a extensiones el icono de cuadrados y busca **live server** para crear un servidor local.

#### Archivo HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://unpkg.com/vue@next"></script>
  <title>Vue.js Directivas</title>
</head>
<body>
  <div id="html">
    {{ saludo }}
  </div>
  <script>
    const Script = {
  data() {
    return {
      saludo: "Hola Mundo"
    }
  }
}
Vue.createApp(Script).mount('#html')
  </script>
</body>
</html>
```

## Bootstrap

### Utilidades Flex

[FLEX](https://getbootstrap.com/docs/5.1/utilities/flex/)

```html
<div class="d-flex justify-content-center mt-5">

</div>
```
### Componente CARD

[CARD](https://getbootstrap.com/docs/5.1/components/card/)

```html
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
```

## Directivas
### Mustache => Datos
```html
<h5 class="card-title">{{ nombre }}</h5>
```
```js
nombre: "Gamora",
```
### v-model => Entrada de datos
```html
 <label class="form-label">Saludo</label>
<input v-model="saludo" type="text" class="form-control">
<p>{{ saludo }}</p>
```
```js
saludo: '',
```

### v-bind : => Atibutos
```html
<img :src="image" class="card-img-top" alt="Vue esenciales">
<a v-bind:href="url" class="btn btn-info"> Google </a>
```
```js
image: "./imagenes/Gamora.jpeg",
url: 'https://www.google.es',
```
### v-on => Manejando de eventos
```html
<h5>Cantidad: {{ cantidad }}</h5>
```
```js
cantidad: 0,
```
```html
<button @click.prevent="incrementar" class="btn btn-primary me-2">Incrementar</button>
<button @click.prevent="decrementar" class="btn btn-primary ms-2">Decrementar</button>
```
```js
methods: {
  incrementar () {
    this.cantidad ++
  },
  decrementar () {
    this.cantidad --
  }
}
```
### v-if / else => Condicionales

```html
<p v-if="cantidad > 5 " class="card-text">En stock</p>
<p v-else-if="cantidad <= 5 && cantidad > 0" class="card-text">Ultimas unidades</p>
<p v-else="cantidad === 0 " class="card-text">Sin stock</p>
```

Solo renderiza la etiqueta que cumple la condición
### v-show => Condición booleana
```html
<h1 v-show="cantidad === 0">Sin stock</h1>
<h1 v-show="cantidad > 0">En stock</h1>
```
Renderiza las dos etiquetas añadiendo a la que no cumple la  condición el estilo **display: none** para ocultarla

### v-for => Bucles
```html
<div v-for="heroe in heroes" :key="heroe.id" class="card mt-5" style="width: 18rem;">
```
```html
 <img :src="heroe.image" class="card-img-top" alt="Vue esenciales">
```
```html
  <h5 class="card-title">{{ heroe.nombre }}</h5>
```
```js
 heroes: [
        { id: 01, nombre: "Gamora", image: "./imagenes/Gamora.jpeg"},
        { id: 02, nombre: "Groot", image: "./imagenes/Groot.jpeg"},
        { id: 03, nombre: "Rocket", image: "./imagenes/Rocket.jpeg"},
        { id: 04, nombre: "StarLord", image: "./imagenes/StarLord.jpeg"}
      ]
```
## Código Final

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Título de la página</title>
    <script src="https://unpkg.com/vue@next"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="html">
      <div class="d-flex justify-content-center mt-5">
        <div
          v-for="heroe in heroes"
          :key="heroe.id"
          class="card mt-5"
          style="width: 18rem"
        >
          <div class="card" style="width: 18rem">
            <img :src="heroe.image" class="card-img-top" alt="Vue esenciales" />
            <a v-bind:href="url" class="btn btn-info"> Google </a>
            <div class="card-body">
              <h5 class="card-title">{{ heroe.nombre }}</h5>
                <label class="form-label">Saludo</label>
                <input v-model="saludo" type="text" class="form-control">
                <p>{{ saludo }}</p>
              <h5>Cantidad: {{ cantidad }}</h5>
              <p v-if="cantidad > 5 " class="card-text">En stock</p>
              <p v-else-if="cantidad <= 5 && cantidad > 0" class="card-text">
                Ultimas unidades
              </p>
              <p v-else="cantidad === 0 " class="card-text">Sin stock</p>
              <h1 v-show="cantidad === 0">Sin stock</h1>
              <h1 v-show="cantidad > 0">En stock</h1>
              <button @click.prevent="incrementar" class="btn btn-primary me-2">
                Incrementar
              </button>
              <button @click.prevent="decrementar" class="btn btn-primary ms-2">
                Decrementar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    miranda
    <script>
      const Script = {
        data() {
          return {
            nombre: "Gamora",
            image: "./imagenes/Gamora.jpeg",
            url: "https://www.google.es",
            saludo: '',
            cantidad: 0,
            heroes: [
              { id: 01, nombre: "Gamora", image: "./imagenes/Gamora.jpeg" },
              { id: 02, nombre: "Groot", image: "./imagenes/Groot.jpeg" },
              { id: 03, nombre: "Rocket", image: "./imagenes/Rocket.jpeg" },
              { id: 04, nombre: "StarLord", image: "./imagenes/StarLord.jpeg" },
            ],
          };
        },
        methods: {
          incrementar() {
            this.cantidad++;
          },
          decrementar() {
            this.cantidad--;
          },
        },
      };
      Vue.createApp(Script).mount("#html");
    </script>
  </body>
</html>
```
