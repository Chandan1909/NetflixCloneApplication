import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { FaLessThanEqual } from 'react-icons/fa';

const useMovieList = () =>{
    const {data, error, isLoading} =useSWR('api/movies',fetcher,{
        revalidateOnReconnect:false,
        revalidateOnFocus:false,
        revalidateIfStale:false,
    })

    return {
        data,error,isLoading
    }
}

export default useMovieList;