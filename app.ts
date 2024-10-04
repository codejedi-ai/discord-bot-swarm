// Define a class for max heap
class MaxHeap {
    heap: [number, number][];
    constructor() {
        this.heap = []; // Use an array to store the heap elements
    }

    // Define some helper methods to access the parent and child nodes
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // Compare the first element of two tuples
    compare(tupleOne, tupleTwo) {
        return tupleOne[0] > tupleTwo[0];
    }

    // Swap the values of two nodes
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    // Return the root element of the heap
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    // Remove and return the root element of the heap
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0]; // Store the root element
        this.heap[0] = this.heap[this.heap.length - 1]; // Replace the root with the last element
        this.heap.pop(); // Remove the last element
        this.heapifyDown(); // Restore the heap property by moving the root down
        return item; // Return the removed element
    }

    // Add a new element to the heap
    add(item) {
        this.heap.push(item); // Insert the element at the end of the array
        this.heapifyUp(); // Restore the heap property by moving the element up
    }

    // Move an element up the heap until it is in the right position
    heapifyUp() {
        let index = this.heap.length - 1; // Start from the last element
        while (this.hasParent(index) && this.compare(this.heap[index], this.parent(index))) {
            // If the element has a parent and the element is larger than the parent, swap them
            this.swap(this.getParentIndex(index), index);
            // Update the index to the parent's index
            index = this.getParentIndex(index);
        }
    }

    // Move an element down the heap until it is in the right position
    heapifyDown() {
        let index = 0; // Start from the root element
        while (this.hasLeftChild(index)) {
            // If the element has a left child, find the larger child
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.compare(this.rightChild(index), this.leftChild(index))) {
                // If the element has a right child and the right child is larger than the left child, update the larger child index
                largerChildIndex = this.getRightChildIndex(index);
            }
            // If the element is larger than its larger child, stop the loop
            if (this.compare(this.heap[index], this.heap[largerChildIndex])) {
                break;
            }
            // Otherwise, swap the element with its larger child
            this.swap(index, largerChildIndex);
            // Update the index to the larger child's index
            index = largerChildIndex;
        }
    }
}
function generateSuffixSumArray(arr) {
    let suffixSumArray = new Array(arr.length);
    suffixSumArray[arr.length - 1] = arr[arr.length - 1];

    for (let i = arr.length - 2; i >= 0; i--) {
        suffixSumArray[i] = arr[i] + suffixSumArray[i + 1];
    }

    return suffixSumArray;
}
function maximumSubarraySum(nums: number[], k: number): number {
    let suffixSumArray = generateSuffixSumArray(nums);
    //console.log(suffixSumArray);

    let hashmapOfMaxHeaps = new Map();

    // Add a MaxHeap to the hashmap with a key
    // hashmapOfMaxHeaps.set('heap1', new MaxHeap());
    let hashSet = new Set<number>();

    // Add another MaxHeap to the hashmap with a different key
    // hashmapOfMaxHeaps.set('heap2', new MaxHeap());
    let resultSet = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        //console.log(i);
        let lb = - k + nums[i];
        let rb = k + nums[i];
        let lbInSet = hashSet.has(lb);
        let rbInSet = hashSet.has(rb);
        //console.log("range " + lb + " " + rb);
        if (lbInSet) {
            let heap = hashmapOfMaxHeaps.get(lb);
            let root = heap.peek();
            let sumToISuffixNotIncluded = i + 1 < nums.length ? suffixSumArray[i + 1] : 0;
            let value = root[0] - sumToISuffixNotIncluded;
            resultSet.add(value);
            //console.log("Root sum" + root[0]);
            //console.log("List Sum " + value);
            //console.log(root[1] + " " + i);
        }
        if (rbInSet) {
            let heap = hashmapOfMaxHeaps.get(rb);
            let root = heap.peek();
            let sumToISuffixNotIncluded = i + 1 < nums.length ? suffixSumArray[i + 1] : 0;
            let value = root[0] - sumToISuffixNotIncluded;
            resultSet.add(value);
            //console.log("Root sum" + root[0]);
            //console.log("List Sum " + value);
            //console.log(root[1] + " " + i);
        }
        hashSet.add(nums[i]);
        if (hashmapOfMaxHeaps.has(nums[i])) {
            // If there is a heap at key arr[i], add i to it
            hashmapOfMaxHeaps.get(nums[i]).add([suffixSumArray[i], i]);
        } else {
            // If there isn't a heap at key arr[i], create a new heap and add i to it
            let heap = new MaxHeap();
            heap.add([suffixSumArray[i], i]);
            hashmapOfMaxHeaps.set(nums[i], heap);
        }
    }
    // sconsole.log(Math.max(...Array.from(resultSet) as number[]));
    let maxVal = Math.max(...Array.from(resultSet) as number[]);

    if (maxVal === -Infinity) {
        return 0;
    } else {
        return maxVal;
    }

};
console.log(maximumSubarraySum([1, 2, 3, 4, 5, 6], 1));
console.log(maximumSubarraySum([-1, 3, 2, 4, 5], 3));
console.log(maximumSubarraySum([-1, -2, -3, -4], 2));
console.log(maximumSubarraySum([1,5], 2));