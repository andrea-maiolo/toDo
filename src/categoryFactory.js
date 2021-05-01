function Category(title){
    this.title = title;
}

const inbox = new Category("Inbox");

const listOfCategories = [];

listOfCategories.push(inbox);

export {Category}
export { listOfCategories}