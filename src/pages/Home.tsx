import Banner from "../components/Banner";
import Phrase from "../components/Phrase";

const Home = () => {
  return (
    <>
      <Banner />
      <Phrase
        animation="fade-left"
        duration="1000"
        mainphrase={["What is Question Maker?"]}
        subphrase={[
          "Question Maker is a website where you can create questions.",
          "Questions can be manufactured in many different types.",
          "You can study yourself by making questions and reviewing them.",
        ]}
      />
    </>
  );
};

export default Home;
