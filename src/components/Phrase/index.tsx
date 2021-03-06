import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface PhraseProps {
  animation?: string;
  duration?: string;
  mainphrase: string;
  subphrase: string[];
}

const Phrase = ({
  animation,
  duration,
  mainphrase,
  subphrase,
}: PhraseProps) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <PhraseWrapper>
        <MainPhrase>{mainphrase}</MainPhrase>
        {subphrase?.map((p, i) => (
          <SubPhrase key={i}>{p}</SubPhrase>
        ))}
      </PhraseWrapper>
    </Background>
  );
};

const Background = styled.div`
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  background-color: rgba(0, 0, 0, 0.025);

  display: flex;
`;

const PhraseWrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPhrase = styled.p`
  margin: 0;
  margin-bottom: 3vh;

  font-size: 4vh;
  font-weight: 600;
  text-align: center;
`;

const SubPhrase = styled.p`
  margin: 0;
  margin-bottom: 1.5vh;

  font-size: 2vh;
  font-weight: 100;
  text-align: center;

  :last-child {
    margin-bottom: 0;
  }
`;

export default Phrase;
