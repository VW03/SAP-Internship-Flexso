/**********************************/
/* @since 31/03/2025              */
/* @author Vera Wise              */
/**********************************/

// Set the current year in the footer
function setTheCurrentYear() {
    var footerYearElement = document.getElementById("footer-year");
    if (footerYearElement) footerYearElement.innerHTML = new Date().getFullYear();
}

setTheCurrentYear();