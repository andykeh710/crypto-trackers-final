import UserService from "../services/UserService";


const AttachCoin = () => {
    // const AllUsers = [];
    UserService.getAll()
    .then(res => {
        const AllUsers = res; 
        console.log(AllUsers)
    })




}

export default AttachCoin