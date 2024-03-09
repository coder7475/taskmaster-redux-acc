import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/taskSlice";

function Task({ item, dispatch }) {
  return (
    <div className="bg-secondary/10 rounded-md p-3 flex justify-between">
      <h1>{item.title}</h1>
      <div className="flex gap-3">
        <button className="grid place-content-center" title="Details">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
        </button>
        <button 
          className="grid place-content-center" 
          title="Done" 
          onClick={() => dispatch(updateStatus( { id: item.id, status: "done"}))}>
          <CheckIcon className="w-5 h-5 text-primary" />
        </button>
      </div>
    </div>
  );
}

const MyTasks = () => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks.map((item) => (
          <Task key={item.id} item={item} dispatch={dispatch}></Task>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
