import axiosService from "./axios";

const depensesService = {
    baseURL: 'depenses',
    getAll(){
        return axiosService.get(this.baseURL);
    }
}

export default depensesService;