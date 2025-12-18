const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Configuración de conexión
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

router.get('/', (req, res) => {
    // 1. Conexión (usando oConexion)
    const oConexion = mysql.createConnection(dbConfig);

    oConexion.connect(err => {
        if (err) return res.send('Error de conexión');

        // 2. Consulta (Tabla 'cloud')
        const query = 'SELECT * FROM cloud';

        oConexion.query(query, (err, resultados) => {
            oConexion.end(); // Cerrar siempre
            if (err) return res.send('Error en consulta');

            // 3. Generar filas (usando variable 'cloud')
            let filasHtml = '';
            resultados.forEach(cloud => {
                filasHtml += `
                    <tr>
                        <td>${cloud.id}</td>
                        <td>${cloud.nombre}</td>
                        <td>${cloud.email}</td>
                        <td>${cloud.ciudad}</td>
                    </tr>`;
            });

            // 4. Renderizar HTML (Súper simple para memorizar)
            // Solo usamos 'border="1"' para que se vea como tabla
            res.send(`
                <!DOCTYPE html>
                <meta charset="UTF-8">
                <h1>
                    <img src="/logo.png" width="50">
                    Lista Cloud
                </h1>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                    </tr>
                    ${filasHtml}
                </table>
            `);
        });
    });
});

module.exports = router;