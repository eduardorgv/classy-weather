import { useEffect } from "react";

export function useGetLocation(setLocation) {
    useEffect(() => {
        const setLocationFromLocalStorage = () => {
            setLocation(localStorage.getItem('location') || '');
        }
        setLocationFromLocalStorage();
    }, [])
}