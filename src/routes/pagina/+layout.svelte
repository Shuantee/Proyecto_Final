<script>
    import "../../h.css"
	import Encabezado from "./encabezado.svelte";
	import Pie from "./pie.svelte";
</script>
<Encabezado/>
<main>
    <slot/>
</main>
<Pie/>