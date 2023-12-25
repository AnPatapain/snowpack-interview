import {useEffect, useState} from "react";

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        let timeOutID = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeOutID);
        }
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;