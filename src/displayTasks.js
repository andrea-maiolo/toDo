import {tasks} from './taskFactory.js';


let display = function(){
    const taskList = document.querySelector('#taskList');

    tasks
}

export {display}



function addingToLibrary() {
    if ((title.value != '' && author.value != '' && pages.value != '') && (statusRead.checked || statusToRead.checked)) {
        if (statusRead.checked) {
            var stat = true;
        } else if (statusToRead.checked) {
            stat = false;
        }
        let newB = new Book(title.value, author.value, pages.value, stat);
        library.push(newB)
        showMe(newB)
        movingIntoStorage()

    }
}

//show me the library
function showMe(element) {
    let myBook = document.createElement('div');
    myBook.classList.add("books");
    let myBookTitle = document.createElement('p');
    myBookTitle.innerHTML = element.title;
    let myBookAuthor = document.createElement('p');
    myBookAuthor.innerHTML = element.author;
    let myBookPages = document.createElement('p');
    myBookPages.innerHTML = element.pages;
    let myBookInfo = document.createElement('button');
    myBookInfo.addEventListener('click', () => {
        alert(element.info())
    })
    myBookInfo.innerHTML = "Info";
    let myBookStatus = document.createElement('button');
    // let icon = document.createElement("img");//work on this one to show the img
    // icon.src = "style/002-bookmark-1.svg";
    myBookStatus.innerHTML = element.read
    if (myBookStatus.innerHTML == "true") {
        myBookStatus.style.background = "green";
    } else {
        myBookStatus.style.background = "red";
    }
    myBookStatus.addEventListener("click", () => {
        toggleRead(element, myBookStatus)
    });
    //create a button that can remove the books from library
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "x";
    removeButton.classList.add("remB")
    removeButton.addEventListener('click', () => {
        display.removeChild(myBook);
        cleanLibrary(element)
    });
    myBook.appendChild(removeButton)
    myBook.appendChild(myBookTitle);
    myBook.appendChild(myBookAuthor);
    myBook.appendChild(myBookPages);
    myBook.appendChild(myBookStatus)
    myBook.appendChild(myBookInfo);
    display.appendChild(myBook);
}