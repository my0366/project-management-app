import { SignUpWithPasswordCredentials } from '@supabase/auth-js/src/lib/types.ts';
import {
  AuthResponse,
  AuthTokenResponsePassword,
  SignInWithPasswordCredentials,
} from '@supabase/supabase-js';

export abstract class IAuthRepository {
  abstract signIn(
    request: SignInWithPasswordCredentials
  ): Promise<AuthTokenResponsePassword>;

  abstract signUp(
    request: SignUpWithPasswordCredentials
  ): Promise<AuthResponse>;

  abstract signOut(): Promise<void>;
}
