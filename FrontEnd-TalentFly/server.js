import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser()); 

let db;

function handleDisconnect() {
    db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB_USUARIO,
        password: process.env.DB_PASS,
        port: process.env.PORT,
        database: "cta77813_talenflyDB"
    });

    db.connect((err) => {
        if (err) {
            console.log('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Intentar reconectar después de 2 segundos
        } else {
            console.log('Connected to database');
        }
    });

    db.on('error', (err) => {
        console.log('Database error', err);

        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
            console.log('Attempting to reconnect...');
            handleDisconnect(); // Reconectar si la conexión se perdió o fue reseteada
        } else {
            throw err; // Para otros errores, lanzar la excepción
        }
    });
}

handleDisconnect();

app.get('/', (req, res) => {
    return res.json("From backend");
});

app.post('/register/postulante', async (req, res) => {
    const { nombre, apellido, profesion, email, contrasena } = req.body;
    
    // Verifica que la contrasena no sea undefined
    if (!contrasena) {
        return res.status(400).json({ error: "La contrasena es requerida" });
    }

    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const sql = "INSERT INTO postulantes (nombre, apellido, profesion, email, contrasena) VALUES (?, ?, ?, ?, ?)";
        
        db.query(sql, [nombre, apellido, profesion, email, hashedPassword], (err, data) => {
            if (err) return res.json(err);
            return res.json("Registration successful!");
        });
    } catch (error) {
        return res.status(500).json({ error: "Error al hashear la contrasena" });
    }
});

app.post('/login/postulante', (req, res) => {
    const { email, contrasena } = req.body;
    const sql = "SELECT * FROM postulantes WHERE email = ?";
    
    db.query(sql, [email], async (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            const validPassword = await bcrypt.compare(contrasena, data[0].contrasena);
            if (validPassword) {
                // Genera la cookie con un identificador único (por ejemplo, el id del usuario)
                res.cookie('session_id', data[0].id, {
                    httpOnly: true, // Solo accesible vía HTTP(S), no desde JavaScript
                    maxAge: 24 * 60 * 60 * 1000, // 1 día
                    secure: true, // Solo se envía en HTTPS (asegúrate de que esté activo en producción)
                    sameSite: 'lax', // Para prevenir ataques CSRF
                });
                return res.json({ message: "Login successful!" });
            } else {
                return res.status(401).json({ error: "Invalid email or password" });
            }
        } else {
            return res.status(401).json({ error: "Invalid email or password" });
        }
    });
});

app.post('/register/reclutador', async (req, res) => {
    const { nombre_empresa, cargo, pais, email, contrasena } = req.body;
    
    // Verifica que la contrasena no sea undefined
    if (!contrasena) {
        return res.status(400).json({ error: "La contrasena es requerida" });
    }

    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const sql = "INSERT INTO reclutadores (nombre_empresa, cargo, pais, email, contrasena) VALUES (?, ?, ?, ?, ?)";
        
        db.query(sql, [nombre_empresa, cargo, pais, email, hashedPassword], (err, data) => {
            if (err) return res.json(err);
            return res.json("Registration successful!");
        });
    } catch (error) {
        return res.status(500).json({ error: "Error al hashear la contrasena" });
    }
});

app.post('/login/reclutador', (req, res) => {
    const { email, contrasena } = req.body;
    const sql = "SELECT * FROM reclutadores WHERE email = ?";
    
    db.query(sql, [email], async (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            const validPassword = await bcrypt.compare(contrasena, data[0].contrasena);
            if (validPassword) {
                // Genera la cookie con un identificador único (por ejemplo, el id del usuario)
                res.cookie('session_id', data[0].id, {
                    httpOnly: true, // Solo accesible vía HTTP(S), no desde JavaScript
                    maxAge: 24 * 60 * 60 * 1000, // 1 día
                    secure: true, // Solo se envía en HTTPS (asegúrate de que esté activo en producción)
                    sameSite: 'lax', // Para prevenir ataques CSRF
                });
                return res.json({ message: "Login successful!" });
            } else {
                return res.status(401).json({ error: "Invalid email or password" });
            }
        } else {
            return res.status(401).json({ error: "Invalid email or password" });
        }
    });
});

app.get('/dashboard/postulante', (req, res) => {
    const sessionId = req.cookies.session_id;
    if (sessionId) {
        // Realiza una consulta a la base de datos usando el sessionId
        const sql = "SELECT * FROM postulantes WHERE id = ?";
        db.query(sql, [sessionId], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        });
    } else {
        return res.status(401).json("Unauthorized");
    }
});

app.get('/dashboard/reclutador', (req, res) => {
    const sessionId = req.cookies.session_id;
    if (sessionId) {
        // Realiza una consulta a la base de datos usando el sessionId
        const sql = "SELECT * FROM reclutadores WHERE id = ?";
        db.query(sql, [sessionId], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        });
    } else {
        return res.status(401).json("Unauthorized xD");
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('session_id');
    return res.json("Logged out successfully");
});


app.listen(8081, () => {
    console.log("listening on port 8081");
});