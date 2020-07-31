
cc.Class({
    extends: cc.Component,

    properties: {
        bgi:{
            default:[],
            type:[cc.Node]
        },
        shuibowen_node:{
            default: null,
            type:cc.Node
        },
        bg_num:0,
        // 水波纹时间
        timeRamdom:0,
        // 时间计时
        timeRunAdd:0,
        x_bowen:0,
        y_bowen:0
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    //   this.changeBgi()
    that.bgi[this.bg_num].active = true
    this.timeRamdom = 300+Math.random()*600
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
    playShuibowen(){
        this.x_bowen = Math.random()*720-360
        this.y_bowen = Math.random()*1280-640
        this.shuibowen_node.setPosition(cc.v2(this.x_bowen,this.y_bowen))
        this.shuibowen_node.x = this.x_bowen
        this.shuibowen_node.y = this.y_bowen
        this.shuibowen_node.getComponent(cc.Animation).play('shuibowen')
    },

    start () {

    },

    update (dt) {
        this.timeRunAdd++
        if (this.timeRunAdd>this.timeRamdom) {
            this.timeRunAdd =  0
            this.timeRamdom = 300+Math.random()*600
            this.playShuibowen()
        }

    },
});
