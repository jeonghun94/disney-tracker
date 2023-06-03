import styled from "styled-components";
import { useQuery } from "react-query";
import { character } from "../api";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const CharacterImg = styled.img`
  width: 50%;
  height: 230px;
  border-radius: 100%;
`;

const CharacterFilm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.itemBgColor};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

interface ICharacter {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const Character = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<ICharacter>(["info", id], () =>
    character(Number(id))
  );

  return (
    <Layout isLoading={isLoading} backBtn title={`${data?.name + ""}`}>
      <CharacterContainer>
        <CharacterImg src={data?.imageUrl} alt={data?.name} />
        {data?.films.map((film) => (
          <CharacterFilm>{film}</CharacterFilm>
        ))}
      </CharacterContainer>
    </Layout>
  );
};

export default Character;
