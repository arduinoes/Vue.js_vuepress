---
sidebar: auto
---

# Firestore CRUD

Leer datos [Firestore](https://firebase.google.com/docs/firestore/quickstart?authuser=0)

## GET / Obtener

```js
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
```
## ADD / Agregar / Añadir

Agregar [Firestore](https://firebase.google.com/docs/firestore/quickstart?authuser=0)

```js
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
```
## DELETE / Eliminar / Borrar

Elimina datos [Firestore](https://firebase.google.com/docs/firestore/manage-data/delete-data)

```js
// 
async eliminarDato (id){
  await deleteDoc(doc(db, "productos", id ));
},
```
## GET BY ID / Obtener por ID

Obtener datos por ID [Firestore](https://firebase.google.com/docs/firestore/query-data/get-data)

```js
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
```
## UPDATE / Actualizar

Actualiza un dato [Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data)

```js
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
```

    