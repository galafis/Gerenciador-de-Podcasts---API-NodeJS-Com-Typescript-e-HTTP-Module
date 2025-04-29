
import { IncomingMessage, ServerResponse } from 'http';
import { podcastController } from '../controllers/podcastController';

export function router(req: IncomingMessage, res: ServerResponse) {
    if (req.url?.startsWith('/podcasts') && req.method === 'GET') {
        podcastController.list(req, res);
    } else if (req.url === '/podcasts' && req.method === 'POST') {
        podcastController.create(req, res);
    } else if (req.url?.match(/\/podcasts\/(.*)/) && req.method === 'GET') {
        podcastController.find(req, res);
    } else if (req.url?.match(/\/podcasts\/(.*)/) && req.method === 'PUT') {
        podcastController.update(req, res);
    } else if (req.url?.match(/\/podcasts\/(.*)/) && req.method === 'DELETE') {
        podcastController.remove(req, res);
    } else {
        res.statusCode = 404;
        res.end('Rota não encontrada');
    }
}
