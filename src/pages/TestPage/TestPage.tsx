import robin1 from '../../assets/imgs/robins-art-shack-logo-2.png';
import robin2 from '../../assets/imgs/robins-art-shack-logo.png';
import './TestPage.css'

const TestPage = () => {
  return (
    <>
      <div className="test-page header-text">
        Test Page Where You Can Decide Stuff!
      </div>
      <div className="image-test-page">
        <span>Which one do you like better?</span>
        <div className="image-grid-test">
          <img src={robin1} alt="Robin's Art Shack Logo 1" />
          <img src={robin2} alt="Robin's Art Shack Logo 2" />
        </div>
      </div>
    </>
  );
};

export default TestPage;
