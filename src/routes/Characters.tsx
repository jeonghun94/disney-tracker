import styled from "styled-components";
import { useQuery } from "react-query";
import { characters } from "../api";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const DCharacters = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 0px 10px;
`;

const DCharacter = styled.div`
  background-color: ${(props) => props.theme.itemBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    transition: all 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      transform: scale(1.05);
    }
  }
`;

const DImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

const Characters = () => {
  const { isLoading, data } = useQuery<ICharacter[]>("characters", characters);
  return (
    <Layout isLoading={isLoading} title="Disney Characters">
      <DCharacters>
        {data?.slice(0, 100).map((coin) => (
          <DCharacter key={coin.id}>
            <Link to={`/character/${coin.id}`}>
              <DImg src={`${coin.imageUrl}`} />
              {coin.name.length > 10
                ? coin.name.slice(0, 10) + "..."
                : coin.name}
            </Link>
          </DCharacter>
        ))}
      </DCharacters>
    </Layout>
  );
};
export default Characters;
