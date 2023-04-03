// let str1 = '(())';
// let str2 = '({';
// let str3 = '{}';
// let str4 = '[]';
// const isValid = function (str) {
//   const stack = [];
//   const map = {
//     '(':')',
//     '{':'}',
//     '[':']',
//   }
//   for(let i of str){
//     if(i in map){
//       stack.push(i)
//       continue
//     }
//     if(map[stack.pop()] !== i) return false
//   }
//   return !stack.length
// }
// console.log(isValid(str1),isValid(str2),isValid(str3),isValid(str3))

// let toSumArr = [2,7,11,15];
// let target = 17;
// const toSum = function (arr,target) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = target - arr[i];
//     obj[num] = i;
//     if(arr[i] in obj){
//       return [obj[arr[i]],i]
//     }
//   }
// }
// console.log(toSum(toSumArr,target));

// const redPage = function (num,money){
//   let allMoney = money;
//   let result = [];
//   for (let i = 1; i < num; i++) {
//     let eachMoney = +parseFloat(Math.random() * money).toFixed(2)
//     if(eachMoney < 0.01){
//       eachMoney = 0.01
//     }
//     console.log(eachMoney);
//     result.push(eachMoney)
//     money = money - eachMoney;
//     if(i === num -1){
//       let sum = 0;
//       for (let j = 0; j < result.length; j++) {
//         sum += result[j]
//       }
//       result.push(+parseFloat(allMoney - sum).toFixed(2))
//     }
//   }
//   return result
// }
// console.log(redPage(3,10))
// let arr = ['a', 'b', 'c', 'd', 'a', 'b']
// const addNum = function(arr){
//   for (let i = 0; i < arr.length; i++) {
//     let index  = 1;
//     let key = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if(key == arr[j]) {
//         if(index == 1){
//           arr[i] = arr[i] + index
//         }
//         index++
//         arr[j] = arr[j] + index
//       }
//     }
//   }
//   return arr
// }
// console.log(addNum(arr));
// let arr = [
//   {
//   id: 1,
//   name: '部门1',
//   pid: 0
//   },
//   {
//   id: 2,
//   name: '部门2',
//   pid: 1
//   },
//   {
//   id: 3,
//   name: '部门3',
//   pid: 1
//   },
//   {
//   id: 4,
//   name: '部门4',
//   pid: 3
//   },
//   {
//   id: 5,
//   name: '部门5',
//   pid: 4
//   }
//   ]
// const arrTotree = function(arr,pid){
//   return arr.filter((x)=>x.pid === pid).map((j)=>{return{...j,children:arrTotree(arr,j.id)}})
// }
// console.log(arrTotree(arr,0));
// let tree = [{
//   id:1,
//   name:'部门1',
//   pid: 0,
//   children:[{
//       id:2,
//       name:'部门2',
//       pid: 1,
//       children:[]
//     },{
//       id:3,
//       name:'部门3',
//       pid: 1,
//       children:[{
//         id:4,
//         name:'部门4',
//         pid:3,
//         children:[{
//           id:5,
//           name:'部门5',
//           pid:4,
//           children:[]
//         }]
//       }]
//     }
//   ]
// }]
// const tree2arr = function(tree,arr){
//   tree.forEach((item)=>{
//     arr.push(item)
//     if(item.children.length){
//       tree2arr(item.children,arr)
//     }
//   })
//   return arr
// }
// console.log(tree2arr(tree,[]));

// const logNum = function(s,e){
//   let result = []
//   for (let i = s; i < e; i++) {
//     let str = i + ''
//     if(str.length <= 1) continue
//     if(str.split('').reverse().join('') === str){
//       result.push(str)
//     }
//   }
//   return result
// }
// console.log(logNum(2,200))

// const addSum = function(n,m){
//   let total = 0;
//   if(m < n) return total
//   total = m + addSum(n, m -1)
//   return total
// }
// console.log(addSum(1,5));

// const fillArr = function(len = 4, min = 2, max = 10) {
//   let arr = [];
//   for(let i = 0; i <= len; i++){
//     let key = Math.floor(Math.random()*(max - min) + min)
//     if(arr.indexOf(key) == -1){
//       arr.push(key)
//     }
//   }
//   return arr
// }
// console.log(fillArr());

// const mySetInterval = function(fn,time){
//   let inter = setTimeout(()=>{
//     fn()
//     inter()
//   },time)
//   inter()
// }

// const arrs = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
// const num = 55;

// const closeNumb = function(arr, numb){
//   let res = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     if(Math.abs(key - numb) < Math.abs(res - numb)){
//       res = key;
//     }
//   }
//   return res;
// }
// console.log(closeNumb(arrs,num))

// let a = 'ababcbb'
// const maxlengthstr = function(str){
//   let arr = [];
//   let max = 0;
//   for (let i = 0; i < str.length; i++) {
//     if(arr.indexOf(str[i]) !=-1){
//       arr.splice(0, arr.indexOf(str[i]) + 1);
//     }
//     arr.push(str[i])
//     max = Math.max(max, arr.length)
//   }
//   return max
// }
// console.log(maxlengthstr(a))

//判断两个对象是否相等
// let obj1 = { a: "11", b: { c: "22" } };
// let obj2 = { a: "11", b: { c: "22" } };
// const isEqual = function(obj1,obj2){
//   if(Object.keys(obj1).length !== Object.keys(obj2).length){
//     return false
//   }
//   for (const item in obj1) {
//     if (obj2.hasOwnProperty(item)) {
//       if(typeof obj1[item] == 'object'){
//         return isEqual(obj1[item],obj2[item])
//       }else if(obj1[item] !== obj2[item]){
//         return false
//       }
//     }else{
//       return false
//     }
//   }
//   return true
// }
// console.log(isEqual(obj1,obj2))