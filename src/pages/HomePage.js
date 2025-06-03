import SubmitButton from "../components/SubmitButton";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
        
            <h1 className="home-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <h5 className="home-text">Nullam ultricies magna ac diam consequat, nec vulputate nulla laoreet. Etiam viverra fringilla </h5>
            <SubmitButton text="Get Started" onClick={() => alert('Submitted!')} />
        </div>
    );
  }