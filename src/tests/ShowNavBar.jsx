
const ShowNavBar = (ShowNav, setShowNav) => 
{
    setShowNav(oldState => !oldState)

    const navList = document.querySelector(".nav-content");

    if(ShowNav === true) {
        navList.classList.replace("hidden", "block");
        navList.classList.add("animate__fadeInLeft");
        navList.classList.remove("animate__fadeOutLeft")
    }
    else
    {
        setTimeout(() => 
        {
            navList.classList.replace("block", "hidden");
        },4000)
        navList.classList.add("animate__fadeOutLeft");
        navList.classList.remove("animate__fadeInLeft");
    }
    return ShowNav;
}

export default ShowNavBar;