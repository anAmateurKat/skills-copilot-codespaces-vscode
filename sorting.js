//Global Hack Week: Write a Sorting Method challenge
//write a sorting method to sort a list of integers in ascending order without using the sort method.

function sortList(list) {
    let sortedList = [];
    while(list.length > 0) {
        let min = Math.min(...list);
        sortedList.push(min);
        list.splice(list.indexOf(min), 1);
    }
    return sortedList;
}

console.log(sortList([3,2,1,5,4])); //Output: [1,2,3,4,5]