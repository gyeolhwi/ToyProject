import api from "./instance";

export async function getListApi(){
    let response = null;
    try {
        response = await api.get(`/computer/${id}`);
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
}

export async function getComputerListApi(params){
    let response = null;

    try {
        response = await api.get(`/computer/${params}`);
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
}
