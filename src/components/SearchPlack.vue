<template>
    <div class="row plack mx-0">
        <div class="col-12 col-md-10 col-lg-7 mx-auto py-5 plackborder">

            <div class="plackbox mx-auto position-relative">
                <img :src="myplack()">
                <input id="firstnum" v-model="firstnum" type="text"
                       :class="changeplack()+' firstnum position-absolute nazanin'" maxlength="2" inputmode="number"
                       autofocus
                       tabindex="1" placeholder="11">
                <div @click="openselect" class="char position-absolute text-center">
                    <label :class="labelclass()+' nazanin m-0 charlabel '+changeplack()" v-html="char"></label>
                </div>
                <selectcomponent :key="componentid" v-if="selectshow"></selectcomponent>

                <input id="secondnum" v-model="secondnum" type="text"
                       :class="changeplack()+' secondnum position-absolute nazanin'" maxlength="3" inputmode="number"
                       tabindex="3" placeholder="111">
                <input id="statecode" v-if="stateshow" v-model="statecode" type="text"
                       :class="changeplack()+' statecode position-absolute nazanin'" maxlength="2" inputmode="number"
                       tabindex="4" placeholder="11">
                <div v-else class="gozarmovaghat position-absolute">
                    <input id="statecode2" v-model="statecode" type="text"
                           :class="changeplack()+' gozartop position-absolute nazanin'" maxlength="2" inputmode="number"
                           tabindex="4" placeholder="11">
                    <input id="year" v-model="year" type="text"
                           :class="changeplack()+' gozaryear position-absolute nazanin'" maxlength="2"
                           inputmode="number"
                           tabindex="5" placeholder="11">
                    <input id="month" v-model="month" type="text"
                           :class="changeplack()+' gozarmon position-absolute nazanin'" maxlength="2" inputmode="number"
                           tabindex="6" placeholder="11">
                </div>
                <a id="button" class="btn btn-success pointer mt-3 btn-block" tabindex="8">
                    <i class="fas fa-search text-white ml-4"></i>
                    <strong class="text-white">
                        ورود به سیستم
                    </strong>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import selectcomponent from './selectcomponent';

    export default {
        name: "SearchPlack",
        data() {
            return {
                componentid: 0,
                selectshow: false,
                char: '<i class="fas fa-wheelchair"></i>',
                charcode: '14',
                firstnum: null,
                secondnum: null,
                statecode: null,
                year: null,
                month: null,
                stateshow: true,

            }
        },
        components: {
            selectcomponent: selectcomponent,
        },
        watch: {
            firstnum(val) {
                if (val.length == 2) {
                    document.getElementById("secondnum").focus();
                }
            },
            secondnum(val) {
                if (val.length == 3) {
                    if (this.stateshow) {
                        document.getElementById("statecode").focus();
                    } else {
                        document.getElementById("statecode2").focus();
                    }
                }
            },
            statecode(val) {
                if (val.length == 2) {
                    if (this.stateshow) {
                        document.getElementById("button").focus();
                    } else {
                        document.getElementById("year").focus();
                    }
                }
            },
            year(val) {
                if (val.length == 2) {
                    document.getElementById("month").focus();
                }
            },
            month(val) {
                if (val.length == 2) {
                    if (val > 12){
                        this.month = 12;
                    }
                    document.getElementById("button").focus();
                }
            },
        },
        methods: {
            openselect() {
                this.componentid += 1;
                this.selectshow = true;
            },
            choosedchar(item, code) {
                this.char = item;
                this.charcode = code;
            },
            labelclass() {
                if (this.charcode == 14) {
                    return 'pt-1';
                } else {
                    return '';
                }
            },
            changeplack() {
                if (this.charcode == '01' || this.charcode == '05' || this.charcode == '23' || this.charcode == '13' || this.charcode == '03') {
                    return 'whitetext';
                } else {
                    return '';
                }
            },
            myplack() {
                if (this.charcode == '05' || this.charcode == '03') {
                    this.stateshow = true;
                    return '/media/green.png';
                } else if (this.charcode == '04' || this.charcode == '25' || this.charcode == '21') {
                    this.stateshow = true;
                    return '/media/yellow.png';
                } else if (this.charcode == '23' || this.charcode == '13') {
                    this.stateshow = true;
                    return '/media/blue.png';
                } else if (this.charcode == '26') {
                    this.stateshow = false;
                    return '/media/g.png';
                } else if (this.charcode == '01') {
                    this.stateshow = true;
                    return '/media/red.png';
                } else if (this.charcode == '16') {
                    this.stateshow = true;
                    return '/media/army.png';
                } else {
                    this.stateshow = true;
                    return '/media/plack.png';
                }
            }
        },
    }
</script>

<style scoped>
    .gozarmovaghat {
        width: 63px;
        right: 3px;
        top: 16px;
        height: 48px;
        /*background-color: rgba(0,0,0,0.5);*/
    }

    .whitetext {
        color: #fff;
    }

    .plack {
        margin-top: 100px;
    }

    .plackbox {
        width: 310px;
    }

    .plackbox img {
        width: 100%;
    }

    .plackborder {
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .firstnum, .secondnum, .statecode {
        font-size: 35px;
        border: none;
        box-shadow: none;
        outline: none;
        direction: ltr;
        text-align: center;
    }

    .gozartop {
        font-size: 25px;
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
        direction: ltr;
        text-align: center;
        max-width: 65px;
        left: 0;
        top: -7px;
        background-color: transparent;
    }

    .gozaryear {
        font-size: 25px;
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
        direction: ltr;
        text-align: center;
        max-width: 29px;
        left: 0;
        bottom: -8px;
        background-color: transparent;
    }

    .gozarmon {
        font-size: 25px;
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
        direction: ltr;
        text-align: center;
        max-width: 29px;
        right: -3px;
        bottom: -8px;
        background-color: transparent;
    }

    .char {
        width: 55px;
        left: 100px;
        top: 2px;
        font-size: 40px;
        cursor: pointer;
    }

    .charlabel {
        cursor: pointer;
    }

    .firstnum {
        max-width: 50px;
        left: 38px;
        top: 6px;
        background-color: transparent;
    }

    .secondnum {
        max-width: 70px;
        left: 165px;
        top: 6px;
        background-color: transparent;
    }

    .statecode {
        max-width: 55px;
        right: 6px;
        top: 18px;
        max-height: 46px;
        background-color: transparent;
    }

</style>