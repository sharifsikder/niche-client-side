import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider";


const useAuht = () => {

    return useContext(AuthContext)
}
export default useAuht;