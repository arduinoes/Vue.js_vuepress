---
sidebar: auto
---

# Guardar fotos

## Template

En la parte de template creamos un input type="file" que nos permite buscar un archivo a través del finder. Al igual que con editar necesitamos realizar dos pasos:

```html
<div class="input-group my-3">
    <input type="file" @change="buscarImagen($event)">
</div>
```

Para previsualizar la imagen utilizamos el dato datoImagen

```html
<div>
    <img :src="datoImagen">
</div>
```

Botón guardar o actualizar

```html
<td>
    <button @click.prevent="obtenerDatoID( item.id );this.editar = !this.editar;" 
    class="btn btn-primary">Editar
    </button>
</td>
<td>
    <button @click.prevent="eliminarDato( item.id )" 
    class="btn btn-danger">Eliminar
    </button>
</td>
```

Script data editar

```js
data() {
    return {
      editar: false,
    }
}
```

Buscar la imagen y guardarla en una variable file y el contenido urlTemporal, y así visualizar el contenido de la imagen. Fíjate que también utilizamos un condicional para verificar que el tipo de archivo sea válido (jpeg, png).

## Script data

```js
data() {
    return {
      file: null,
      datoImagen: null
}
```

Obtenemos el archivo y lo guardamos en data, comprobamos el tipo de archivo si es válido y obtenemos la url para poder visualizarla en la página.

Script methods

```js
 // BUSCAR IMAGEN
buscarImagen(event){
    console.log(event.target.files[0]);
    const tipoArchivo = event.target.files[0].type;
    if(tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png'){
        this.file = event.target.files[0]
        this.error = null
    }
        else{
        this.error = 'Archivo no válido'
        this.file = null
        return 
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = (e) => {
        this.datoImagen = e.target.result
        }
},
```

Subir la imagen a storage y guardar la dirección/enlace en una variable.

Script methods

```js
// SUBIR IMAGEN STORAGE
async subirImagen(){
    try {
    this.loading = true
    const refImagen = storage.ref().child('imagenes').child(this.file.name)
    const res = await refImagen.put(this.file)
    console.log(res);
    const urlDescarga = await refImagen.getDownloadURL()
    this.photo = urlDescarga
    await 
        db.collection('productos').add({
        nombre: this.producto.nombre,
        familia: this.producto.familia,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        valoracion: this.producto.valoracion,
        unidades: this.producto.unidades,
        enlace: this.producto.enlace,
        urlFoto: urlDescarga
        })
        this.error = 'Imagen subida con éxito'
        this.file = null
    } 
        catch (error) {
            console.log(error);
        } 
            finally {
                this.loading = false
            }
}  
```
     
## Actualizar la base de datos y la imagen

```js
async actualizarImagen(){
      try {
        this.loading = true
        const refImagen = storage.ref().child('imagenes').child(this.file.name)
        const res = await refImagen.put(this.file)
        console.log(res);
        const urlDescarga = await refImagen.getDownloadURL()
        this.photo = urlDescarga
        await 
          db.collection('productos').doc(this.producto.id).update({
            nombre: this.producto.nombre,
            descripcion: this.producto.descripcion,
            precio: this.producto.precio,
            valoracion: this.producto.valoracion,
            familia: this.producto.familia,
            unidades: this.producto.unidades,
            enlace: this.producto.enlace,
            urlFoto: urlDescarga
          })
          this.error = 'Imagen subida con éxito'
          this.file = null
      } 
        catch (error) {
          console.log(error);
        } 
          finally {
            this.loading = false
          }
}
```

