import {generateHomePage} from './homePage.js';
import {formDisplay} from './formDisplay.js';
import {categoryDisplay} from './categoryDisplay.js';
import {addCategory} from './addCategory.js';
import {addToList} from './addTaskFunction.js';
import {clearList} from './clearFunction.js';
import {tasksGeneral} from './taskFactory.js';

formDisplay();
categoryDisplay();
addToList();
clearList();
addCategory();
