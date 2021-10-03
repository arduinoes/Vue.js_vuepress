---
sidebar: auto
---
# Pasos para la utilización de VUEX

## Archivo **Index.js** de la carpeta **store**

En este archivo guardamos todos los datos y funciones que necesitaremos y que obtendremos a partir de importaciones y mapeo de las funciones.
```js
import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '@/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store ( {
  state: {
    usuario: null,
    error: null,
    foto: null,
    
    urlTemporal: '',
    loading: false,
    file: null,
    
    productos: [ ],
    producto: {
      nombre: '',
      familia: '',
      descripcion: '',
      precio: '',
      valoracion: '',
      unidades: '',
      link: '',
      photo: ''
    }
  },
  mutations: {
    updatePhoto (state, foto) {
      state.foto = foto
      console.log(foto)
    },
    updateFile (state, file) {
      state.file = file
    },
    setUsuario (state, payload){
      state.usuario = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    // GET / Obtener
    setProductos (state, payload) {
      state.productos = payload
    },
    // GET BY ID / Obtener por id
    setProducto (state, payload) {
      state.producto = payload
    },
    // DELETE / Eliminar
    setDeleteProducto (state, payload) {
      state.producto = state.productos.filter(item => item.id !== payload)
    }
  },
  actions: {
    // GET / Obtener
    obtenerDatos({commit}){
      const productos = []
      db.collection('productos').get()
      .then(res => {
          res.forEach(doc => {
              let producto = doc.data()
              producto.id = doc.id
              productos.push(producto)
          })
          commit('setProductos', productos)
      })
    },
    // ADD / Añadir
    agregarDato({commit}, producto ){
      db.collection('productos').add({
        nombre: productos.nombre,
        descripcion: productos.descripcion,
        precio: productos.precio,
        valoracion: productos.valoracion,
        link: productos.link,
        photo: this.foto
      })
        .then(doc => {
          router.push({name: 'Index'})
        })
    },
    // DELETE / Eliminar
    eliminarDato({ commit }, id){
      db.collection('productos').doc(id).delete()
        .then(() => {
          commit('setDeleteProducto', id)
        })
        .catch (error => console.log (error))
    },
    // GET BY ID / Obtener por id
    obtenerDatoID({commit}, id){
      db.collection('productos').doc(id).get()
        .then(doc => {
          let producto= doc.data()
          producto.id = doc.id
          commit('setProducto', productos)
        })
    },
    // UPDATE / Actualizar
    actualizarDato({commit}, producto){
      db.collection('productos').doc(producto.id).update({
        idProducto: producto.idProducto,
        nombre: producto.nombre,
        familia: producto.familia,
        descripcion: producto.descripcion,
        precio: producto.precio,
        valoracion: producto.valoracion,
        link: producto.link,
      })
      .then(() => {
        router.push({name: 'Index'})
      })
    },
    crearUsuario ({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then (res =>{
          const usuarioCreado = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit ( 'setUsuario',usuarioCreado)
        router.push('/')
        })
          .catch( error => {
            console.log(error)
            commit('setError', error)
          });
    },
    cerrarSesion(){
      auth.signOut()
        .then (() => {
          router.push('/login')
        })
    },
    detectarUsuario( {commit}, usuario ){
      commit ('setUsuario', usuario)
    },
  },

  modules: {
  },

  getters: {
    existeUsuario(state){
      if(state.usuario === null){
          return false
      }else{
          return true
      }
    }
 },
})
```
## Importación y mapeo de VUEX

```html
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import FormAdd  from '@/components/FormAdd.vue'
import FormUpdate  from '@/components/FormUpdate.vue'
import { mapActions, mapState } from 'vuex'
import {storage, db} from '../firebase'

export default {

    data() {
      return {
        edit: true,
        urlTemporal: '',
        loading: false,
        error: null,
      }
    },
    name: 'NombreArchivo.vue',
    components: {
        Navbar,
        FormAdd,
        FormUpdate
    },
    mutations: {
    },
    // Tareas
    computed: {
        ...mapState(['productos', 'producto', 'file']),
        file: {
          get () {
            return this.$store.state.file
          },
          set (value) {
            this.$store.commit('updateFile', value)
          }
        },
        photo: {
          get () {
            return this.$store.state.producto.foto
          },
          set (value) {
            this.$store.commit('updatePhoto', value)
          }
        }
      },
      // Funciones
      methods:{
         ...mapActions(['getProductos', 'addProducto', 'getProducto', 'updateProducto', 'deleteProducto'
         ]),
         buscarImagen(event){
             console.log(event.target.files[0]);
             const tipoArchivo = event.target.files[0].type;
             if(tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png'){
                 this.file = event.target.files[0]
                 this.error = null
                 }else{
                     this.error = 'Archivo no válido'
                     his.file = null
                     return
                    }
                    const reader = new FileReader();
                    reader.readAsDataURL(this.file);
                    reader.onload = (e) => {
                        this.urlTemporal = e.target.result
        }
      },
/* Subir imagen */
        async subirImagen(){
            try {
                this.loading = true
                const refImagen = storage.ref().child('imagenes').child(this.file.name)
                const res = await refImagen.put(this.file)
                console.log(res);
                const urlDescarga = await refImagen.getDownloadURL()
                this.foto = urlDescarga
                this.error = 'Imagen subida con éxito'
                this.file = null
                } catch (error) {
                    console.log(error);
                    } finally {
                        this.loading = false
                    }
                }
        }, 
    created(){
        this.getProductos()
    },   
}
</script>
```