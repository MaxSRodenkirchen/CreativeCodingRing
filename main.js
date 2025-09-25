let contentDom = [];
const mainContainer = document.getElementById("mainContainer");
////////////// seperate content array from tags

for (let j = 0; j < tags[0].length; j++) {
    for (let i = 0; i < content.length; i++) {
        if (content[i].tags.some(tag => tag.toLowerCase() === tags[0][j].toLowerCase())) {
            tags[1][j].push(content[i]);
        }
    }
}
// ////////////////////////////////////
// create sidebar with links

const sidebar = document.createElement("div");

mainContainer.appendChild(sidebar);
sidebar.id = "sidebar";

for (let j = 0; j < tags[0].length; j++) {
    let links = [];
    links[j] = document.createElement("h2");
    links[j].innerText = tags[0][j];
    links[j].classList.add("links");
    sidebar.appendChild(links[j]);
    links[j].addEventListener("click", function () {
        clearContentDom();
        createDoms(tags[1][j]);
        setActiveLink(links[j]);
    });

}

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
        contentDom[i].classList.add("contentItem");
        mainContainer.appendChild(contentDom[i]);

        const link = document.createElement("a");
        link.href = objects[i].url;
        link.target = "_blank"; // In neuem Tab öffnen
        link.classList.add("contentLink");
        link.title = "open " + objects[i].url; // Tooltip
        contentDom[i].appendChild(link);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");
        link.appendChild(imageContainer);

        const textContainer = document.createElement("div");
        textContainer.classList.add("textContainer");
        link.appendChild(textContainer);

        const title = document.createElement("h3");
        title.innerText = objects[i].title;
        textContainer.appendChild(title);

        const subtitle = document.createElement("p");
        subtitle.innerText = objects[i].subtitle;
        textContainer.appendChild(subtitle);


        const image = document.createElement("img");
        image.src = objects[i].img;
        image.alt = objects[i].title;
        imageContainer.appendChild(image);

    }
}



// console.log(tools);