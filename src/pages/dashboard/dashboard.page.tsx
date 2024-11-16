
import {Project} from "../../entities/project.ts";
import {ProjectStatus} from "../../shared/enum/ProjectStatus.ts";
import {ProjectProcessItem} from "../../features/project/proejct-process-item.ui.tsx";
import {ProjectItem} from "../../features/project/project-item.ui.tsx";
import {useNavigate} from "react-router-dom";

export const dashboardData: Project[] = [
    {
        id: 1,
        title: "프로젝트 A",
        description: "진행중인 프로젝트",
        status: ProjectStatus.ACTIVE,
        startAt: "2024-11-15",
        value: 75
    },
    {
        id: 2,
        title: "프로젝트 B",
        description: "신규 프로젝트",
        status: ProjectStatus.COMPLETED,
        startAt: "2024-11-14",
        value: 30
    },
    {
        id: 3,
        title: "프로젝트 C",
        description: "완료된 프로젝트",
        status: ProjectStatus.PENDING,
        startAt: "2024-11-13",
        value: 100
    },
];


export const DashboardPage = () => {

    const navigate = useNavigate();
    return (
        <div className="p-6">
            <div className="flex flex-row justify-between items-center">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">대시보드</h2>
                    <p className="text-gray-600">프로젝트 현황 목록</p>
                </div>
                <button type="button" onClick={() => {
                    navigate("/core/create-project")
                }}>프로젝트 생성하기 </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardData.map((item) => (
                    <ProjectItem item={item}/>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <ProjectProcessItem title={"총 프로젝트"} value={dashboardData.length}/>
                <ProjectProcessItem title={"진행중"}
                                    value={dashboardData.filter(item => item.status == ProjectStatus.ACTIVE).length}/>
                <ProjectProcessItem title={"대기중"}
                                    value={dashboardData.filter(item => item.status == ProjectStatus.PENDING).length}/>
                <ProjectProcessItem title={"완료"}
                                    value={dashboardData.filter(item => item.status == ProjectStatus.COMPLETED).length}/>
            </div>
        </div>
    );
};
