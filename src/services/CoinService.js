import http from '../apis/mainApi';

class CoinService {
getAll() {
    return http.get("/coins");
}

get(id) {
    return http.get(`/coins/${id}`);
}

create(data) {
    return http.post("/coins", data);
}

update(id, data) {
    return http.put(`/coins/${id}`, data);
}

delete(id) {
    return http.delete(`/coins/${id}`);
}

deleteAll() {
    return http.delete(`/coins`);
}

findByTitle(title) {
    return http.get(`/coins?title=${title}`);
}
}

export default new CoinService();