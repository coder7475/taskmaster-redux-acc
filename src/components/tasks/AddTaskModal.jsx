import { useForm } from 'react-hook-form';
import Modal from './../ui/Modal';

const AddTaskModal = ({ isOpen, setIsOpen}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Modal 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              title={"Programming Hero"} 
              content={"lorem Ipsum so ao"}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title</label>
                    <input 
                        className="w-full"
                        type="text" 
                        name="title" 
                        id='title'
                        {...register('name')} 
                    />
                </div>
                <button type='submit' className='p-1 border-2 mt-2 rounded-md hover:bg-slate-600 hover:text-white'>Submit</button>
            </form>

        </Modal>
    );
};

export default AddTaskModal;