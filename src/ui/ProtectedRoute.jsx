import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SpinnerFull from "./SpinnerFull";






const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useUser();


    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate('/login')
    }, [isAuthenticated, isLoading, navigate])

    if (isLoading) {
        return <SpinnerFull />
    }

    if (isAuthenticated) return children

}

export default ProtectedRoute;
