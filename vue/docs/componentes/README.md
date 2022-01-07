---
sidebar: auto
---
# Formulario con componentes

## Componentes I

### Etiqueta => input

#### template

```html
<template>
  <div class="container formulario">
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <input
        type="text"
        class="form-control"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style>
.formulario {
  max-width: 400px;
}
</style>
```
### Etiqueta => textarea

#### template
```html
  <template>
  <div class="container">
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <textarea
        type="text"
        class="form-control"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        rows="3"
      ></textarea>
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
```
### Etiqueta => Selección
#### template
```html
<template>
  <div class="container">
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <select 
        class="form-select" 
        :value="modelValue"
        v-bind="{
          ...$attrs,
          onChange: ($event)=> {$emit('update:modelValue', $event.target.value)}
          }"
          >
        <option
          v-for="opcion in opciones"
          :value="opcion"
          :key="opcion"
          :selected="opcion === modelValue"
        >
          {{ opcion }}
        </option>
      </select>
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    opciones: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
```
## Vista > View

### Formulario.vue

#### template
```html
<template>
  <BaseInput
    v-model="producto.nombre"
    type="text"
    label="Nombre"
  />
   <BaseTextarea
    v-model="producto.descripcion"
    type="text"
    label="Descripción"
  />
   {{ producto }}
</template>
```
### Enlazando Atributos a los componentes

Añade 
```js
v-bind="$attrs"
```


#### script
```js
<script>
import BaseInput from "../components/BaseInput.vue"
import BaseTextarea from "../components/BaseTextarea.vue"
export default {
  name: 'Formulario',
  components: {
    BaseInput,
    BaseTextarea
  },
  data () {
    return {
      categorias: [
        'Guardianes de la Galaxia',
        'Los Cuatro Fantásticos',
        'Los Vengadores',
        'La Liga de la Justicia',
        'Superhéroe'
      ],
      producto: {
        categoria: '',
        nombre: '',
        descripcion: '',
        universo: 'marvel, dcComics',
        extras: {
          poderes: false,
          sexo: false
        }
      }
    }
  }
}
</script>
```
### Configurando main.js

Instalar 
```c
npm install lodash
```

```js
import { createApp } from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(router).mount('#app')
```

## Componentes II
### Etiqueta => Select
BaseSelect
#### template
```html
<template>
  <div class="container formulario">
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <select 
        class="form-select" 
        :value="modelValue"
        v-bind="{
          ...$attrs,
          onChange: ($event)=> {$emit('update:modelValue', $event.target.value)}
          }"
          >
        <option
          v-for="opcion in opciones"
          :value="opcion"
          :key="opcion"
          :selected="opcion === modelValue"
        >
        {{ opcion }}
        </option>
      </select>
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    opciones: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.formulario {
  max-width: 400px;
}
</style>
```
### Etiqueta => Checkbox
BaseCheckbox
#### template
```html
<template>
  <div class="container formulario">
    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:modelValue', $event.target.checked)"
        />
        <label 
          class="form-check-label" for="flexCheckDefault"
          v-if="label"
          >
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.formulario {
  max-width: 400px;
}
</style>
```

### Etiqueta => RadioButton
BaseRadio
#### template
```html
<template>
  <div class="container formulario">
    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          :checked="modelValue === value"
          @change="$emit('update:modelValue', value)"
          v-bind="$attrs"
        />
        <label 
          class="form-check-label" for="flexCheckDefault"
          v-if="label"
          >
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>
```
#### script
```js
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }, 
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped>
.formulario {
  max-width: 400px;
}
</style>
```
## Vista > View

### Formulario.vue

#### template

```html
<template>
  <BaseInput
    v-model="producto.nombre"
    type="text"
    label="Nombre"
  />
   <BaseTextarea
    v-model="producto.descripcion"
    type="text"
    label="Descripción"
  />
    <BaseSelect
    v-model="producto.categoria"
    :opciones="categorias"
    label="Selecciona una categoría"
  />
  <base-checkbox 
    v-model="producto.extras.pelicula" 
    label="Película"
    />
  <base-checkbox 
    v-model="producto.extras.comic" 
    label="Cómic"
    />
  <base-radio
  v-model="producto.editorial"
  :value="0"
  label="DC Cómic"
  />
  <base-radio
  v-model="producto.editorial"
  :value="1"
  label="Marvel"
  />
   {{ producto }}
</template>
```
#### script
```js
<script>
import BaseInput from "../components/BaseInput.vue"
import BaseTextarea from "../components/BaseTextarea.vue"
import BaseSelect from "../components/BaseSelect.vue"
import BaseCheckbox from "../components/BaseCheckbox.vue"
export default {
  name: 'Formulario',
  components: {
    BaseInput,
    BaseTextarea,
    BaseSelect,
    BaseCheckbox
  },
  data () {
    return {
      categorias: [
        'Los Vengadores',
        'Los Cuatro Fantásticos',
        'Guardianes de la Galaxia',
        'Superhéroe'
      ],
      producto: {
        categoria: '',
        nombre: '',
        descripcion: '',
        editorial: 0,
        extras: {
          pelicula: false,
          comic: false
        }
      }
    }
  }
}
</script>
```
