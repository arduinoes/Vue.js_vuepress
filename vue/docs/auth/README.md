---
sidebar: auto
---

# AUTH autentificación

## TEMPLATE Navbar

En componentes **Navbar** añadimos los enlaces:

Vue.js [router-link](https://es.vuejs.org/v2/guide/migration-vue-router.html#v-link-reemplazado)

```html
<router-link class="btn btn-outline-primary me-2" to ="/login">Login</router-link>
<button class="btn btn-outline-primary me-2"   @click="signout">Salir</button>
<router-link class="btn btn-outline-danger me-2"  to ="/registro">Registro</router-link>
```
## SCRIPT Navbar Cerrar sesión

El **script** para el botón **Salir**

```js
<script>
import { signOut } from "firebase/auth";
import { auth } from "../main";

export default {
  name: 'Navbar',
   methods: {
     signout () {
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
        this.$router.push('/login');
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
     }
   },
}
</script>
```


## TEMPLATE registro

Comencemos creando un formulario con:
- Correo electrónico
- Contraseña
- Repita la contraseña
- Botón de envío

Observa que para validar el correo utilizo **type="email"** y para la contraseña **type="password"**. Añado la obligatoridad de requerir todos los campos para poder enviar el formulario y también valido que los campos contraseña coincidan **:disabled="!desactivar"** en **computed:**.

```html
<template>
    <div>
        <Navbar/>
        <div class="container my-4">
  <form @submit.prevent="register( this.email, this.password )">  
    <div class="input-group mb-3">
    <span class="input-group-text">Correo</span>
    <input v-model="email" 
            type="email"
            required="true"
            class="form-control">
    </div>
    <!-- Familia -->
    <div class="input-group mb-3">
    <span class="input-group-text">Password</span>
    <input v-model="password" 
            type="password"
            required="true" 
            class="form-control">
    </div>
    <!-- Descripción -->
    <div class="input-group mb-3">
    <span class="input-group-text">Repite Password</span>
    <input v-model="repassword" 
            type="password"
            required="true" 
            class="form-control">
    </div>
    <button type="submit" :disabled="!desactivar" class="btn btn-primary">Registrar
    </button>
  </form>
    <p>email {{ email }}</p>
  </div> 
    </div>
</template>
```

## SCRIPT registro

- Importamos **auth** de **firebase**
- Creamos los datos **email** y **password**
- Función de crear usuario con email y password

```js
<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main"

import Navbar from "../components/Navbar.vue";

export default {
    name: 'Registro',
    components: {
        Navbar,
    },
    data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
    methods: {
        register(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('¡Registrado!');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                this.errorMessage = error.message;
                alert(this.errorMessage);
                // ..
            });
        },        
    },
    computed: {
        desactivar(){
            return this.password === this.repassword
        }
    }
}
</script>
```
## Enviar a una nueva página

Una vez registrados accederemos a una nueva página, para esto necesitamos:
- Importar **router**
- Empujar a la nueva página

```js
import router from '@/router'
```
```js
router.push('/productos');
```

## TEMPLATE inciar sesión

Creamos:

- Navbar botón **Login**
- Formulario, email y contraseña
- Función login


```html
<template>
    <div>
        <Navbar/>
        <div class="container my-4">
  <form @submit.prevent="login( this.email, this.password )">  
    <div class="input-group mb-3">
    <span class="input-group-text">Correo</span>
    <input v-model="email" 
            type="email"
            required="true"
            class="form-control">
    </div>
    <!-- Familia -->
    <div class="input-group mb-3">
    <span class="input-group-text">Password</span>
    <input v-model="password" 
            type="password"
            required="true" 
            class="form-control">
    </div>
        <button type="submit" class="btn btn-primary">Registrar
    </button>
  </form>
  </div> 
    </div>
</template>
```

## SCRIPT iniciar sesión

Función **firebase signInWithEmailAndPassword**

```js
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main"
import Navbar from "../components/Navbar.vue"
export default {
    name: 'Login',
    components: {
        Navbar,
    },
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        login( email, password ) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('¡Sesión iniciada!');
                // Signed in
                const user = userCredential.user;
                this.$router.push('/');
                // ...
                })
            .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            });
        },
    },
};
</script>
```
