<script>
    export let messages;
</script>

<ul>
    {#each messages as message}
    <li>{message.subject}</li>
    {/each}	
</ul>