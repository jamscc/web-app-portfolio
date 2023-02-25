import NavComp from './Nav-Comp';
import AboutSection from './About-Section';
import { useState } from 'react';
import PortfolioSection from './Portfolio-Section';
import { proj, fs } from './projects';
import ResSection from './Res-Section';
import '../css/style.css';

// header / nav
function HeaderSection() {
    // useState
    const st = '';
    const [dy, sDy] = useState(st);
    const cDy = (t) => {
        t.preventDefault();
        return sDy(t.target.id);
    };
    const sb = { color: ((dy === '' || dy === 'about') && '#ffffff') };
    // nav and sections
    return (
        <>
            <NavComp cDy={cDy} sb={sb} />
            <div>
                {dy === '' && (<AboutSection />)}
                {dy === 'main' && (<AboutSection />)}
                {dy === 'about' && (<AboutSection />)}
                {dy === 'portfolio' && (<PortfolioSection projects={proj} />)}
                {dy === 'res' && (<ResSection fs={fs} />)}
            </div>
        </>
    );
}

export default HeaderSection;