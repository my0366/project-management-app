import {Project} from "../../entities/project.ts";
import {ProjectStatus} from "../../shared/enum/ProjectStatus.ts";


interface ProjectItemProps {
    item: Project;
}

export const ProjectItem = (props: ProjectItemProps) => {

    const getStatusStyle = (status: ProjectStatus) => {
        switch (status) {
            case ProjectStatus.ACTIVE:
                return 'bg-green-100 text-green-800';
            case ProjectStatus.PENDING:
                return 'bg-yellow-100 text-yellow-800';
            case ProjectStatus.COMPLETED:
                return 'bg-blue-100 text-blue-800';
        }
    };

    
    return (
        <div
            key={props.item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
            <div className="flex justify-between props.items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-600">{props.item.title}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(props.item.status)}`}>
                    {props.item.status}
                </span>
            </div>
            <p className="text-gray-600 mb-2">{props.item.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 pr-4">{props.item.startAt}</span>
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{width: `${props.item.value}%`}}
                    ></div>
                </div>
            </div>
        </div>
    )
}