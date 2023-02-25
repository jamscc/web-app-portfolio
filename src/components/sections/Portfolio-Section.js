import ProjectComp from './Project-Comp';

// portfolio / project
function PortfolioSection({ projects }) {
    return (
        <>
            <ProjectComp projects={projects} />
        </>
    );
}

export default PortfolioSection;