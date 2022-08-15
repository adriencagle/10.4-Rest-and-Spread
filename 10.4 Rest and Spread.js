function filterOutOdds(){
    var nums = Array.slice.call(...numsTwo);
    return nums.filter(num => num %2);
    };

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleArgs = (arr, ...args) => ([arr, ...args *2]);

const removeRandom = (items) => {
    let remove = Math.floor(Math.random() *items.length);
    return [...items.slice(0, remove), ...items.slice(remove, remove +1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyValue = (object, key, value) => {
    let newObject = {...object};
    newObject[key] = value;
    return newObject;
}

const removeKey = (object2, key) =>{   
    let newObject2 = {...object2};
    delete newObject2[key];
    return newObject2;
}

const combineObjs = (obj1, obj2) => ({...obj1, ...obj2});

const updateObj = (object, key, value) => {
    let newObject3 = ({...object});
    newObject3[key] = value;
    return newObject3;
}