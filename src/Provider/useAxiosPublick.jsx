import axios from "axios";


const axiosPublick = axios.create({
    baseURL: "https://backend-server-9etitfx9e-thisjahid.vercel.app"
})
const useAxiosPublick = () => {
    return (
        axiosPublick
    );
};

export default useAxiosPublick;