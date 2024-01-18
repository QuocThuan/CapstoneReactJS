import { https } from './config'

export const getByIdPageDetail = {
    getById: (id) => {
        return https.get(`/api/Product/getbyid?id=${id}`)
    }
}