import {ProjectProcessItem} from "../../features/dashboard/ProjectProcessItem.tsx";
import {ProjectItem} from "../../features/dashboard/ProjectItem.tsx";
import {DashboardItem} from "../../entities/dashboard/DashboardItem.ts";
import {ProjectStatus} from "../../shared/enum/ProjectStatus.ts";

export const dashboardData: DashboardItem[] = [
    {
        id: 1,
        title: "프로젝트 A",
        description: "진행중인 프로젝트",
        status: ProjectStatus.ACTIVE,
        date: "2024-11-15",
        value: 75
    },
    {
        id: 2,
        title: "프로젝트 B",
        description: "신규 프로젝트",
        status: ProjectStatus.COMPLETED,
        date: "2024-11-14",
        value: 30
    },
    {
        id: 3,
        title: "프로젝트 C",
        description: "완료된 프로젝트",
        status: ProjectStatus.PENDING,
        date: "2024-11-13",
        value: 100
    },
];


export const DashboardPage = () => {

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">대시보드</h2>
                <p className="text-gray-600">프로젝트 현황 목록</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardData.map((item) => (
                    <ProjectItem item={item}/>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <ProjectProcessItem title={"총 프로젝트"} value={dashboardData.length}/>
                <ProjectProcessItem title={"진행중"} value={dashboardData.filter(item => item.status == ProjectStatus.ACTIVE).length}/>
                <ProjectProcessItem title={"대기중"} value={dashboardData.filter(item => item.status == ProjectStatus.PENDING).length}/>
                <ProjectProcessItem title={"완료"} value={dashboardData.filter(item => item.status == ProjectStatus.COMPLETED).length}/>
            </div>
        </div>
    );
};
