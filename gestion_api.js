fetch(`http://localhost:3000/productos`)
    .then(responses => responses.json())
    .then(data => console.log("Productos disponibles ", data))
    .catch(error => console.error("Error al obtener productos", error));
    
 
    /* funtions of my code calling jason server*/
const nuevoProducto = { id: 4, nombre: 'Monitor', precio: 200 };

fetch('http://localhost:3000/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoProducto)
})
.then(response => response.json())
.then(data => console.log('Producto agregado:', data))
.catch(error => console.error('Error al agregar producto:', error));


const productoActualizado = { nombre: 'Laptop', precio: 1400 };

fetch('http://localhost:3000/productos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productoActualizado)
})
.then(response => response.json())
.then(data => console.log('Producto actualizado:', data))
.catch(error => console.error('Error al actualizar producto:', error));

fetch('http://localhost:3000/productos/3', { method: 'DELETE' })
    .then(() => console.log('Producto eliminado'))
    .catch(error => console.error('Error al eliminar producto:', error));

function validarProducto(producto) {
    if (!producto.nombre || typeof producto.precio !== 'number') {
        console.error('Datos del producto no válidos.');
        return false;
    }
    return true;
}