import {listOfCategories} from './categoryFactory.js';

let currentCategory;

const assignCurrentCategory = function() {
    let lastItem = listOfCategories[listOfCategories.length - 1];
    currentCategory = lastItem.title.toLowerCase();
}


export {assignCurrentCategory}
export {currentCategory}