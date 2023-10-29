import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal"

// export default function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false)

//     return <>
//         <Button onClick={() => setIsOpenModal(s => !s)}>{isOpenModal ? " بستن" : " کابین جدید"}</Button>
//         {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}> <CreateCabinForm
//             onCloseModal={() => setIsOpenModal(false)}
//         /></Modal>}</>
// }


//with compound component 

export default function AddCabin() {
    return <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>کابین جدید</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm />
        </Modal.Window>
    </Modal>
}