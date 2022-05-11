import Banner from "../../components/Banner";
import Phrase from "../../components/Phrase";

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
          "You can study yourself by going over the questions you've manufactured!",
        ]}
      />
      <Phrase
        animation="fade-right"
        duration="1500"
        mainphrase={["How to use?"]}
        subphrase={[
          'By clicking the "Make Questions" tab in the header,',
          "you can start manufacturing various questions.",
          "",
          'By clicking the "Saved Questions" tab in the header,',
          "you can review all the manufactured questions.",
        ]}
      />
    </>
  );
};

export default Home;
