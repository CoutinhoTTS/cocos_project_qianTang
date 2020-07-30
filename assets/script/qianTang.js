
cc.Class({
    extends: cc.Component,

    properties: {
        bgi:{
            default:[],
            type:[cc.Node]
        },
        bg_num:0
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    //   this.changeBgi()
    that.bgi[this.bg_num].active = true
    },
    changeBgi () {
        var that = this
        for (var i =0; i<this.bgi.length; i++){
            this.bgi[i].active = false
        }
        if ( that.bg_num == 10) {
            that.bg_num = 0
        }
        that.bgi[that.bg_num].active = true
        setTimeout(() => {
            that.bg_num+=1
            that.changeBgi()
        }, 2000);
    },

    start () {

    },

    update (dt) {},
});
