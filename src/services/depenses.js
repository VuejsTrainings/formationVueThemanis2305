import axiosService from "./axios";

const depensesService = {
    baseURL: 'depenses',
    getAll(){
        return axiosService.get(this.baseURL);
    },
    getOne(id){
        return axiosService.get(`${this.baseURL}/${id}`);
    },
    addRemboursement(demandeId, payload){
        return axiosService.post(`${this.baseURL}/${demandeId}`, payload);
    }
}

export default depensesService;