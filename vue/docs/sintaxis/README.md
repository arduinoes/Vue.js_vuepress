# Vue Sintaxis

## Básicos

- **:dissable** deshabilita.
- **class="d-none"** oculta la etiqueta.

## v-model

Vue.js [v-model](https://es.vuejs.org/v2/guide/components.html#Usando-v-model-en-Componentes)

## v-bind / :

Vue.js [v-bind](https://es.vuejs.org/v2/guide/syntax.html)

```html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- abreviado -->
<a :href="url"> ... </a>
```

## v-on / @click

Vue.js [@click](https://es.vuejs.org/v2/guide/syntax.html)

```html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- abreviado -->
<a @click="doSomething"> ... </a>
```


## v-for

Vue.js [v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for)

```html
<div v-for="(item, index) in items" :key="index">
    {{ index }}: {{ item.name }}
</div>
```

## v-if / v-show

Vue.js [v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if)

Aquí veremos como mostrar/ocultar un botón en función de una variable booleana

```html
<button v-show="this.editar === true" 
    @click.prevent="actualizarProducto(producto)" 
    class="btn btn-primary">Editar
</button>
<button v-show="this.editar === false" 
    @click.prevent="agregarProducto(producto)" 
    class="btn btn-primary">Guardar
</button>
```
## Como modificar una variable booleana

Con ***this.editar = !this.editar*** invertimos el booleano.

```html
<button @click.prevent="obtenerProductoID( item.id );
                        this.editar = !this.editar;" 
    class="btn btn-primary">Editar
</button>
```
```js
data() {
    return {
        editar: false,
}
``