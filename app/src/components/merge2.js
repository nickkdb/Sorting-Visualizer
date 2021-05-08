let array= [30, 20, 10, 50, 22, 33, 55];

const mergeSort= (arr) => {
    let sorted= Array.from(arr);

    let len= sorted.length;
    let buffer= new Array(len);

    for (let size= 1; size < len; size *= 2) {
        for (let leftStart= 0; leftStart < len; leftStart += 2*size) {
            
            let left= leftStart;
            let right= Math.min(left + size, len);
            let leftLimit= right;
            let rightLimit = Math.min(right + size, len);

            merge(left, right, leftLimit, rightLimit, sorted, buffer);
        }

        let temp = sorted;
        sorted= buffer;
        buffer= temp;
    }

    return sorted;
}

function merge(left, right, leftLimit, rightLimit, sorted, buffer) {

    let i = left;

    while ( left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
            buffer[i++] = sorted[left++];
        } else {
            buffer[i++] = sorted[right++];
        }
    }

    while (left < leftLimit) {
        buffer[i++] = sorted[left++];
    }
    
    while (right < rightLimit) {
        buffer[i++] = sorted[right++];
    }
}

console.log(mergeSort(array));