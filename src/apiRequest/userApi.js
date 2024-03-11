import axios from "axios"

const USER = 'http://localhost:8080/user/api/v1'
const PRODUCT = 'http://localhost:8080/product/api/v1'

export const RegisterUser = async (formData) => {
    let result = await axios.post(`${USER}/registeruser`, formData)
    return result;
}