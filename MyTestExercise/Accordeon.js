let calculator = {
    read() {
       this.a = prompt('write operand');
       this.b = prompt('write operand');
    },
    sum () {
        return this.a + this.b;
    },
    mult(){
        return this.a * this.b;
    },
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mult() );