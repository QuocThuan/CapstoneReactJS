import { https } from './config'

export const getByIdPageDetail = {
    getById: (id) => {
        return https.get(`/api/Product/getbyid?id=${id}`)
    },
    postOrder: (data) => {
        return https.post('/api/Users/order', data)
    },
}