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
                <input type="text" name="name" {...register('name')} />
                <button type='submit'>Submit</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;