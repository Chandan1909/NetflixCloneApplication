import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const usebillBoard =()=>{
    const {data,error,isLoading}=useSWR('api/random',fetcher,{
        revalidateIfStale:false,
        revalidateOnReconnect:false,
        revalidateOnFocus:false,

    });

    return {data,error,isLoading}
}

export default usebillBoard;