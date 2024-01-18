import { https } from './config'

export const getByIdPageDetail = {
    getById: () => {
        return https.get('/api/Product/getbyid?id=1');
    }
}