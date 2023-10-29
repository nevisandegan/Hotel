import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from '../features/authentication/UserAvatar'

const StyleHeader = styled.header`
 background-color:var(--color-grey-0);
padding: 1.2rem 4.8 rem;
border-bottom: 1px solid var(--color-grey-100);
display: flex;
gap: 2.4rem;
align-items: center;
justify-content: flex-end;

`



export default function Header() {
  return <StyleHeader>
    <UserAvatar />
    <HeaderMenu />
  </StyleHeader>;
}
