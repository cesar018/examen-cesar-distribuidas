import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import fileRoutes from './routes/files.routes'
import driveRoutes from './routes/drive-cesar.routes'
import emailRoutes from './routes/email.routes'
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth', authRoutes);
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/files', fileRoutes);
app.use('/api/auth/drive', driveRoutes);
app.use('/api/auth/email', emailRoutes);
export default app;