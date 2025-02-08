function findMiddle(str) {
  if (typeof str !== "string") return -1;
  let arr1 = str.split("").filter((el) => !isNaN(el) && el !== " ");
  if (arr1.length === 0) return -1;
  let arr = +arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    arr *= +arr1[i];
  }
  arr = arr.toString();

  if (arr.length === 1) return +arr[0];
  if (arr.length === 0) return -1;
  let res =
    arr.length % 2 === 0
      ? `${arr[arr.length / 2 - 1]}${arr[arr.length / 2]}`
      : `${arr[(arr.length - 1) / 2]}`;

  return +res;
}
