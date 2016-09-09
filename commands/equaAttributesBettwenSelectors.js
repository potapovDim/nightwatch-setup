export function command(attribute,selector1,selector2,selector3){
    if(arguments.length==3) {
        this
            .getAttribute(selector1,attribute,function (result) {
                this.a=result;
            })
            .getAttribute(selector2,attribute,function (result) {
                this.b=result;
            })
            .expect(this.arg1==this.arg2).to.be.equal(true)
        return this;
    }
    else if(arguments.length==4) {
        this
            .getAttribute(selector1,attribute,function (result) {
                this.a=result;
            })
            .getAttribute(selector2,attribute,function (result) {
                this.b=result;
            })
            .getAttribute(selector3,attribute,function(result){
                this.c=result;
            })
            .expect(this.a==this.b==this.c).to.equal(true)
        return this;
    }
}