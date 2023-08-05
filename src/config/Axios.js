import axios from "axios";
const Axios = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
});
// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    let {data}=response
    if (data && data.status==='SUCCESS' && data.data){
        return data.data
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error)
    return null;
});
export default Axios;