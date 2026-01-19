Para inicializar el servidor==> npm start

// importar el archivo: "Entregable Nº1 Backend Avanzado.postman_collection.json" para las pruebas en Postman. //

Los endpoint son los siguientes: 


            Uso Método	Endpoint	                            Descripción
            Productos   GET	    /api/products	                Listar todos los productos
            Productos   GET	    /api/products/:pid	            Obtener producto por ID
            Productos   POST	/api/products	                Crear nuevo producto
            Productos   PUT	    /api/products/:pid	            Actualizar producto
            Productos   DELETE  /api/products/:pid	            Eliminar producto
            Carrito     POST	/api/carts	                    Crear nuevo carrito
            Carrito     GET	    /api/carts	                    Ver todos los carritos por ID
            Carrito     GET	    /api/carts/:cid	                Obtener carrito por ID
            Carrito     POST	/api/carts/:cid/product/:pid	Agregar producto a carrito


para la correcta correlacion de información, en los metodos POST y PUT agregar  el header:

Content-Type: application/json

Los IDs de los productos y los carritos se generan automaticamente. 


