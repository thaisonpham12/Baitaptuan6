const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click',handleSearch);

function handleSearch(){
    const searchTerm = searchInput.value.toLowerCase().trim();

    const productItems = document.querySelectorAll('.product-item');
    for (const productItem of productItems){
        const productNameElement = productItem.querySelector('.product-name');
        if (productNameElement){
            const productName = productNameElement.textContent.toLowerCase();
            if (productName.includes(searchTerm)){
                productItem.classList.remove('hidden');
            } else {
                productItem.classList.add('hidden');
            }
        }
    }
    
}

const addProductForm = document.getElementById("addProductForm");
const addProductBtn = document.getElementById("addProductBtn");

addProductBtn.addEventListener('click',handleForm);

function handleForm(){
    addProductForm.classList.toggle("hidden");
}