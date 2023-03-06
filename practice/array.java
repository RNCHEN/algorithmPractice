// 二分+删减+平方排序
public class Helloworld {
  public static void main(String args[]) {

    int[] nums = { -4,-1,0,3,10 };
    int target = 2;
  System.out.println(nums);
    int k = search(nums, target);
    int m = removeElement(nums, target);
    for( int index:nums ){
      System.out.println("%d 数组"+index);
    }

    sortedSquares(nums);
    for( int index:nums ){
      System.out.println(index);
    }

  }
  public static int[] sortedSquares(int[] nums) {
        int smallest = 0 ;
        int biggest = nums.length-1;
        int last =nums.length-1;
        int [] newArray= new int[nums.length];
        while(last>=0){
      System.out.println(nums[biggest]+"     "+nums[biggest]*nums[biggest]+"     "+nums[smallest]+"     "+nums[smallest]*nums[smallest]);

            if(nums[biggest]*nums[biggest] >= nums[smallest]*nums[smallest]){
                newArray[last] = nums[biggest]*nums[biggest];
                biggest--;
            }else{
                newArray[last] = nums[smallest]*nums[smallest];
                smallest++;
            }
            last--;
        }
        return newArray;
  }
  public static int search(int[] nums, int target) {
    int middle;
    int left = 0;
    int right = nums.length - 1;
    middle = (left + right) / 2;
    while (left < right) {
      if (nums[middle] == target) {
        return middle;
      } else if (nums[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = (left + right) / 2;
    }
    return -1;
  }
  public static int removeElement(int[] nums, int val) {
        int length = nums.length;
        int slowIndex = 0 ;
        int fastIndex = 0;
        while( fastIndex<length){
            if(nums[fastIndex]==val){
                fastIndex++;
            }else{
                nums[slowIndex] = nums[fastIndex];
                fastIndex++;
                slowIndex++;
            }
        }
         System.out.println(slowIndex);
        return slowIndex;
        //   int slowIndex = 0;
        // for (int fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        //     if (nums[fastIndex] != val) {
        //         nums[slowIndex] = nums[fastIndex];
        //         slowIndex++;
        //     }
        // }
        // return slowIndex;
    }
}
public int minSubArrayLen(int target, int[] nums) {
        int slowIndex =0;
        int fastIndex =0; 
        int ans = Integer.MAX_VALUE;
        int tmp = 0;
        while(fastIndex<nums.length){
            tmp = tmp+ nums[fastIndex];
      
            while(tmp >=target){
                ans = Math.min(ans,fastIndex-slowIndex+1);
                tmp = tmp-nums[slowIndex];
                slowIndex++;
            }
            fastIndex++;
            
        }
        return ans==Integer.MAX_VALUE?0:ans;

    }