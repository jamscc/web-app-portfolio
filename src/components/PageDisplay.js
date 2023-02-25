import HeaderSection from './sections/Header-Section';
import FooterSection from './sections/Footer-Section';
import './css/style.css';

const PageDisplay = () => {
    return (
        <div className="em-cl">
            <HeaderSection />
            <FooterSection />
        </div>
    );
}
export default PageDisplay;