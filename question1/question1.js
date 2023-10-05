const lowerCaseWords = (arr) =>
  new Promise((resolve) => {
    resolve(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

  const mixedArray = ['PIZZA',10,true,25,false,'Wings']
  lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
