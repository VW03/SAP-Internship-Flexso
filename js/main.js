/**********************************/
/* @since 31/03/2025              */
/* @author Vera Wise              */
/**********************************/

// Content Loader
function loadExternalContent(DivId, url) {
    let xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
            if(xmlhttp.status === 200) {
                document.getElementById(DivId).innerHTML = xmlhttp.responseText;
                let scripts = document.getElementById(DivId).getElementsByTagName('script');
                for (let i = 0; i < scripts.length; i++) {
                    let script = document.createElement('script');
                    script.text = scripts[i].text;
                    document.body.appendChild(script);
                }
                initializeCollapsibleSections();
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// Load external content
document.addEventListener('DOMContentLoaded', function() {
    loadExternalContent("header", "/SAP-Internship-Flexso/includes/header.html");
    loadExternalContent("footer", "/SAP-Internship-Flexso/includes/footer.html");
    loadExternalContent("sprint1", "/SAP-Internship-Flexso/includes/sprint1.html");
    loadExternalContent("sprint2", "/SAP-Internship-Flexso/includes/sprint2.html");
    loadExternalContent("sprint3", "/SAP-Internship-Flexso/includes/sprint3.html");
});

function showPopup(imgElement) {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImage");
    popupImg.src = imgElement.src; // Set the popup image source to the clicked image
    popup.style.display = "flex";  // Show the popup
}

function hidePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none";  // Hide the popup
}

function initializeCollapsibleSections() {
    const sections = document.querySelectorAll('.main-section-week');
    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (h2) {
            h2.removeEventListener('click', toggleSection);
            h2.addEventListener('click', toggleSection);
            section.classList.add('collapsed');
        }
    });
}

function toggleSection(event) {
    const section = event.target.closest('.main-section-week');
    if (section) {
        section.classList.toggle('collapsed');
    }
}