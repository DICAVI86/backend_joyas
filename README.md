# Desafío - Tienda de Joyas

---------

#### Descripción
La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una
moderna y dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack
Developer que desarrolle la API REST de una aplicación cliente para satisfacer las
necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz.
Deberás crear una API REST que permita:
1. Límite de recursos
2. Filtro de recursos por campos
3. Paginación
4. Ordenamiento
5. Estructura de datos HATEOAS

#### Requerimientos
1. Crear una ruta GET /joyas que:
    - Devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos (1.5 puntos)
    - Reciba en la query string los parámetros (2 puntos):
        - limits: Limita la cantidad de joyas a devolver por página
        - page: Define la página
        - order_by: Ordena las joyas según el valor de este parámetro, ejemplo: stock_ASC

2. Crear una ruta GET /joyas/filtros que reciba los siguientes parámetros en la query string: (3.5 puntos)
    - precio_max: Filtrar las joyas con un precio mayor al valor recibido
    - precio_min: Filtrar las joyas con un precio menor al valor recibido.
    - categoria: Filtrar las joyas por la categoría
    - metal: Filtrar las joyas por la categoría

3. Implementar middlewares para generar informes o reportes de alguna actividad o evento específico que ocurra en cada una de las rutas. (1 puntos)
Un ejemplo de reporte es crear un registro indicando a qué ruta se le realizó una consulta.

4. Usar try catch para capturar los posibles errores durante una consulta y la lógica de cada ruta creada. (1 puntos)
5. Usar las consultas parametrizadas para evitar el SQL Injection en la consulta a la base de datos relacionada con la ruta GET /joyas/filtros (1 puntos)

###### DICAVI86