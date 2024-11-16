import {createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey=  import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)

export const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

// export const axiosConfig: AxiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_BASEURL,
//     headers,
// })