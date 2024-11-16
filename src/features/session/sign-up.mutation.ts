import {useMutation} from "@tanstack/react-query";
import {SignUpWithPasswordCredentials} from "@supabase/supabase-js";
import {AuthRepository} from "../../shared/data/remote/auth/AuthRepository.ts";

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: async (request: SignUpWithPasswordCredentials) => {
            const authRepository = new AuthRepository();
            return await authRepository.signUp(request);
        },
        onSuccess: (data) => {
            const accessToken = data?.data?.session?.access_token ?? "";
            const refreshToken = data?.data?.session?.refresh_token ?? "";
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
        },
        onError: (error) => {
            console.error("로그인 실패:", error.message);
        },
    });
};