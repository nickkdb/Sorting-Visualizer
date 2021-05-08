export function getAnimations(arr) {
    const animations= []; //array to hold indexes of what to animate
    if (arr.length <= 1) return arr;
    const copyArray= arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, copyArray, animations);
    return animations; //returns animations array after indices are pushed
    }
    
    function mergeSortHelper(mainArr, startIdx, endIdx, copyArr, animations) { // can't use sliced arrays because original index is needed
    if (startIdx === endIdx) return;
    const middleIdx= Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(copyArr, startIdx, middleIdx, mainArr, animations);
    mergeSortHelper(copyArr, middleIdx + 1, endIdx, mainArr, animations);
    doMerge(mainArr, startIdx, middleIdx, endIdx, copyArr, animations);
    }
    
    function doMerge(mainArr, startIdx, middleIdx, endIdx, copyArr, animations) {
    
        let idxOfSmaller= startIdx;
        let leftBound= startIdx;
        let rightBound = middleIdx + 1;
        let resetArray= [];
    
        //equivalent of while left.length & right.length in traditional merge sort
        while ( leftBound <= middleIdx && rightBound <= endIdx) {
            
            //push the index for animations
            animations.push([leftBound, rightBound]);
            
            animations.push([leftBound, rightBound]);

            resetArray.push(leftBound, rightBound);
            
    
            // equal to "if left[0] < right[0]"
            if (copyArr[leftBound] <= copyArr[rightBound]) { 
                
                //push index of left bound and value at left bound
                animations.push([idxOfSmaller, copyArr[leftBound]]); 
                animations.push(resetArray);
                resetArray= [];
    
                //push left bound into smaller index, then increment
                mainArr[idxOfSmaller++]= copyArr[leftBound++];
    
            } else {
                //push index of right bound and value at right bound
                animations.push([idxOfSmaller, copyArr[rightBound]]); 
                animations.push(resetArray);
                resetArray= [];
                
                //push right bound into smaller index, then increment
                mainArr[idxOfSmaller++]= copyArr[rightBound++];
            }
        }
    
        //pushing remaining left bound elements, equivalent of "...left"
        while (leftBound <= middleIdx) { 
            //push twice for animations
            animations.push([leftBound+1,leftBound+1]);
            animations.push([leftBound+1,leftBound+1]);
            resetArray.push(leftBound+1);
            
            //index and value of left bound
            animations.push([idxOfSmaller, copyArr[leftBound]]);
            animations.push(resetArray);
            resetArray= [];
            
            //add to array, increment for next iteration
            mainArr[idxOfSmaller++]= copyArr[leftBound++];
        }
    
        //pushing remaining right bound elements, "...right"
        while (rightBound <= endIdx) { 
            //push twice for animations
            animations.push([rightBound,rightBound]);
            animations.push([rightBound,rightBound]);
            resetArray.push(rightBound);
            
            //index and value of right bound
            animations.push([idxOfSmaller, copyArr[rightBound]]);
            animations.push(resetArray);
            resetArray= [];
            
            //add to array, increment for next iteration
            mainArr[idxOfSmaller++]= copyArr[rightBound++];
        }
    }