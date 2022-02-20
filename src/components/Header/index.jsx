import * as S from "./style";
import { GiCircuitry } from "react-icons/gi";

const Header = () => {
  return (
    <S.Container>
      <S.Brand>
        <GiCircuitry size="1.5em" color="#2BA19F" />
        <span>AgileSoftware</span>
      </S.Brand>
    </S.Container>
  );
};

export default Header;
