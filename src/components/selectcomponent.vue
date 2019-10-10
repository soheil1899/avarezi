<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document" dir="rtl">
            <div class="modal-content">

                <div class="modal-body row mx-0 justify-content-center">
                    <div :class="myclass(item.code) + ' col-2 col-md-1 my-1 px-1'" v-for="(item, index) in PlateLists" :key="index" >
                        <div class="text-center mychar py-1" v-html="item.item" @click="choosed(item.item, item.code)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectcomponent",
        data(){
            return{
                PlateLists: window.PlateList,
            }
        },
        methods:{
            myclass(code){
                if (code == '14'){
                    return 'blueback';
                }else{
                    return '';
                }
            },
            choosed(item, code){
                this.$parent.choosedchar(item, code);
                window.$('#exampleModal').modal('hide');
            }
        },
        mounted() {
            window.$('#exampleModal').modal('show');
        }
    }
</script>

<style scoped>
    .modal-body {
        font-size: 20px;
        font-weight: bolder;
    }
    .modal-content{
        background-color: #e8e8e8;
    }
    .mychar{
        background-color: #fff;
        border-radius: 3px;
        cursor: pointer;
    }
    .mychar:hover{
        background-color: #6d6cff;
        color: #fff;
    }
    .blueback  div{
        background-color: #4784c9 !important;
        color: #fff !important;
    }
    .blueback  div:hover{
        background-color: #6d6cff !important;
    }
    @media (min-width: 576px){
    .modal-dialog {
        margin: 150px auto;
    }}
    @media (max-width: 420px){
    .modal-dialog {
        margin: 100px auto;
    }}
</style>