--todas las sentencias deben terminar en ;

SELECT * FROM usuarioshuellanqn_mysql.usuarios; 
--selecciona la tabla especifica en la base de datos especifica, en este caso es la tabla "usuarios" dentro de la base de datos "usuarioshuellanqn_mysql" ESTO TRAE TODAS LAS COLUMNAS DE LA TABLA SELECCIONADA

SELECT nombre FROM usuarioshuellanqn_mysql.usuarios;
-- esto permite llamar especificamente a la columna ("nombre") de esa tabla.

SELECT nombre, apellido FROM usuarioshuellanqn_mysql.usuarios;
--se pueden pedir varias columnas utilizando la coma ,
