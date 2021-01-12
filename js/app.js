
const ulList = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section')

function createLiElement() {
    const fragment = document.createDocumentFragment();
    sections.forEach((section) => {
        const navListElement = document.createElement('li');
        navListElement.classList.add('nav-list__item');
        const idSection = section.id;
        // console.log(idSection);

        const linkElement = document.createElement('a');
        linkElement.href = `#${idSection}`;
        linkElement.textContent = idSection;
        linkElement.classList.add('nav-list__link');
        // console.log(linkElement);
        navListElement.appendChild(linkElement)
        fragment.appendChild(navListElement)
    })
    ulList.appendChild(fragment)
    console.log(ulList)
}

createLiElement()