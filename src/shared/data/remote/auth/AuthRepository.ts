import { IAuthRepository } from './IAuthRepository.ts';
import {
    AuthTokenResponsePassword,
    SignInWithPasswordCredentials,
    SignUpWithPasswordCredentials,
    AuthResponse
} from '@supabase/supabase-js';
import { supabase } from '../../api.ts';
import * as console from "node:console";

export class AuthRepository implements IAuthRepository {
    async signIn(request: SignInWithPasswordCredentials): Promise<AuthTokenResponsePassword> {
        try {
            return supabase.auth.signInWithPassword(request);
        } catch(e) {
            console.error(e);
            throw e;
        }
    }

    async signUp(request: SignUpWithPasswordCredentials): Promise<AuthResponse> {
        try {
            return supabase.auth.signUp(request);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    signOut(): Promise<void> {
        return Promise.resolve(undefined);
    }
}