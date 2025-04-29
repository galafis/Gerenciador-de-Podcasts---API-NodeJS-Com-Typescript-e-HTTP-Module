
import { createServer } from 'http';
import { router } from './routes/podcastRoutes';

const server = createServer((req, res) => {
    router(req, res);
});

server.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333');
});
