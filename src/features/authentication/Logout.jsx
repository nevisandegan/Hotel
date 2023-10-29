
import ButtonIcon from '../../ui/ButtonIcon'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { useLogout } from './useLogout';
import SpinerMini from '../../ui/SpinnerMini'


const Logout = () => {
    const { logout, isLoading } = useLogout()
    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            {!isLoading ? <HiArrowRightOnRectangle /> : <SpinerMini />}
        </ButtonIcon>
    );
}

export default Logout;
