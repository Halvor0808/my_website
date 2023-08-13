import NavList from "./navList";


const Header = () => {

    const tabs = [
        "home",
        "projects"
    ]
    return (
        <NavList tabs={tabs}></NavList>
    )
}

export default Header;