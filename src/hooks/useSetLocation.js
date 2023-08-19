import { useEffect } from "react";

export function useSetLocation(location) {
    useEffect(() => {
        const setLocationOnLocalStorage = () => {
            if(!location) return;
            localStorage.setItem('location', location);
        }
        setLocationOnLocalStorage();
    }, [location])
}