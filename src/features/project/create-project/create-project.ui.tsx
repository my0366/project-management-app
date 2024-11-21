import { useNavigate } from 'react-router-dom';
import {
  CreateProjectSchema,
  CreateProjectSchemaType,
} from './create-proejct.contract.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {useCreateProjectMutation} from "./create-project.mutation.ts";
import showToast from "../../../shared/util/ToastUtil.ts";

export const CreateProject = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateProjectSchemaType>({
    resolver: zodResolver(CreateProjectSchema),
    mode: 'onChange',
  });

  const createProjectMutation = useCreateProjectMutation();

  const onSubmit = (formData: CreateProjectSchemaType) => {
    createProjectMutation.mutate(formData, {
      onSuccess: (data) => {
        if (data.error) {
          showToast.error(data.error.message);
        } else {
          window.alert('프로젝트가 성공적으로 생성되었습니다.');
          navigate('/dashboard');
        }
      },
      onError: (error) => {
        showToast.error(`프로젝트 생성에 실패했습니다. ${error}`);
      },
    });
  };

  return (
    <div className="flex flex-row justify-center items-center w-[900px]">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          프로젝트 생성
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 w-full">
              프로젝트 이름
            </label>
            <input
              type="text"
              {...register('title')}
              className="flex bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              설명
            </label>
            <input
              type="text"
              {...register('description')}
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              시작일
            </label>
            <input
              type="date"
              {...register('startAt')}
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
            />
            {errors.startAt && (
              <p className="text-red-500 text-sm">{errors.startAt.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              진행률
            </label>
            <input
              type="number"
              {...register('value', { valueAsNumber: true })}
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
            />
            {errors.value && (
              <p className="text-red-500 text-sm">{errors.value.message}</p>
            )}
          </div>
          <div className="flex flex-row justify-end items-end pt-10">
            <button
              type="submit"
              className={`py-2 px-4 pt rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isValid ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
              disabled={!isValid}
            >
              생성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
