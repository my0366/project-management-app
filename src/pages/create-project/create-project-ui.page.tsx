import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {RequestCreateProject} from "../../shared/data/remote/core/IProjectRepository.ts";
import {ProjectStatus} from "../../shared/enum/ProjectStatus.ts";
import showToast from "../../shared/util/ToastUtil.ts";
import {useCreateProjectMutation} from "../../features/project/create-project.mutation.ts";

export const CreateProject = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RequestCreateProject>({
        description: "", startAt: "", status: ProjectStatus.COMPLETED, title: "", value: 0,
    });

    const createProjectMutation = useCreateProjectMutation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        createProjectMutation.mutate(formData, {
                onSuccess: (data) => {
                    if (data.error) {
                        showToast.error(data.error.message);
                    } else {
                        navigate("/core/dashboard");
                    }
                },
                onError: (error) => {
                    console.error("오류가 발생했습니다.", error.message);
                },
            }
        );
    };

    return (
        <div className="flex flex-row justify-center items-center w-[900px]">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">프로젝트 생성</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 w-full">프로젝트 이름</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="flex bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">설명</label>
                        <input
                            type="text"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">시작일</label>
                        <input
                            type="date"
                            value={formData.startAt}
                            onChange={(e) => setFormData({...formData, startAt: e.target.value})}
                            className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">진행률</label>
                        <input
                            type="number"
                            value={formData.value}
                            onChange={(e) => setFormData({...formData, value: Number(e.target.value)})}
                            className="bg-gray-300 text-gray-700 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 color"
                        />
                    </div>
                    <div className="flex flex-row justify-end items-end pt-10">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-4 pt rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            생성하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};