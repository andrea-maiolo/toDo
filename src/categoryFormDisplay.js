
const categoryFormDisplay = function(){
    const showCategoryForm = document.querySelector('#showCategoryForm');
    showCategoryForm.addEventListener('click', show);

    function show(){
        let categoryForm = document.querySelector('#categoryForm');
        categoryForm.style.display = 'block';
    }
    
    return show
}

export {categoryFormDisplay}