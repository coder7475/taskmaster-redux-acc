import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/features/tasks/taskSlice";
import { useEffect, useState } from "react";
import TaskDetails from "./TaskDetails";

function Task({ item, dispatch, isOpen, setIsOpen, taskId, setTaskId }) {
  return (
    <div className="bg-secondary/10 rounded-md p-3 flex justify-between">
      <h1>{item.title}</h1>
      <div className="flex gap-3">
        <button onClick={() => handleModal(item.id)} className="grid place-content-center" title="Details">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
        </button>
        <button
          className="grid place-content-center"
          title="Done"
          onClick={() =>
            dispatch(updateStatus({ id: item.id, status: "done" }))
          }
        >
          <CheckIcon className="w-5 h-5 text-primary" />
        </button>
      </div>
    </div>
  );
}

const MyTasks = () => {
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);
  // console.log(userSpecificTasks);
  // console.log(name);
  useEffect(() => {
    dispatch(userTasks(name));
  }, [name, dispatch, tasks]);

  return (
    <div>
      <TaskDetails isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}></TaskDetails>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks.map((item) => (
          <Task key={item.id} item={item} dispatch={dispatch} setIsOpen={setIsOpen} isOpen={isOpen} taskId={taskId} setTaskId={setTaskId}></Task>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
