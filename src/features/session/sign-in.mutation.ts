import {AuthRepository} from "../../shared/data/remote/auth/AuthRepository.ts";
import {useMutation} from "@tanstack/react-query";
import {SignInWithPasswordCredentials} from "@supabase/supabase-js";

export const useSignInMutation = () => {
    const mutation = useMutation({
        mutationFn: async (request : SignInWithPasswordCredentials) => {
            const authRepository = new AuthRepository();
            return await authRepository.signIn(request);
        },
        onSuccess: (data) => {
            const accessToken = data?.data?.session?.access_token ?? "";
            const refreshToken = data?.data?.session?.refresh_token ?? "";
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
        },
        onError: (error) => {
            console.error("로그인 실패 : ", error.message);
        },
    });

    return mutation;
};

