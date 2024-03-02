import Modal from './../ui/Modal';

const AddTaskModal = ({ isOpen, setIsOpen}) => {
    return (
        <Modal 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              title={"Programming Hero"} 
              content={"lorem Ipsum so ao"}
        >
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam fuga iusto reiciendis molestiae. Quibusdam ex obcaecati, neque veritatis sequi laborum, temporibus praesentium repudiandae error eius dicta quam quasi beatae iusto?
            </p> 
        </Modal>
    );
};

export default AddTaskModal;