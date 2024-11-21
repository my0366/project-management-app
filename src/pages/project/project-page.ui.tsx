import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProjectDetailQuery } from '../../features/project/fetch-project/fetch-project.mutation.ts';
import { useEffect } from 'react';
import { formatDate } from '../../shared/util/DateUtil.ts';

export const ProjectPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useFetchProjectDetailQuery(id ?? '');

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, []);

  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false },
    { id: 6, title: 'Task 6', completed: false },
    { id: 7, title: 'Task 7', completed: false },
    { id: 7, title: 'Task 7', completed: false },
    // Add more tasks as needed
  ];

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-row rounded-lg bg-white h-[500px]">
      {/* 왼쪽 섹션 */}
      <div className="flex-col p-8 rounded-lg max-w-md w-screen">
        <h2 className="text-gray-700 text-xl font-bold">프로젝트 명</h2>
        <h3 className="bg-gray-300 text-gray-700 p-2 mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          {data?.data?.title}
        </h3>
        <h2 className="text-gray-700 text-xl font-bold">프로젝트 설명</h2>
        <h3 className="bg-gray-300 text-gray-700 p-2 mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          {data?.data?.description}
        </h3>
        <h2 className="text-gray-700 text-xl font-bold">프로젝트 시작일</h2>
        <h3 className="bg-gray-300 text-gray-700 p-2 mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          {data?.data?.startAt}
        </h3>
        <h2 className="text-gray-700 text-xl font-bold">
          진행율({data?.data?.value}%)
        </h2>
        <div className="bg-gray-200 rounded-full h-2.5 mb-3 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${data?.data?.value}%` }}
          ></div>
        </div>
        <h2 className="text-gray-700 text-xl font-bold">생성일</h2>
        <h3 className="bg-gray-300 text-gray-700 p-2 mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          {data?.data?.created_at ? formatDate(data.data.created_at) : ''}
        </h3>
      </div>
      {/* 오른쪽 섹션 */}
      <div className="p-8 max-w-md w-screen overflow-y-auto">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-gray-700 text-xl font-bold">할일 목록</h2>
          <button
            type="button"
            className="bg-purple-200 px-4 py-2 rounded text-purple-800"
          >
            할 일 추가
          </button>
        </div>
        <ul className="flex flex-col">
          {tasks.map((task) => (
            <div key={task.id}>
              <div className="bg-neutral-300 rounded-md p-4 flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-600">
                  {task.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    task.completed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {task.completed ? '완료' : '미완료'}
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
