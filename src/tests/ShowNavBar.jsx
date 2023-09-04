
const ShowNavBar = (ShowNav, setShowNav) => 
{
    setShowNav(oldState => !oldState)

    const navList = document.querySelector(".nav-content");
    let time;


    if(ShowNav === true) {
        time = setTimeout(() => 
        {
            navList.classList.replace("block", "hidden");
        },1500)
        navList.classList.add("animate__fadeOutLeft");
        navList.classList.remove("animate__fadeInLeft");
    }
    else
    {
        clearTimeout(time);
        navList.classList.replace("hidden", "block");
        navList.classList.add("animate__fadeInLeft");
        navList.classList.remove("animate__fadeOutLeft")
    }
    return ShowNav;
}

export default ShowNavBar;