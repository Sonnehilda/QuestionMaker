import styled from "styled-components";
import { banner } from "../../assets/images";

const Background = styled.div`
  background-image: url(${banner});
  background-size: cover;

  background-repeat: no-repeat;

  width: 100vw;
  height: 40vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;
`;

const TitleWrapper = styled.div`
  filter: drop-shadow(0 0 0.5vh #000);
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 3vh;

  color: #fff;
  font-size: 6vh;
`;

const SubTitle = styled.h2`
  margin: 0;

  color: #efefef;
  font-size: 3vh;
  font-weight: 100;
`;

const Banner = () => {
  return (
    <Background>
      <TitleWrapper>
        <Title>Problem Maker</Title>
        <SubTitle>Make Your Own Various Problems!</SubTitle>
      </TitleWrapper>
    </Background>
  );
};

export default Banner;
