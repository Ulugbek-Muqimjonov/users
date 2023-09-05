const elList = document.querySelector(".hero__users-list");
const DocumentFragment = document.createDocumentFragment();
function render(arr,node) {
    arr.forEach(item => {
        const liElement = document.createElement("li");
        const nameWrapElement = document.createElement("div");
        const nameElement = document.createElement("h3");
        const idElement = document.createElement("span");
        const sitelinkWrapElement = document.createElement("div");
        const userSiteElement = document.createElement("a");
        const userEmailElement = document.createElement("a");
        const adressTitleElement = document.createElement("h4");
        const adressWrapElement = document.createElement("div");
        const userCityElement = document.createElement("span");
        const userLocaitonElement = document.createElement("a");
        const userStreetElement = document.createElement("span");
        const userSuiteElement = document.createElement("span");

        liElement.classList.add("hero__users-item","shadow");
        nameWrapElement.classList.add("hero__username-wrap","d-flex","align-items-center","justify-content-between");
        nameElement.classList.add("hero__users-fullname","fw-bold","text-center");
        idElement.classList.add("hero__user-id");
        sitelinkWrapElement.classList.add("d-flex","flex-column","justify-content-between","mb-3");
        userSiteElement.classList.add("hero__user-site");
        userEmailElement.classList.add("hero__user-email");
        adressTitleElement.classList.add("hero__users-item-title","text-center","fw-bold");
        adressWrapElement.classList.add("hero__user-adress","d-grid");
        userCityElement.classList.add("hero__user-city");
        userLocaitonElement.classList.add("hero__user-location","d-block","m-auto");
        userStreetElement.classList.add("hero__user-street");
        userSuiteElement.classList.add("hero__user-suite");


        nameElement.textContent = item.name;
        idElement.textContent = item.id;
        userSiteElement.textContent = `website:${item.website}`;
        userEmailElement.textContent = `email: ${item.email}`;
        adressTitleElement.textContent = `Adress`;
        userCityElement.textContent =`CITY : ${item.address?.city}`
        userLocaitonElement.textContent = `location`;
        userStreetElement.textContent = `STREET: ${item.address.street}`;
        userSuiteElement.textContent = `SUIT : ${item.address?.suite}`;

        userSiteElement.href = `${item.website}`;
        userEmailElement.href = `mailto:${item.email}`;

        nameWrapElement.append(nameElement,idElement);
        sitelinkWrapElement.append(userSiteElement,userEmailElement);
        adressWrapElement.append(userCityElement,userLocaitonElement,userStreetElement,userSuiteElement);
        liElement.append(nameWrapElement,sitelinkWrapElement,adressTitleElement,adressWrapElement)
        DocumentFragment.appendChild(liElement)
    });
    node.append(DocumentFragment)
}
async function getUsers(url) {
    const response = await fetch(url);
    const res = await response.json();
    render(res,elList);
    
}
getUsers("https://jsonplaceholder.typicode.com/users");