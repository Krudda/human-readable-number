module.exports = function toReadable (number) {
    let arr = number.toString().split('');
    let answer = '';
    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    switch (Object.keys(arr).length) {
        case 1:
            answer = fromZeroToNine[arr[0]];
            break;
        case 2:
            if(arr[0] == 1) {
                answer = fromTenToNineteen[arr[1]];
                break;
            } else if(arr[0] !== 1 && arr[1] == 0){
                answer = fromTwentyToNinety[arr[0]-2];
                break;
            } else {
                answer = fromTwentyToNinety[arr[0]-2] + ' ' + fromZeroToNine[arr[1]];
                break;
            }
        case 3:
            if (arr[1] == 0 && arr[2] == 0) {
                answer = fromZeroToNine[arr[0]] + ' hundred';
                break;
            } else if (arr[1] == 0){
                answer = fromZeroToNine[arr[0]] + ' hundred ' + fromZeroToNine[arr[2]];
                break;
            } else if (arr[1] == 1){
                answer = fromZeroToNine[arr[0]] + ' hundred ' + fromTenToNineteen[arr[2]];
                break;
            } else if (arr[1] !== 1 && arr[2] == 0){
                answer = fromZeroToNine[arr[0]] + ' hundred ' + fromTwentyToNinety[arr[1]-2] ;
                break;
            } else if (arr[1] !== 1 && arr[2] !== 0){
                answer = fromZeroToNine[arr[0]] + ' hundred ' + fromTwentyToNinety[arr[1]-2] + ' ' + fromZeroToNine[arr[2]];
                break;
            }
    }
   return answer;
}
