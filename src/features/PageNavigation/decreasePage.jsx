/**
 * The function decreases the value of the page by 1 if it is greater than 0 and then logs the updated
 * page value.
 */
const decreasePage = (page, ftn) => {
    
    if(page>0) ftn(oldState => oldState-=1);

    console.log(page);
}
export default decreasePage;
