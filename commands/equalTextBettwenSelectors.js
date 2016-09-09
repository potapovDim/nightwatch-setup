export function command(selector1,selector2,selector3,selector4){
    if(arguments.length==2){
       this
           .getText(selector1,function (result) {
               this.arg1=result;
           })
           .getText(selector2,function (result) {
               this.arg2=result;
           })
           .expect(this.arg1).to.be.equal(this.arg2)
        return this;
    }
     else if(arguments.length==3){
        this
            .getText(selector1,function (result) {
                this.arg1=result;
            })
            .getText(selector2,function (result) {
                this.arg2=result;
            })
            .getText(selector3,function (result) {
                this.arg3=result;
            })
            .expect(this.arg1==this.arg2==this.arg3).to.be.equal(true)
        return this;
    }
};

