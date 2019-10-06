<template>
    <div class="row plack mx-0">
        <div class="col-12 col-md-10 col-lg-7 mx-auto py-5 plackborder">

            <div class="plackbox mx-auto position-relative">
                <img src="/media/plack.png">
                <input type="text" class="firstnum position-absolute nazanin" maxlength="2" inputmode="number" autofocus
                       tabindex="1" placeholder="11">
                <select id="char" name="char" tabindex="2" class="browser-default position-absolute char nazanin">
                    <option value="01">الف</option>
                    <option value="02">ب</option>
                    <option value="03">پ</option>
                    <option value="04">ت</option>
                    <option value="05">ث</option>
                    <option value="06">ج</option>
                    <option value="07">چ</option>
                    <option value="08">ح</option>
                    <option value="09">خ</option>
                    <option value="10">د</option>
                    <option value="11">ذ</option>
                    <option value="12">ر</option>
                    <option value="13">ز</option>
                    <option value="15">س</option>
                    <option value="16">ش</option>
                    <option value="17">ص</option>
                    <option value="18">ض</option>
                    <option value="19">ط</option>
                    <option value="20">ظ</option>
                    <option value="21">ع</option>
                    <option value="22">غ</option>
                    <option value="23">ف</option>
                    <option value="24">ق</option>
                    <option value="25">ک</option>
                    <option value="26">گ</option>
                    <option value="27">ل</option>
                    <option value="28">م</option>
                    <option value="29">ن</option>
                    <option value="30">و</option>
                    <option value="31">ه</option>
                    <option value="32">ی</option>
                </select>

                <input type="text" class="secondnum position-absolute nazanin" maxlength="3" inputmode="number" tabindex="3" placeholder="111">
                <input type="text" class="statecode position-absolute nazanin" maxlength="2" inputmode="number" tabindex="4" placeholder="11">
                <a class="btn btn-success pointer mt-3 btn-block">
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
    export default {
        name: "SearchPlack"
    }
</script>

<style scoped>
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
        background-color: rgba(255,255,255, 0.3);
    }

    .firstnum, .secondnum, .statecode {
        font-size: 35px;
        border: none;
        border-bottom: 2px solid #ccc;
        box-shadow: none;
        outline: none;
        direction: ltr;
        text-align: center;
    }

    .char {
        max-width: 60px;
        left: 96px;
        top: 8px;
        font-size: 30px;
    }

    .firstnum {
        max-width: 50px;
        left: 38px;
        top: 3px;
    }

    .secondnum {
        max-width: 70px;
        left: 165px;
        top: 3px;
    }

    .statecode {
        max-width: 50px;
        right: 6px;
        top: 13px;
        max-height: 46px;
    }

</style>