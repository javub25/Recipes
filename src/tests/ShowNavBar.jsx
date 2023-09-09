
const ShowNavBar = (ShowNav, setShowNav) => 
{
    setShowNav(oldState => !oldState)

    const navList = document.querySelector(".nav-content");
    let time;
    const section = document.querySelector("section");


    if(ShowNav === true) {
        time = setTimeout(() => 
        {
            navList.classList.replace("block", "hidden");
        },1500)
        navList.classList.add("animate__fadeOutLeft");
        navList.classList.remove("animate__fadeInLeft");
        section.classList.replace("mobile:mt-96", "mobile:mt-20")
    }
    else
    {
        clearTimeout(time);
        section.classList.replace("mobile:mt-20", "mobile:mt-96")
        navList.classList.add("block", "animate__fadeInLeft");
        navList.classList.remove("hidden", "animate__fadeOutLeft")
    }
    return ShowNav;
}

export default ShowNavBar;