
import { IncomingMessage, ServerResponse } from 'http';
import { sendResponse } from '../utils/sendResponse';
import { podcastService } from '../services/podcastService';

export const podcastController = {
    async list(req: IncomingMessage, res: ServerResponse) {
        const data = podcastService.list();
        sendResponse(res, 200, data);
    },

    async create(req: IncomingMessage, res: ServerResponse) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const data = JSON.parse(body);
            const created = podcastService.create(data);
            sendResponse(res, 201, created);
        });
    },

    async find(req: IncomingMessage, res: ServerResponse) {
        const id = req.url?.split('/')[2];
        const found = podcastService.find(id || '');
        if (found) {
            sendResponse(res, 200, found);
        } else {
            sendResponse(res, 404, { message: 'Podcast não encontrado' });
        }
    },

    async update(req: IncomingMessage, res: ServerResponse) {
        const id = req.url?.split('/')[2];
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const data = JSON.parse(body);
            const updated = podcastService.update(id || '', data);
            if (updated) {
                sendResponse(res, 200, updated);
            } else {
                sendResponse(res, 404, { message: 'Podcast não encontrado para atualizar' });
            }
        });
    },

    async remove(req: IncomingMessage, res: ServerResponse) {
        const id = req.url?.split('/')[2];
        const deleted = podcastService.remove(id || '');
        if (deleted) {
            sendResponse(res, 200, { message: 'Podcast removido com sucesso' });
        } else {
            sendResponse(res, 404, { message: 'Podcast não encontrado para remoção' });
        }
    }
};
