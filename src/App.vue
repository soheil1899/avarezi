<template>
    <div class="all" dir="rtl">
        <div class="firstpage position-relative">
            <div class="row mx-0 content position-relative pt110">

                <div class="col-12 heightfit optionstop position-absolute">
                    <div class="row mx-0 justify-content-center">
                        <div class="col-12 col-lg-8 row m-0 px-1">
                            <div class="col text-center optionsbtn px-1 pointer">
                                <div class="pt-1 pointer">
                                    <label class="pointer d-none d-md-block">شارژ پلاک</label>
                                    <label class="pointer d-block d-md-none font11">شارژ پلاک</label>
                                </div>
                            </div>
                            <div class="col text-center optionsbtn px-1 pointer">
                                <div class="pt-1 pointer">
                                    <label class="pointer d-none d-md-block">شارژ آنی رو کارت</label>
                                    <label class="pointer d-block d-md-none font11">شارژ آنی رو کارت</label>
                                </div>
                            </div>
                            <div class="col text-center optionsbtn px-1 pointer">
                                <div class="pt-1 pointer">
                                    <label class="pointer d-none d-md-block">بدهی سی پی</label>
                                    <label class="pointer d-block d-md-none font11">بدهی سی پی</label>
                                </div>
                            </div>
                            <div class="col text-center optionsbtn px-1 pointer">
                                <div class="pt-1 pointer">
                                    <label class="pointer d-none d-md-block">شارژ سی پی</label>
                                    <label class="pointer d-block d-md-none font11">شارژ سی پی</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 order-lg-1 order-0 col-lg-4">
                    <searchplack></searchplack>
                </div>
                <div class="col-4 order-lg-0 order-1 pt-3 d-none d-lg-block">

                    <div class="row mr-5 px-5 mb70 position-relative">
                        <div class="col-12 p-3 inputbuttons">
                            <input type="button" class="btn btn-light btn-sm btn-block font-weight-bolder"
                                   value="ثبت نام">
                            <input type="button" class="btn btn-light btn-sm btn-block font-weight-bolder" value="ورود">
                            <input type="button" class="btn btn-primary btn-sm btn-block font-weight-bolder"
                                   value="پلاک جدید">
                        </div>
                    </div>
                    <div class="row mr-5 position-relative">
                        <div class="position-relative">
                            <img src="/media/perpolarrow.png" width="300px">
                            <div class="text-center position-absolute labelserviceright">
                                <label>
                                    بدهی پارک حاشیه ای
                                </label>
                            </div>
                        </div>
                        <div class="bobel-right1 bobleperpel position-absolute pointer">
                            <div class="text-center mt-4 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    پرداخت
                                </label>
                            </div>
                        </div>
                        <div class="bobel-right2 bobleperpel position-absolute pointer">
                            <div class="text-center mt-3 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    جزئیات پارک
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mr-5 position-relative">
                        <div class="position-relative">
                            <img src="/media/skyarrow.png" width="300px">
                            <div class="text-center position-absolute labelserviceright">
                                <label>
                                    بدهی طرح آلودگی هوا
                                </label>
                            </div>
                        </div>
                        <div class="bobel-right1 boblesky position-absolute pointer">
                            <div class="text-center mt-4 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    پرداخت
                                </label>
                            </div>
                        </div>
                        <div class="bobel-right2 boblesky position-absolute pointer">
                            <div class="text-center mt-3 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    جزئیات ورود
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 order-lg-2 order-2 pt-3 d-none d-lg-block">
                    <div class="row ml-5" dir="ltr">
                        <div>
                            <img src="/media/mylogo.png" width="200px">
                        </div>
                    </div>
                    <div class="row mtleft ml-5 position-relative" dir="ltr">
                        <div class="position-relative">
                            <img src="/media/redarrow.png" width="300px">
                            <div class="text-center position-absolute labelserviceleft">
                                <label>
                                    بدهی آزادراهــی
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left1 boblered position-absolute pointer">
                            <div class="text-center mt-4 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    پرداخت
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left2 boblered position-absolute pointer">
                            <div class="text-center mt-3 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    جزئیات تردد
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ml-5 position-relative" dir="ltr">
                        <div class="position-relative">
                            <img src="/media/bluearrow.png" width="300px">
                            <div class="text-center position-absolute labelserviceleft">
                                <label class="font14">
                                    بدهی عوارض طرح ترافیک
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left1 bobleblue position-absolute pointer">
                            <div class="text-center mt-4 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    پرداخت
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left2 bobleblue position-absolute pointer">
                            <div class="text-center mt-3 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    جزئیات تردد
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ml-5 position-relative" dir="ltr">
                        <div class="position-relative">
                            <img src="/media/yellowarrow.png" width="300px">
                            <div class="text-center position-absolute labelserviceleft">
                                <label>
                                    مجموع بدهــی
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left1 bobleyellow position-absolute pointer">
                            <div class="text-center mt-4 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    پرداخت
                                </label>
                            </div>
                        </div>
                        <div class="bobel-left2 bobleyellow position-absolute pointer">
                            <div class="text-center mt-3 pointer">
                                <label class="text-white labelpay font-weight-bolder pointer">
                                    ارسـال پیـام
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 px-lg-5 py-0 headerlogos">
                <div class="col-1 p-1 d-block d-lg-none position-relative text-right pr-3">
                    <i class="fas fa-bars fa-lg mt-2" @click="showmenuchange"></i>
                    <div class="card position-absolute mycard" v-if="showmenu">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item font13 px-2 py-1 font-weight-bolder">
                                ثبت نام
                            </li>
                            <li class="list-group-item font13 px-2 py-1 font-weight-bolder">
                                ورود
                            </li>
                            <li class="list-group-item font13 px-2 py-1 font-weight-bolder">
                                پلاک جدید
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-9 col-lg-12 py-2">
                    <div class="widthfit mx-auto">
                        <a class="pointer">
                            <img src="/media/aaniro.png" height="25px" class="mx-lg-2">
                        </a>
                        <a class="pointer">
                            <img src="/media/cpay.png" height="25px" class="mx-lg-2">
                        </a>
                        <a class="pointer">
                            <img src="/media/logos.png" height="25px" class="mx-lg-2">
                        </a>
                        <a class="pointer">
                            <img src="/media/sepandar.png" height="25px" class="mx-lg-2">
                        </a>
                        <a class="pointer">
                            <img src="/media/mytehran.png" height="25px" class="mx-lg-2">
                        </a>
                        <a class="pointer">
                            <img src="/media/gilsa.png" height="25px" class="mx-lg-2">
                        </a>
                    </div>
                </div>
                <div class="col-2 p-1 d-block d-lg-none">
                    <img src="/media/mylogo2.png" class="d-block d-md-none" width="100%">
                    <img src="/media/mylogo2.png" class="d-none d-md-block d-lg-none" width="65%">
                </div>

            </div>
            <div class="row mx-0 position-absolute topfooter">
                <div class="row mx-auto footerbottom py-1 px-3">
                    <div class="widthfit">
                        <label class="font11 mb-1 d-none d-md-block">
                            تمام حقوق مادی و معنوی این سایت متعلق به شهر هوشمند گیلسا می باشد
                        </label>
                        <small>
                            <label class="font10 mb-1 d-block d-md-none font-weight-normal">
                                تمام حقوق مادی و معنوی این سایت متعلق به شهر هوشمند گیلسا می باشد
                            </label>
                        </small>
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
        data() {
            return {
                mydate: null,
                showmenu: false,
            }
        },
        methods: {
            showmenuchange(){
                this.showmenu ? this.showmenu = false : this.showmenu = true;
            },
        },
        mounted() {
            this.mydate = new Date().toJSON().slice(0, 4);
        }
    }
</script>

<style>
    .font12{
        font-size: 12px;
    }
    .font13{
        font-size: 13px;
    }
    .mycard{
        top: 30px;
        z-index: 10000;
        width: max-content;
    }
    .optionsbtn:hover > div {
        background-color: #3455e2;
    }

    .optionsbtn > div {
        background-color: #2a45b8;
        color: #E2E2E2;
        font-weight: bolder;
        border: 1px solid #9aabe2;
    }

    .optionstop {
        top: 50px;
    }

    .heightfit {
        height: fit-content;
    }

    .labelpay {
        font-size: 18px;
    }

    .labelserviceright {
        width: 150px;
        top: 38px;
        right: 9px;
        font-weight: bolder;
    }

    .labelserviceleft {
        width: 150px;
        top: 38px;
        left: 9px;
        font-weight: bolder;
    }

    .mb70 {
        margin-bottom: 70px;
    }

    .inputbuttons {
        border: 1px solid #a8bee4;
        border-radius: 5px;
    }

    .mtleft {
        margin-top: 50px;
    }

    .bobleyellow {
        background: radial-gradient(ellipse at center, rgb(227, 151, 0) 0%, rgb(255, 169, 0) 100%);
    }

    .bobleyellow:hover {
        background: radial-gradient(ellipse at center, rgb(242, 161, 0) 0%, rgb(255, 181, 26) 100%);
    }

    .bobleblue {
        background: radial-gradient(ellipse at center, rgb(12, 88, 181) 0%, rgb(18, 103, 216) 100%);
    }

    .bobleblue:hover {
        background: radial-gradient(ellipse at center, rgb(14, 100, 205) 0%, rgb(19, 113, 237) 100%);
    }

    .boblered {
        background: radial-gradient(ellipse at center, rgb(198, 2, 50) 0%, rgb(246, 2, 55) 100%);
    }

    .boblered:hover {
        background: radial-gradient(ellipse at center, rgb(221, 2, 56) 0%, rgb(255, 2, 56) 100%);
    }

    .bobleperpel {
        background: radial-gradient(ellipse at center, rgb(156, 40, 213) 0%, rgb(171, 53, 233) 100%);
    }

    .bobleperpel:hover {
        background: radial-gradient(ellipse at center, rgb(169, 43, 230) 0%, rgb(182, 56, 248) 100%);
    }

    .boblesky {
        background: radial-gradient(ellipse at center, rgb(21, 188, 208) 0%, rgb(20, 225, 236) 100%);
    }

    .boblesky:hover {
        background: radial-gradient(ellipse at center, rgb(23, 204, 226) 0%, rgb(21, 237, 249) 100%);
    }

    .bobel-right1 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        top: 10px;
        left: -20px;
    }

    .bobel-right2 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        top: 10px;
        left: -110px;
    }

    .bobel-left1 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        top: 10px;
        right: -20px;
    }

    .bobel-left2 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        top: 10px;
        right: -110px;
    }

    .pt110 {
        padding-top: 110px;
    }

    .footerlink li {
        font-weight: normal;
    }

    .footerlink li:hover {
        font-weight: bolder;
        color: #fff;
    }

    .socialmedia i:hover {
        color: #fff;
    }

    .hashie {
        color: #ffd10f;
        cursor: default;
    }

    .hashie:hover {
        text-shadow: 0 0 0 #ffd10f;
    }

    .freeroad {
        color: #34e680;
        cursor: default;
    }

    .freeroad:hover {
        text-shadow: 0 0 0 #34e680;
    }

    .air {
        color: #529fff;
        cursor: default;
    }

    .air:hover {
        text-shadow: 0 0 0 #529fff;
    }

    .trafic {
        color: #ff6b55;
        cursor: default;
    }

    .trafic:hover {
        text-shadow: 0 0 0 #ff6b55;
    }

    .mobileoption {
        border-bottom: 1px solid #282889;
        width: 100%;
    }

    .font10 {
        font-size: 10px;
        font-weight: bolder;
    }

    .footerbottom {
        color: #e0e0e0;
        font-size: 14px;
    }

    .topfooter {
        bottom: 0;
        width: 100%;
        background-color: #1340c7eb;
        box-shadow: 0 -5px 5px -3px #282889;
    }

    .afrang {
        font-size: 10px;
        color: #9e9e9e;
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

    .nazanin {
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
        background-color: rgba(255, 255, 255, 0.9);
    }

    .content {
        height: 100%;
    }

    .firstpage {
        background: url('/media/back.png');
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
        color: #8fc5ff !important;
        cursor: pointer;
    }

    .downloadapp {
        width: 100%;
        max-width: 150px;
    }
</style>
