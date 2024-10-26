var Solution = function(nums) {
    this.nums = [...nums];
    this.arr = nums;
};
Solution.prototype.reset = function() {
    this.arr = [...this.nums];
    return this.arr;
};
Solution.prototype.shuffle = function() {
    let shuffle = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let rand = Math.floor(Math.random() * arr.length);
            let temp = arr[i];
            arr[i] = arr[rand];
            arr[rand] = temp;
        }
    }
    shuffle(this.arr);
    return this.arr;
};
