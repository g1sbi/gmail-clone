<script>
        import Header from '$lib/components/header.svelte'
        import Sidebar from '$lib/components/sidebar.svelte'
        import Apps from '$lib/components/apps.svelte'
</script>

<div>
        <Header/>
        <div>
                <Sidebar/>
                <slot/>
                <Apps/>
        </div>

</div>
