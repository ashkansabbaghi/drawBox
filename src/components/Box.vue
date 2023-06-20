<template>
    <div class="box-wrapper">
        <div class="box"
        :style="{top : bTop+'px' , left : bLeft+'px' ,
        width :bWidth+'px' , height :bHeight+'px'}">
        </div>
    </div>

</template>

<script>
export default {
    props: {
        'b-top' :{type : Number},
        'b-left' :{type : Number},
        'b-width' :{type : Number},
        'b-height' :{type : Number},
    }
}
</script>

<style lang="scss" scoped>
    .box {
        position: absolute;
        border: 2px #90ee90 solid;

        // &:hover {
        //     border: 2px solid red;
        // }
        // &.active{
        //     background-color: rgba(96, 238, 96, 0.349);

        // }

        z-index: 3;
    }
</style>