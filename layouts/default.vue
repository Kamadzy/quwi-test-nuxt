<template>
    <div>
        <NavBar/>
        <Nuxt/>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    export default {
        name: 'default',
        components: {
            NavBar
        }
    };
</script>
