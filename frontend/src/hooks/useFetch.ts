import {AxiosRequestConfig} from "axios";
import {useState, useEffect} from "react";
import BaseService from "../services/api/BaseService";

interface FetchState<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

const useFetch = <T = unknown>(config: AxiosRequestConfig, deps: any[]) => {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        error: null,
        loading: false
    })

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            if (!isMounted) return;
            setState({data: null, error: null, loading: true});
            try {
                const response = await BaseService.get(config.url as string, {params: config.params});
                if (isMounted) {
                    setState({data: response.data, error: null, loading: false});
                }
            } catch (error) {
                if (isMounted) {
                    setState({data: null, error: null, loading: false});
                }
            }
        }

        if (config.params.q !== "") {
            fetchData()
        }

        return () => {
            isMounted = false;
        };
    }, [...deps])

    return [state.data, state.error, state.loading];
}
export default useFetch;