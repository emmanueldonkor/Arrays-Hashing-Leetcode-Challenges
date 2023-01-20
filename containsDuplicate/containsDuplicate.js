
 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const lookUp = {};
    for(let i = 0; i < nums.length; i++){
        lookUp[nums[i]] ? lookUp[nums[i]] +=1 : lookUp[nums[i]] = 1;
    }

    for(let value of Object.values(lookUp)){
       if(value >1){
           return true;
       }
      
    }

    return false;
};
Console
