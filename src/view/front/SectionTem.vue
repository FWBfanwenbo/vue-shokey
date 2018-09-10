<template>
    <section class="template">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionTemplate"
    }
</script>

<style scoped>
    .template{
        width: 100%;
        position: relative;
    }
    .container{
        width: 1200px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
</style>