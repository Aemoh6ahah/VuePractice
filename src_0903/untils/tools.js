export const cutArr= function cutArr(arr,length=8) {
    let bigArr=[]
    let bigArrL = Math.ceil(arr.length/length)
    let samllArr=[]
    for(let j=0;j<bigArrL;j++){
        for(let k=0;k<length;k++){
            if ((j*length+k)>=arr.length) {break}
            samllArr.push(arr[j*length+k])
        }
        bigArr.push(samllArr)
        samllArr = []
    }
    return bigArr
}
