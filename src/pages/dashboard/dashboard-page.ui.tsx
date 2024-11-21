import { Project } from '../../entities/project.ts';
import { ProjectStatus } from '../../shared/enum/ProjectStatus.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchProjectQuery } from '../../features/project/fetch-project/fetch-project.mutation.ts';
import { ProjectProcessItem } from '../../features/project/fetch-project/proejct-process-item.ui.tsx';
import { ProjectItem } from '../../features/project/fetch-project/project-item.ui.tsx';

export const DashboardPageUi = () => {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState<Project[]>([]);
  const { data, error, isLoading } = useFetchProjectQuery();

  useEffect(() => {
    if (data?.data != null && Array.isArray(data.data)) {
      const transformedData = data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status as ProjectStatus,
        startAt: item.startAt,
        value: item.value,
        createAt: item.created_at,
      }));
      setDashboardData(transformedData ?? []);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">대시보드</h2>
          <p className="text-gray-600">프로젝트 현황 목록</p>
        </div>
        <button
          type="button"
          onClick={() => {
            navigate('/project/create');
          }}
        >
          프로젝트 생성하기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardData.map((item) => (
          <ProjectItem
            item={item}
            onClick={() => {
              navigate(`/project/${item.id}`);
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <ProjectProcessItem
          title={'총 프로젝트'}
          value={dashboardData.length}
        />
        <ProjectProcessItem
          title={'진행중'}
          value={
            dashboardData.filter((item) => item.status == ProjectStatus.ACTIVE)
              .length
          }
        />
        <ProjectProcessItem
          title={'대기중'}
          value={
            dashboardData.filter((item) => item.status == ProjectStatus.PENDING)
              .length
          }
        />
        <ProjectProcessItem
          title={'완료'}
          value={
            dashboardData.filter(
              (item) => item.status == ProjectStatus.COMPLETED
            ).length
          }
        />
      </div>
    </div>
  );
};
