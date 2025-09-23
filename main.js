let contentDom = [];

////////////// seperate content array from tags
let start = [];
let tools = [];
let definitions = [];

for (let i = 0; i < content.length; i++) {
    if (content[i].tags.includes("start")) {
        start.push(content[i]);
    }
    if (content[i].tags.includes("tools")) {
        tools.push(content[i]);
    }
    if (content[i].tags.includes("definitions")) {
        definitions.push(content[i]);
    }
}
////////////////////////////////////

const sidebar = document.createElement("div");
document.body.appendChild(sidebar);
sidebar.id = "sidebar";

const startLink = document.createElement("h2");
startLink.innerText = "Start";
startLink.classList.add("links");
startLink.addEventListener("click", function () {
    clearContentDom();
    createDoms(start);
    // currentLink(startLink);
    setActiveLink(startLink);


});
sidebar.appendChild(startLink);

const toolsLink = document.createElement("h2");
toolsLink.innerText = "Tools";
toolsLink.classList.add("links");
toolsLink.addEventListener("click", function () {
    clearContentDom();
    createDoms(tools);
    // currentLink(toolsLink);
    setActiveLink(toolsLink);


});
sidebar.appendChild(toolsLink);

const defLink = document.createElement("h2");
defLink.innerText = "Definitions";
defLink.classList.add("links");
defLink.addEventListener("click", function () {
    clearContentDom();
    createDoms(definitions);
    //currentLink(defLink);
    setActiveLink(defLink);
});
sidebar.appendChild(defLink);


function setActiveLink(activeLink) {
    document.querySelectorAll('.links.activeLink').forEach(link => {
        link.classList.remove('activeLink');
    });
    activeLink.classList.add('activeLink');
}

////////////////////////////////////



function clearContentDom() {
    // DOM-Elemente aus dem DOM entfernen
    contentDom.forEach(element => {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });

    // Array leeren
    contentDom.length = 0;
}

function createDoms(objects) {
    for (let i = 0; i < objects.length; i++) {

        contentDom[i] = document.createElement("div");
        document.body.appendChild(contentDom[i]);

        const link = document.createElement("a");
        link.href = objects[i].url;
        link.target = "_blank"; // In neuem Tab öffnen
        link.title = "open " + objects[i].url; // Tooltip
        contentDom[i].appendChild(link);

        const title = document.createElement("h3");
        title.innerText = objects[i].title;
        link.appendChild(title);

        const subtitle = document.createElement("p");
        subtitle.innerText = objects[i].subtitle;
        link.appendChild(subtitle);

        const image = document.createElement("img");
        image.src = objects[i].img;
        image.alt = objects[i].title;
        image.width = 50;
        link.appendChild(image);

    }
}

// console.log(tools);