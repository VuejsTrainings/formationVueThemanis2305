import axiosService from "./axios";

const depensesService = {
    baseURL: 'depenses',
    getAll(){
        return axiosService.get(this.baseURL);
    },
    getOne(id){
        return axiosService.get(`${this.baseURL}/${id}`);
    }
}

export default depensesService;