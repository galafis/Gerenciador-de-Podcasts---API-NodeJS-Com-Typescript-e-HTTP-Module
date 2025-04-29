
import { Podcast } from '../models/podcast';

const podcasts: Podcast[] = [];

export const podcastService = {
    list() {
        return podcasts;
    },

    create(data: Podcast) {
        const newPodcast = { id: Date.now().toString(), ...data };
        podcasts.push(newPodcast);
        return newPodcast;
    },

    find(id: string) {
        return podcasts.find(p => p.id === id);
    },

    update(id: string, data: Podcast) {
        const index = podcasts.findIndex(p => p.id === id);
        if (index !== -1) {
            podcasts[index] = { ...podcasts[index], ...data };
            return podcasts[index];
        }
        return null;
    },

    remove(id: string) {
        const index = podcasts.findIndex(p => p.id === id);
        if (index !== -1) {
            podcasts.splice(index, 1);
            return true;
        }
        return false;
    }
};
