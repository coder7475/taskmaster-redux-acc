import Modal from '../components/ui/Modal';

const AddTaskModal = ({ isOpen, setIsOpen}) => {
    return (
        <Modal 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              title={"Programming Hero"} 
              content={"lorem Ipsum so ao"}
        />
    );
};

export default AddTaskModal;