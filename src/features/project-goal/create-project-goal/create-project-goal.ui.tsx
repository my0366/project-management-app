import { Modal } from '@mui/material';
import * as React from 'react';
import { useCreateProjectGoalMutation } from './create-project-goal.mutation.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateProjectGoalSchema,
  CreateProjectGoalSchemaType,
} from './create-project-goal.contract.ts';
import showToast from '../../../shared/util/ToastUtil.ts';

export const customModalStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// components/TaskModal.tsx
interface CreateProjectGoalModalProps {
  project_id: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectGoalModal = ({
  project_id,
  isOpen,
  onClose,
}: CreateProjectGoalModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateProjectGoalSchemaType>({
    resolver: zodResolver(CreateProjectGoalSchema),
    mode: 'onChange',
  });

  const useProjectGoalMutation = useCreateProjectGoalMutation(project_id);

  const onSubmit = (formData: CreateProjectGoalSchemaType) => {
    console.log(formData);
    useProjectGoalMutation.mutate(formData, {
      onSuccess: (data) => {
        if (data.error) {
          showToast.error(data.error.message);
        } else {
          window.alert('프로젝트 목표가 성공적으로 생성되었습니다.');
          onClose();
        }
      },
      onError: (error) => {
        showToast.error(`프로젝트 생성에 실패했습니다. ${error}`);
      },
    });
  };

  return (
    <Modal open={isOpen} style={customModalStyles} onClose={onClose}>
      <div className="bg-white p-6 rounded-lg w-screen max-w-sm">
        <h2 className="text-gray-700 text-xl font-bold mb-4">할 일 추가</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('description')}
            className="flex bg-gray-300 text-gray-700 p-2 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="할 일을 입력하세요"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              시작일
            </label>
            <input
              type="date"
              {...register('endAt')}
              className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              취소
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-200 rounded ${isValid ? 'bg-blue-500' : 'bg-blue-200'}`}
              disabled={!isValid} // Disable submit if form is invalid
            >
              추가
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
