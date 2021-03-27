// let's select all tasks, and add an event listener to them,
// When you drag them and move them to a different category(which means have a selector for categories too that listen
//     to events)
//     then trigger the click event on the cat button and run the filter and currentCat functions.categorythen add the 
//     task to the appropriate category.
// you nned to add the tasks and categories in real time evry time somehing is created you need to reload the function.

const moveToDifCategory = function(){
    let allTasks = document.querySelectorAll('.tasks');
    let allCategory = document.querySelectorAll('.pOfCategory');

    allTasks.forEach( t => {
        t.addEventListener('dragstart', () => {
        t.classList.add('dragging')
    })
        t.addEventListener('dragend', () =>{
        t.classList.remove('dragging');
    })
})

    allCategory.forEach( c => {
        c.addEventListener('dragover', e =>{
            e.preventDefault();
            const dragging = document.querySelector('.dragging')
            console.log(dragging);
            c.click()
        })
    })






}

    export {moveToDifCategory}