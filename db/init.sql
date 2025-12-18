CREATE TABLE IF NOT EXISTS cloud (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP


);


INSERT INTO cloud (nombre, email, ciudad) VALUES ('Juan Perez', 'juan.perez@email.com', 'Santiago');
INSERT INTO cloud (nombre, email, ciudad) VALUES ('Maria Gonzalez', 'maria.gonzalez@email.com', 'Valparaiso');
INSERT INTO cloud (nombre, email, ciudad) VALUES ('Carlos Ruiz', 'carlos.ruiz@email.com', 'Concepcion');
INSERT INTO cloud (nombre, email, ciudad) VALUES ('Ana Lopez', 'ana.lopez@email.com', 'La Serena');