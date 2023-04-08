<script lang='ts'>
    import Switch from "../Switch/Switch.svelte";
    import svg from "$lib/svgStore";
</script>

<footer class="w-full flex items-center justify-center">
    <div class="flex h-8 my-3 justify-center">
        <div class="grid h-7 flex-grow bg-base-100 place-items-end w-24">
            <Switch />
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid h-7 w-24 flex-grow bg-base-100 place-items-start items-center">
            <a href="https://github.com/wulfiss/weather" target="_blank" rel="noopener noreferrer">
                <img class="h-5 object-contain sm:h-5" src={$svg['icons']['github']} alt="github icon" srcset="">
            
            </a>
        </div>
      </div>
</footer>