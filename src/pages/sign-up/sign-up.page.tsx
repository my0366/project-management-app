import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { type SignInWithPasswordCredentials } from '@supabase/supabase-js';
import showToast from '../../shared/util/ToastUtil.ts';
import { useSignUpMutation } from '../../features/session/sign-up.mutation.ts';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInWithPasswordCredentials>({
    phone: '',
    password: '',
  });

  const signUpMutation = useSignUpMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUpMutation.mutate(formData, {
      onSuccess: (data) => {
        if (data.error) {
          showToast.error(data.error.message);
        } else {
          navigate('/core/dashboard');
        }
      },
      onError: (error) => {
        console.error('오류가 발생했습니다.', error.message);
      },
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          회원가입{' '}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              type="text"
              value={'email' in formData ? formData.email : ''}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};
