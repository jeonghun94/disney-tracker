import styled from "styled-components";
import Header from "./Header";
import { useThemeStore } from "../zustand";

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

interface ILayout {
  children: React.ReactNode;
  isLoading: boolean;
  title: string;
  backBtn?: boolean;
}

const Layout = ({ isLoading, children, title, backBtn }: ILayout) => {
  const { isLight, changeTheme } = useThemeStore();
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            backBtn={backBtn}
            title={title}
            isLight={Boolean(isLight)}
            changeTheme={changeTheme}
          />
          {children}
        </>
      )}
    </Container>
  );
};

export default Layout;
