<template>
    <div class="all" dir="rtl">
        <div class="firstpage position-relative">
            <div class="row mx-0 px-lg-5 px-1 py-3 headerlogos">
                <div class="widthfit mx-auto">
                    <a class="pointer">
                        <img src="/media/aaniro.png" height="35px" class="mx-lg-2">
                    </a>
                    <a class="pointer">
                        <img src="/media/cpay.png" height="35px" class="mx-lg-2">
                    </a>
                    <a class="pointer">
                        <img src="/media/logos.png" height="35px" class="mx-lg-2">
                    </a>
                    <a class="pointer">
                        <img src="/media/sepandar.png" height="35px" class="mx-lg-2">
                    </a>
                    <a class="pointer">
                        <img src="/media/mytehran.png" height="35px" class="mx-lg-2">
                    </a>
                    <a class="pointer">
                        <img src="/media/gilsa.png" height="35px" class="mx-lg-2">
                    </a>
                </div>
            </div>
            <div class="row mx-0 content pt-5 justify-content-center">
<!--                <div class="col-lg-4 d-none d-lg-block rightmenu pt-5">-->
<!--                    <div class="mile position-relative">-->
<!--                        <img src="/media/mile.png" class="imgmile">-->
<!--                        <div :style="leftarrow(1)" class="widthfit position-absolute pointer menuarrow">-->
<!--                            <img src="/media/left.png">-->
<!--                            <div class="position-absolute menutext pl-5">-->
<!--                                <h6 class="widthfit mx-auto"><strong>-->
<!--                                    پارک حاشیه ای-->
<!--                                </strong></h6>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div :style="rightarrow(1)" class="widthfit position-absolute pointer menuarrow">-->
<!--                            <img src="/media/right.png">-->
<!--                            <div class="position-absolute menutext pr-5">-->
<!--                                <h6 class="widthfit mx-auto"><strong>-->
<!--                                    عوارض آزادراه-->
<!--                                </strong></h6>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div :style="leftarrow(2)" class="widthfit position-absolute pointer menuarrow">-->
<!--                            <img src="/media/left.png">-->
<!--                            <div class="position-absolute menutext pl-5">-->
<!--                                <h6 class="widthfit mx-auto"><strong>-->
<!--                                    عوارض کنترل آلودگی هوا-->
<!--                                </strong></h6>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div :style="rightarrow(2)" class="widthfit position-absolute pointer menuarrow">-->
<!--                            <img src="/media/right.png">-->
<!--                            <div class="position-absolute menutext pr-5">-->
<!--                                <h6 class="widthfit mx-auto"><strong>-->
<!--                                    عوارض کنترل ترافیک-->
<!--                                </strong></h6>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->
                <div class="col-12 col-lg-8 leftplack">
                    <searchplack></searchplack>
                </div>
            </div>
            <div class="row mx-0 position-absolute topfooter">
                <div class="px-2 footertext mobileoption text-center">
                    <ul class="mx-0 my-1 font10 d-block d-md-none">
                        <li class="d-inline-block mx-1 hashie">پارک حاشیه ای</li>
                        <li class="d-inline-block mx-1">|</li>
                        <li class="d-inline-block mx-1 freeroad">عوارض آزادراه</li>
                        <li class="d-inline-block mx-1">|</li>
                        <li class="d-inline-block mx-1 air">عوارض کنترل آلودگی هوا</li>
                        <li class="d-inline-block mx-1">|</li>
                        <li class="d-inline-block mx-1 trafic">عوارض کنترل ترافیک</li>
                    </ul>
                    <ul class="mx-0 my-1 d-none d-md-block">
                        <li class="d-inline-block mx-2 hashie">پارک حاشیه ای</li>
                        <li class="d-inline-block mx-2">|</li>
                        <li class="d-inline-block mx-2 freeroad">عوارض آزادراه</li>
                        <li class="d-inline-block mx-2">|</li>
                        <li class="d-inline-block mx-2 air">عوارض کنترل آلودگی هوا</li>
                        <li class="d-inline-block mx-2">|</li>
                        <li class="d-inline-block mx-2 trafic">عوارض کنترل ترافیک</li>
                    </ul>
                </div>
                <div class="py-1 px-lg-5 px-1 footertext">
                    <div class="col-12 text-center d-none d-md-block" dir="ltr">
                        <div class="d-inline-block mx-lg-5 mx-2">
                            <i class="far fa-envelope fa-lg mx-1"></i>
                            Info@gilsa.ir
                        </div>

                        <div class="d-inline-block mx-lg-5 mx-2">
                            <i class="fas fa-phone-square-alt fa-lg mx-1"></i>
                            021-33265326 / 021-33265325
                        </div>
                        <div class="d-inline-block mx-lg-5 mx-2">
                            <i class="fas fa-mobile-alt fa-lg mx-1"></i>
                            0912-8576971 / 0935-2653652
                        </div>
                    </div>
                    <div class="col-12 text-center d-block d-md-none" dir="ltr">
                        <small>
                            <div class="d-inline-block mx-lg-5 mx-2">
                                <i class="far fa-envelope fa-lg mx-1"></i>
                                Info@gilsa.ir
                            </div>

                            <div class="d-inline-block mx-lg-5 mx-2">
                                <i class="fas fa-phone-square-alt fa-lg mx-1"></i>
                                021-33265326 / 021-33265325
                            </div>
                            <div class="d-inline-block mx-lg-5 mx-2">
                                <i class="fas fa-mobile-alt fa-lg mx-1"></i>
                                0912-8576971 / 0935-2653652
                            </div>
                        </small>
                    </div>
                </div>

            </div>
        </div>
        <div class="row mx-0 footer p-lg-5 py-5 px-2 text-right">
            <div class="col-12 col-lg-6 px-4">
                <h5>درباره ما</h5>
                <div class="footertext pt-3">
                    <p class="font14 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <p class="font14 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-2 px-4 mt-5 mt-lg-0">
                <h5>دسترسی ها</h5>
                <div class="footertext pt-3">
                    <ul class="footerlink">
                        <li><a>
                            درباره ما
                        </a></li>
                        <li><a>
                            تماس با ما
                        </a></li>
                        <li><a>
                            قوانین و مقررات
                        </a></li>
                        <li><a>
                            عوارض آزادراه
                        </a></li>
                    </ul>
                </div>
            </div>

            <div class="col-12 col-md-8 col-lg-4 px-4 mt-5 mt-lg-0">
                <h5>راه های ارتباطی</h5>
                <div class="row mx-0 footertext">
                    <div class="col-6 pt-4 text-center text-md-right text-lg-center socialmedia">
                        <a>
                            <i class="fab fa-2x fa-twitter ml-2"></i>
                        </a>
                        <a>
                            <i class="fab fa-2x fa-instagram ml-2"></i>
                        </a>
                        <a>
                            <i class="fab fa-2x fa-telegram-plane ml-2"></i>
                        </a>
                        <a>
                            <i class="fab fa-2x fa-google-plus-square"></i>
                        </a>
                    </div>
                    <div class="col-6 pt-4">
                        <a>
                            <img src="/media/android.png" class="d-block downloadapp mb-2">
                        </a>
                        <a>
                            <img src="/media/dl-eng.png" class="d-block downloadapp">
                        </a>
                    </div>
                </div>


            </div>
        </div>
        <div class="row mx-0 footerbottom py-1 px-3">
            <div class="widthfit mx-auto">
                <label class="d-none d-md-block">
                    تمام حقوق مادی و معنوی این سایت متعلق به شهر هوشمند گیلسا می باشد
                </label>
                <label class="font11 d-block d-md-none">
                    تمام حقوق مادی و معنوی این سایت متعلق به شهر هوشمند گیلسا می باشد
                </label>
                <small class="afrang d-block text-center" dir="ltr">
                    Powered By
                    <a href="http://afrangart.ir/">Afrang</a>
                    Design Studio - TISS Edition © 2018
                    <label v-if="mydate != 2018" class="afrang m-0">
                    - {{mydate}}
                    </label>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    import searchplack from './components/SearchPlack';

    export default {
        name: 'App',
        components: {
            'searchplack': searchplack,
        },
        data(){
            return{
                mydate: null,
            }
        },
        methods: {
            leftarrow(num) {
                var top = 80 + ((num - 1) * 140);
                return 'top:' + top + 'px; right: 26%;';
            },
            rightarrow(num) {
                var top = 10 + (num * 140);
                return 'top:' + top + 'px; left: 26%;';
            }
        },
        mounted() {
            // this.mydate = new Date();
            this.mydate = new Date().toJSON().slice(0,4);


            // console.log(this.mydate);
        }
    }
</script>

<style>
    .footerlink li{
        font-weight: normal;
    }
    .footerlink li:hover{
        font-weight: bolder;
        color: #fff;
    }
    .socialmedia i:hover{
        color: #fff;
    }
    .hashie{
        color: #ffd10f;
        cursor: default;
    }
    .hashie:hover{
        text-shadow: 0 0 0 #ffd10f;
    }
    .freeroad {
        color: #34e680;
        cursor: default;
    }
    .freeroad:hover{
        text-shadow: 0 0 0 #34e680;
    }
    .air{
        color: #529fff;
        cursor: default;
    }
    .air:hover{
        text-shadow: 0 0 0 #529fff;
    }
    .trafic{
        color: #ff6b55;
        cursor: default;
    }
    .trafic:hover{
        text-shadow: 0 0 0 #ff6b55;
    }
    .mobileoption{
        border-bottom: 1px solid #282889;
        width: 100%;
    }
.font10{
    font-size: 10px;
    font-weight: bolder;
}
    .footerbottom {
        background-color: #090b11;
        color: #807e9a;
        font-size: 14px;
    }

    .topfooter {
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 13, 26, 0.75);
        box-shadow: 0 -5px 5px -3px #282889;
    }

    .afrang {
        font-size: 10px;
        color: #514f61;
        font-family: Arial;
    }


    @import '~@fortawesome/fontawesome-free/css/fontawesome.css';
    @import '~@fortawesome/fontawesome-free/css/regular.css';
    @import '~@fortawesome/fontawesome-free/css/solid.css';
    @import '~@fortawesome/fontawesome-free/css/brands.css';

    @font-face {
        font-family: 'nazanin';
        src: url('/fonts/nazanin/Far_NazaninBd.ttf') format('truetype');
    }
    @font-face {
        font-family: 'IRANSans';
        src: url('/fonts/IranSans/Farsi_numerals/webFonts/fonts/eot/IRANSansWeb(FaNum).eot');
        src: url('/fonts/IranSans/Farsi_numerals/webFonts/fonts/eot/IRANSansWeb(FaNum).eot') format('embedded-opentype'),
        url('/fonts/IranSans/Farsi_numerals/webFonts/fonts/woff/IRANSansWeb(FaNum).woff') format('woff'),
        url('/fonts/IranSans/Farsi_numerals/webFonts/fonts/ttf/IRANSansWeb(FaNum).ttf') format('truetype'),
        url('/fonts/IranSans/Farsi_numerals/webFonts/fonts/woff2/IRANSansWeb(FaNum).woff2') format('woff2');
    }

    body * {
        font-family: IRANSans;
    }
    .nazanin{
        font-family: nazanin;
        font-weight: bolder;
    }

    .footer {
        color: #dadada;
        background-color: #0e111b;
        border-top: 1px solid #1c49e2;
    }

    .font11 {
        font-size: 11px;
    }

    html, body, .all, .rightmenu, .leftplack {
        height: 100%;
    }

    .headerlogos {
        position: absolute;
        top: 0;
        width: 100%;
        box-shadow: 0 0 5px 1px #282889;
    }

    .content {
        height: 100%;
    }

    .firstpage {
        background: url('/media/cover.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .mile {
        width: 100%;
        height: 100%;
    }

    .imgmile {
        width: 100%;
        height: 100%;
    }

    .pointer {
        cursor: pointer;
    }

    .widthfit {
        width: fit-content;
    }

    .menutext {
        top: 15px;
        width: 100%;
        color: #E2E2E2;
    }

    .menuarrow:hover .menutext > h6 {
        color: #ffe40a;
        text-shadow: 4px -2px 4px #7D7709;
    }

    .font14 {
        font-size: 14px;
    }

    .footertext {
        color: #b8b8b8;
        padding-right: 10px;
        width: 100%;
    }

    ul, li {
        list-style: none;
        padding: 0;
    }

    a {
        cursor: pointer;
    }

    .downloadapp {
        width: 100%;
        max-width: 150px;
    }
</style>
