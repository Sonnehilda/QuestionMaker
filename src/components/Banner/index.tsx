import styled from "styled-components";
import { banner } from "../../assets/images";

const Banner = () => {
  return (
    <Background>
      <TitleWrapper>
        <Title>Question Maker</Title>
        <SubTitle>Make Your Own Various Questions!</SubTitle>
      </TitleWrapper>
    </Background>
  );
};

const Background = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;

  width: 100vw;
  height: 35vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;
`;

const TitleWrapper = styled.div`
  filter: drop-shadow(0 0 0.5vh rgba(0, 0, 0, 0.75));
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

export default Banner;
