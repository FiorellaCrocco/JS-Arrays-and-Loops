var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for(i=chunk_one; i<chunk_one.length-1;i++){
        newArray.push(i);
    }
    
    return newArray;
}

console.log(mergeArrays(chunk_one, chunk_two));