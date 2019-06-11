<template>
    <div>

        <Head title="采购退货"></Head>
        <divider>采购退货</divider>
        <h3>暂无数据</h3>

        <div style="padding:15px;">
            <x-button  @click.native="showPlugin2" type="primary">点击</x-button>
        </div>
        <div v-transfer-dom>
            <confirm v-model="show" title="你确定操作么" @on-cancel="onCancel"
                @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
            </confirm>
        </div>
       

    </div>
</template>

<script>

    import {
        Confirm,
        Group,
        XSwitch,
        XButton,
        TransferDomDirective as TransferDom,
        Divider

    } from 'vux'
    export default {
        name: 'purchaseth',
        directives: {
            TransferDom
        },
        data() {
            return {
                show: false,
            }
        },
        methods: {
            onCancel() {
                console.log('on cancel')
            },
            onConfirm(msg) {
                console.log('on confirm')
                if (msg) {
                    alert(msg)
                }
            },
            onHide() {
                console.log('on hide')
            },
            onShow() {
                console.log('on show')
            },
            showPlugin2() {
                this.show=true
            },
           
        },
      
        components: {
            Divider,
            Confirm,
            Group,
            XSwitch,
            XButton
        }
    }
</script>