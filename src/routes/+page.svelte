<script>
    import { fetchProducts } from '$lib/index.js';
</script>

<svelte:head>
    <title>Products</title>
</svelte:head>

<h1>Product List</h1>

<svelte:boundary>
    {#await fetchProducts()}
        <p>Loading products...</p>
    {:then data}
        <p>Showing {data.products.length} of {data.total} products.</p>
        <ul class="list-none p-0">
            {#each data.products as product (product.id)}
                <li class="border border-gray-200 p-4 mb-4">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </li>
            {/each}
        </ul>
    {:catch error}
        <p style="color: red;">Error loading products: {error.message}</p>
    {/await}

    {#snippet pending()}
        <p>Boundary is working...</p>
    {/snippet}
</svelte:boundary>