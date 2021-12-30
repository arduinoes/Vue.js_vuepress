---
sidebar: auto
---

# Agenda

## Componentes > TarjetaEventos

Comencemos modificando el componente "HelloWorld" por un Componente "TarjetaEventos" en el que mostrar los eventos que anotemos.

Renombremos el archivo

### Template
```html
<template>
  <div class="tarjeta-evento">
   <span>@ {{evento.hora}} on {{evento.fecha}}</span>
   <h4>{{evento.titulo}}</h4>
  </div>
</template>
```
### Script
```js
<script>
export default {
  name: "TarjetaEvento",
  data() {
    return {
      evento: {
        id: '01',
        categoria: 'mascotas',
        titulo: 'Dia Adopcion Perros',
        descripcion: 'encuentra tu cánido en este evento.',
        localidad: 'Ciudad Guau',
        fecha: '18 de marzo de 2022',
        hora: '12:00',
        mascotasPermitidas: true,
        orgainzador: 'Perruno'
      },
    }
  }
};
</script>
```
### Style
```css
<style scoped>
.tarjeta-evento{
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
```

## Views > Home

### Template
```html
<template>
  <div class="eventos">
    <TarjetaEvento />
  </div>
</template>
```
### Script
```js
<script>
import TarjetaEvento from "@/components/TarjetaEvento.vue";
export default {
  name: "Home",
  components: {
    TarjetaEvento
  }, 
};
</script>
```
### Style
```css
<style scoped>
.eventos {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
```
## Componente TarjetaEvento Props

### Script
```js
  props: {
    evento: Object
  }
```
## Views Home Props

### Template
```html
<TarjetaEvento 
    v-for="evento in eventos" 
    :key="evento.id" 
    :evento="evento"/>
```

### Script
```js
data() {
    return {
      eventos: [{
        id: '01',
        categoria: 'mascotas',
        titulo: 'Dia Adopcion Perros',
        descripcion: 'encuentra tu cánido en este evento.',
        localidad: 'Ciudad Guau',
        fecha: '18 de marzo de 2022',
        hora: '12:00',
        mascotasPermitidas: true,
        orgainzador: 'Perruno'
      },
      {
        id: '02',
        categoria: 'mascotas',
        titulo: 'Dia Adopción Gatos',
        descripcion: 'encuentra tu felino en este evento.',
        localidad: 'Ciudad Miau',
        fecha: '28 de enero de 2022',
        hora: '10:00',
        mascotasPermitidas: true,
        organizador: 'Gatuno'
      },
      {
        id: '03',
        categoria: 'mascotas',
        titulo: 'Dia Adopción Loros',
        descripcion: 'encuentra tu pájaro en este evento.',
        localidad: 'Ciudad Pio',
        fecha: '28 de agosto de 2022',
        hora: '13:00',
        mascotasPermitidas: true,
        organizador: 'Loreto'}
      ]
    }
  }
```

## Router

### Views Home => ListaEventos
Cambiar el nombre del archivo
#### Script
```js
 name: "ListaEventos",
 ```
### Router > index.js => ListaEventos

```js
import ListaEventos from "../views/ListaEventos.vue";
```
```js
const routes = [
  {
    path: "/",
    name: "ListaEventos",
    component: ListaEventos
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

### Views > ListaEventos

Instalar **axios**

```js
import axios from "axios";
```
```js
 eventos: null
```
```js
created () {
    axios
      .get('https://my-json-server.typicode.com/arduinoes/datos/eventos')
      .then(response => {
        this.eventos = response.data;
        console.log('eventos:', response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
```
### Servicios (modulando)

Crea en **src** una carpeta **servicios** con un archivo **ServiciosEventos.js**

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
    getEventos(){
       return apiClient.get('/eventos')
    }
}
```
### Views > ListaEventos

#### Script
```js
import ServiciosEventos from "@/servicios/ServiciosEventos.js"
```

```js
created () {
   ServiciosEventos.getEventos()
      .then(response => {
        this.eventos = response.data;
        console.log('eventos:', response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
```
## Nueva Vista DetallesEvento

### Servicio 
Añadir
```js
getEvento(id){
        return apiClient.get('/eventos/' + id )
     }
```

### Views > DetallesEvento

#### Template
```html
<template>
    <div v-if="evento">
    <h1>{{ evento.titulo }}</h1>
    <p>{{ evento.hora }} {{ evento.fecha }} {{ evento.localidad }}</p>
    <p>{{ evento.descripcion }}</p>
    </div>
</template>
```
#### Script
```js
<script>
import ServiciosEventos from "../servicios/ServiciosEventos.js"
export default {
      props: ['id'],
        data() {
        return {
        evento: null,
    }
  },
    created () {
      // ServicioEventos.getEvent(this.$route.params.id)
   ServiciosEventos.getEvento(this.id)
      .then(response => {
        this.evento = response.data;
        console.log('evento:', response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
}
</script>
```
## Rutas dinámicas

### Router
```js
{
  path: "/detalles-evento/:id",
  name: "DetallesEvento",
  props: true,
  component: () =>
    import("../views/DetallesEvento.vue")
}
```
### Componente TarjetaEvento
```html
  <router-link :to="{ name: 'DetallesEvento', params: { id: evento.id }}">

```
```js
  props: {
    evento: {
      type: Object,
      required: true
  }
  }
```
```html
  <router-link class="enlace-evento" :to="{ name: 'DetallesEvento', params: { id: evento.id }}">

```
```css
.enlace-evento {
  color: #2c3e50;
  text-decoration: none;
}
```


