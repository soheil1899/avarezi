<template>
    <div class="row plack mx-0 pt-3">
        <div class="col-12 midelcol px-0">

            <div class="plackbox mx-auto position-relative">
                <div v-if="plackflag">
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
                           :class="changeplack()+' secondnum position-absolute nazanin'" maxlength="3"
                           inputmode="number"
                           tabindex="3" placeholder="111">
                    <input id="statecode" v-if="stateshow" v-model="statecode" type="text"
                           :class="changeplack()+' statecode position-absolute nazanin'" maxlength="2"
                           inputmode="number"
                           tabindex="4" placeholder="11">
                    <div v-else class="gozarmovaghat position-absolute">
                        <input id="statecode2" v-model="statecode" type="text"
                               :class="changeplack()+' gozartop position-absolute nazanin'" maxlength="2"
                               inputmode="number"
                               tabindex="4" placeholder="11">
                        <input id="year" v-model="year" type="text"
                               :class="changeplack()+' gozaryear position-absolute nazanin'" maxlength="2"
                               inputmode="number"
                               tabindex="5" placeholder="11">
                        <input id="month" v-model="month" type="text"
                               :class="changeplack()+' gozarmon position-absolute nazanin'" maxlength="2"
                               inputmode="number"
                               tabindex="6" placeholder="11">
                    </div>
                </div>
                <div v-if="cartflag">
                    <img src="/media/cart.png">
                    <input id="cartno1" v-model="cartno1" type="text"
                           class="cartno1 position-absolute nazanin" maxlength="4" inputmode="number"
                           autofocus
                           tabindex="1" placeholder="xxxx">
                    <input id="cartno2" v-model="cartno2" type="text"
                           class="cartno2 position-absolute nazanin" maxlength="4" inputmode="number"
                           autofocus
                           tabindex="1" placeholder="xxxx">
                    <input id="cartno3" v-model="cartno3" type="text"
                           class="cartno3 position-absolute nazanin" maxlength="4" inputmode="number"
                           autofocus
                           tabindex="1" placeholder="xxxx">
                    <input id="cartno4" v-model="cartno4" type="text"
                           class="cartno4 position-absolute nazanin" maxlength="4" inputmode="number"
                           autofocus
                           tabindex="1" placeholder="xxxx">
                </div>
            </div>
            <div class="height100 text-center position-relative">
                <img src="/media/road.png" alt="" width="70px" height="100%">
                <div class="position-absolute myitems d-none d-lg-block">
                    <input type="button" class="btn btn-light btn-sm mt-1" value="آنی رو کارت" @click="changetocart" v-if="plackflag">
                    <input type="button" class="btn btn-light btn-sm mt-1" value="پلاک خودرو" @click="changetoplack" v-if="cartflag">
                </div>
                <div class="position-absolute myitems d-block d-lg-none">
                    <input type="button" class="btn btn-light btn-sm mt-1" value="آنی رو کارت" @click="changetocart" v-if="plackflag">
                    <input type="button" class="btn btn-light btn-sm mt-1" value="پلاک خودرو" @click="changetoplack" v-if="cartflag">
                    <div class="smallitem row pt-4 pt-md-5">
                        <div class="width100 text-left position-relative">
                            <img src="/media/redarrow.png" class="smallimg">
                            <div class="text-center position-absolute smallserviceleft">
                                <label class="font14">
                                    بدهی آزادراهــی
                                </label>
                            </div>

                            <div class="bobelsmallright boblered position-absolute pointer">
                                <div class="text-center mt-3 pointer">
                                    <label class="text-white labelpay font-weight-bolder pointer">
                                        جزئیات
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row smallitem">
                        <div class="width100 text-right position-relative">
                            <img src="/media/perpolarrow.png" class="smallimg">
                            <div class="text-center position-absolute smallserviceright">
                                <label class="font14">
                                    بدهی پارک حاشیه ای
                                </label>
                            </div>
                            <div class="bobelsmallleft bobleperpel position-absolute pointer">
                                <div class="text-center mt-3 pointer">
                                    <label class="text-white labelpay font-weight-bolder pointer">
                                        جزئیات
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row smallitem">
                        <div class="width100 text-left position-relative">
                            <img src="/media/bluearrow.png" class="smallimg">
                            <div class="text-center position-absolute smallserviceleft">
                                <label class="font13">
                                    بدهی عوارض طرح ترافیک
                                </label>
                            </div>
                            <div class="bobelsmallright bobleblue position-absolute pointer">
                                <div class="text-center mt-3 pointer">
                                    <label class="text-white labelpay font-weight-bolder pointer">
                                        جزئیات
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row smallitem">
                        <div class="width100 text-right position-relative">
                            <img src="/media/skyarrow.png" class="smallimg">
                            <div class="text-center position-absolute smallserviceright">
                                <label class="font14">
                                    بدهی طرح آلودگی هوا
                                </label>
                            </div>
                            <div class="bobelsmallleft boblesky position-absolute pointer">
                                <div class="text-center mt-3 pointer">
                                    <label class="text-white labelpay font-weight-bolder pointer">
                                        جزئیات
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row smallitem">
                        <div class="width100 text-left position-relative">
                            <img src="/media/yellowarrow.png" class="smallimg">
                            <div class="text-center position-absolute smallserviceleft">
                                <label class="font14">
                                    مجموع بدهــی
                                </label>
                            </div>
                            <div class="bobelsmallright bobleyellow position-absolute pointer">
                                <div class="text-center mt-3 pointer">
                                    <label class="text-white labelpay font-weight-bolder pointer">
                                        جزئیات
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
                char: 'ب',
                charcode: '14',
                firstnum: null,
                secondnum: null,
                statecode: null,
                year: null,
                month: null,
                stateshow: true,
                plackflag: true,
                cartflag: false,

                cartno1: null,
                cartno2: null,
                cartno3: null,
                cartno4: null,

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
                    if (val > 12) {
                        this.month = 12;
                    }
                    document.getElementById("button").focus();
                }
            },
            cartno1(val) {
                if (val.length == 4) {
                    document.getElementById("cartno2").focus();
                }
            },
            cartno2(val) {
                if (val.length == 4) {
                    document.getElementById("cartno3").focus();
                }
            },
            cartno3(val) {
                if (val.length == 4) {
                    document.getElementById("cartno4").focus();
                }
            },
        },
        methods: {
            changetocart() {
                this.plackflag = false;
                this.cartflag = true;
            },
            changetoplack() {
                this.plackflag = true;
                this.cartflag = false;
            },
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
    .cartno1 {
        left: 25px;
    }
    .cartno2 {
        left: 90px;
    }
    .cartno3 {
        left: 155px;
    }
    .cartno4 {
        left: 220px;
    }
    .cartno1, .cartno2, .cartno3, .cartno4{
        width: 70px;
        top: 35px;
        background-color: transparent;
        border: none;
        outline: none;
        direction: ltr;
        font-size: 25px;
        font-family: Arial;
        color: #272727;
        font-weight: bolder;
    }
    .cartno1:focus, .cartno2:focus, .cartno3:focus, .cartno4:focus{
        outline: none;
    }
    @media (max-width: 767.98px) {
        .smallitem {
            width: 100%;
            margin: -15px 0;
        }

        .smallserviceleft {
            width: 140px;
            top: 32px;
            left: 5px;
            font-weight: bolder;
        }

        .smallserviceright {
            width: 140px;
            top: 32px;
            right: 5px;
            font-weight: bolder;
        }

        .bobelsmallright {
            width: 70px;
            height: 60px;
            border-radius: 50%;
            top: 15%;
            right: 25px;
        }

        .bobelsmallleft {
            width: 70px;
            height: 60px;
            border-radius: 50%;
            top: 15%;
            left: 25px;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .smallitem {
            width: 60%;
            margin: -20px auto -20px 20%;
        }

        .smallserviceleft {
            width: 180px;
            top: 44px;
            left: 8px;
            font-weight: bolder;
        }

        .smallserviceright {
            width: 180px;
            top: 44px;
            right: 8px;
            font-weight: bolder;
        }

        .smallserviceleft label, .smallserviceright label {
            font-size: 16px;
        }

        .bobelsmallright {
            width: 70px;
            height: 60px;
            border-radius: 50%;
            top: 20%;
            right: 40px;
        }

        .bobelsmallleft {
            width: 70px;
            height: 60px;
            border-radius: 50%;
            top: 20%;
            left: 40px;
        }
    }

    .myitems {
        width: 100%;
    }

    .font13 {
        font-size: 13px;
    }

    .smallitem:first-child {
        padding-top: 40px;
    }

    .smallimg {
        width: 70%;
    }

    .width100 {
        width: 100%;
    }

    .gozarmovaghat {
        width: 63px;
        right: 3px;
        top: 16px;
        height: 48px;
        /*background-color: rgba(0,0,0,0.5);*/
    }

    .midelcol {
        overflow: hidden;
    }

    .height100 {
        height: 100%;
    }

    .widthfit {
        width: fit-content;
    }

    .whitetext {
        color: #fff;
    }

    .plack {
        height: 100%;
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