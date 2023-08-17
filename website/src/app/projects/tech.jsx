export const TECH = {
    UNDISCLOSED: {
        name: 'undisclosable'
    },
    REACT: {
        name:"React.js",
        src: "/tech/React_icon.svg",
        alt: "React.js logo",
    },
    NEXT: {
        name:"Next.js",
        src: "/tech/Nextjs_logo.svg",
        alt: "Next.js logo",
    },
}

const TECH_ARR = Object.values(TECH).map(tech => JSON.stringify(tech))

export function getTechImage(tech) {

    let tech_strinified = JSON.stringify(tech)

    
    if(tech === TECH.UNDISCLOSED) {
        return (<p className=" my-3">Techstack is not disclosable.</p>);
    }
    else if (TECH_ARR.some(t => t === tech_strinified)) {
        return (<img className="tech-logo" src={tech.src} alt={tech.alt}></img>);
    }
    else {
        return <p>Empty</p>
    }
}