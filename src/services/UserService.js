import http from '../apis/mainApi';

class UserService {
getAll() {
    return http.get("/googlelogin");
}

get(id) {
    return http.get(`/googlelogin/${id}`);
}

create(data) {
    return http.post("/googlelogin", data);
}

update(id, data) {
    return http.put(`/googlelogin/${id}`, data);
}

delete(id) {
    return http.delete(`/googlelogin/${id}`);
}

deleteAll() {
    return http.delete(`/googlelogin`);
}

findByTitle(title) {
    return http.get(`/googlelogin?title=${title}`);
}
}

export default new UserService();