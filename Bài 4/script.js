const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click',handleSearch);

function handleSearch(){
    const searchTerm = searchInput.value.toLowerCase().trim();

    let productItems = document.querySelectorAll('.product-item');
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

addProductForm.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    const name = document.getElementById('newName').value.trim(); 
    const price = document.getElementById('newPrice').value.trim(); 
    const desc = document.getElementById('newDesc').value.trim();
    if (name==null || price==null || price<=0){ errorMsg.textContent = "Vui lòng nhập tên và giá hợp lệ!"; return; }
    errorMsg.textContent = "";
    const newItem = document.createElement('article'); 
    newItem.className = 'product-item'; 
    // Tạo các phần tử con và thêm vào newItem 
    const title = document.createElement('h3'); 
    title.className = 'product-name'; 
    title.textContent = name; 
    const gia = document.createElement('span'); 
    gia.className = 'product-price'; 
    gia.textContent = price;
    const mota = document.createElement('p'); 
    mota.className = 'product-description'; 
    mota.textContent = desc;
    newItem.appendChild(title);
    newItem.appendChild(mota);
    newItem.appendChild(gia);
    // (Tương tự tạo phần tử chứa mô tả, giá rồi append)
    const productList = document.getElementById('product-list'); 
    productList.prepend(newItem);

    productItems = document.querySelectorAll('.product-item');

    addProductForm.reset();
    addProductForm.style.display = "none";
});

const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', function() { 
    addProductForm.style.display = "none";
    addProductForm.reset();
});