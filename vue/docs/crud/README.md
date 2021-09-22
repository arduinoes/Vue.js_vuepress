---
sidebar: auto
---

# Firestore CRUD

## GET / Obtener

```js
obtenerDatos(){
  this.productos = [];
  db.collection('productos').get()
    .then(res => {
      res.forEach((doc) => {
        let producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
      });
    });
},
```

## ADD / Añadir

```js
agregarDato( producto ){
  db.collection('productos').add({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    familia: producto.familia,
    precio: producto.precio,
    valoracion: producto.valoracion,
    unidades: producto.unidades,
    enlace: producto.enlace
  })
    .then(() => {
      console.log("Documento añadido");
    })
      .catch(function(error) {
        console.error("Error al añadir el documento: ", error);
      });
},
```

## DELETE / Eliminar

```js
eliminarDato (id){
  db.collection("productos").doc(id).delete()
    .then(() =>  {
      console.log("Documento eliminado!");
    })
      .catch(function(error) {
        console.error("Error al eliminar documento: ", error);
      });
},
```

## GET BY ID/ Obtener por id

```js
obtenerDato (id){
db.collection('productos').doc(id).get()
  .then((doc) => {
    if (doc.exists) {
      this.producto = doc.data()
      this.producto.id = doc.id
      } 
      else {
      console.log("¡No existe el documento!");
      }
  })
    .catch((error) => {
    console.log("Ha ocurrido un error al obtener el documento:", error);
    });
},
```

## UPDATE / Actualizar

```js
actualizarDato (producto) {
  db.collection('productos').doc(this.producto.id).update({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    familia: producto.familia,
    precio: producto.precio,
    valoracion: producto.valoracion,
    unidades: producto.unidades,
    enlace: producto.enlace
    })
      .then(() => {
        router.go('Inicio');
      })
},
```

