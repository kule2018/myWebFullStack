// es6 class关键字新增
class RandomHongbao {
    constructor(num) {
      // check 
      this.num = this.getNum(num);
  
      console.log(this.num);
    }
    getNum(num, defaultNum = 0) {
      return this.isNumber(num)?num: defaultNum;
    }
    isNumber(num) {
      // 各种可能出问题的，排除
      let number =  +num; //(number化)
      if ((number - num) !== 0) {
        return false;
      }
      if (number === num) {
        return true;
      }
      // console.log(typeof number);
      if (typeof num === 'string') {
        return false
      }
      return true;
    }
    split(n, precision) {
    }
  }
  // 200 => 总金额 
  // split分 26 人数 红包金额的精确值 2
  const hongbao = new RandomHongbao(100.12);
  hongbao.split(26, 2);
  