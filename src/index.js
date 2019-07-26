import drawHeader from './staticContent';

const conatinerID = 'content';
const containerDiv = document.getElementById(conatinerID);

drawHeader(conatinerID);

const sections = ['Contact', 'Menu'];

// create div to contain tabs
const navBarDiv = document.createElement("div");
navBarDiv.id = 'navBar';

// add navigation tabs
for (let i = 0; i < sections.length; i++) {
    let element = document.createElement("div");
    element.id = "navBtn-" + sections[i];
    element.classList.add("navBtn");
    element.innerHTML = sections[i];
    element.addEventListener("click", function() {
        selectSection(sections[i]);
    });
    navBarDiv.appendChild(element);
}
containerDiv.appendChild(navBarDiv);

// add div for tab content
const tabContentDiv = document.createElement("div");
tabContentDiv.id = "tabContent";
tabContentDiv.innerText = "Placeholder text";
containerDiv.appendChild(tabContentDiv);

// add logic to switch 
const selectSection = (section) => {
    tabContentDiv.innerHTML = `This is the ${section} content.`;
}

