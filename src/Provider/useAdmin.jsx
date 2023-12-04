import { useContext } from "react";
import useAxiosPublick from "./useAxiosPublick";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user } = useContext()
    const axiosPublick = useAxiosPublick();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosPublick.get(`/users?email=${user.email}&user_rol=admin`);
            console.log(res)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;