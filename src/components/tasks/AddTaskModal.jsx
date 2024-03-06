import { useForm } from 'react-hook-form';
import Modal from './../ui/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/taskSlice';

const AddTaskModal = ({ isOpen, setIsOpen}) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        dispatch(addTask(data));
        onCancel()
    }

    return (
        <Modal 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              title={"Programming Hero"} 
              content={"lorem Ipsum so ao"}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* title */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className='mb-2'>Title</label>
                    <input 
                        className="w-full"
                        type="text" 
                        id='title'
                        {...register('title')} 
                    />
                </div>
                {/* description */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="description" className='mb-2'>Description</label>
                    <input 
                        className="w-full"
                        type="text" 
                        id='description'
                        {...register('description')} 
                    />
                </div>
                {/* deadline */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className='mb-2'>Deadline</label>
                    <input 
                        className="w-full"
                        type="date" 
                        name="date" 
                        id='date'
                        {...register('date')} 
                    />
                </div>
                {/* assigned to */}
                <div className='flex flex-col mb-5'>
                    <label htmlFor="assignedTo" className='mb-2'>Assign To</label>
                    <select 
                        className="w-full rounded-md" 
                        id="assignedTo"
                        {...register('assignedTo')}
                    >
                        <option value="Mir Hussain">Mir Hossain</option>
                        <option value="Robiul Hossain">Robiul Hossain</option>
                        <option value="Nahid Hassan">Nahid Hassan</option>
                    </select>
                </div>
                {/* priority */}
                <div className='flex flex-col mb-5'>
                    <label htmlFor="priority" className='mb-2'>Assign To</label>
                    <select 
                        className="w-full rounded-md" 
                        id="priority"
                        {...register('priority')}
                    >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button 
                     onClick={() => onCancel()}
                     type='button' className='btn btn-danger'>Cancel</button>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>

        </Modal>
    );
};

export default AddTaskModal;