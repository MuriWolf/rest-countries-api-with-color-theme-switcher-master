<script>
	import Card from '../lib/Card.svelte';
	import { onMount } from 'svelte';

	/** @type {any}*/
	let contriesData;
  let countriesSection;
	/*** @type {any}*/
	let filterdContriesData;
  let selectedContinent = '';
	let searchCountry = '';
  /*** @type {boolean}*/
  let hasCountries;

	onMount(async () => {
		await fetch('data.json')
			.then((res) => res.json())
			.then((data) => {
				contriesData = data;
			});
	});
	
	function verifyHasCountries() {
		// @ts-ignore
		filterdContriesData = contriesData.filter((country) => {
			return country.name.toLowerCase().includes(searchCountry.toLowerCase());
		});
    hasCountries = filterdContriesData.length === 0 ? false : true; 
	}
</script>

<main class="container px-3">
	<div class="p-4 flex gap-3 items-center mt-8 rounded shadow--medium bg-white">
		<p>icon</p>
		<input
			class="flex-1"
			type="text"
			bind:value={searchCountry}
			on:keyup={verifyHasCountries}
			placeholder="Search for a country..."
		/>
	</div>

	<select
		class="mt-14 bg-white dark:bg-gray-800 p-5 shadow--medium rounded border-none
    "
		name="selectContinent"
		id="selectContinent"
		bind:value={selectedContinent}
	>
		<option value="" selected disabled hidden>Filter by region</option>
		<option value="Africa">Africa</option>
		<option value="Americas">America</option>
		<option value="Asia">Asia</option>
		<option value="Europe">Europe</option>
		<option value="Oceania">Oceania</option>
		<option value="all">All</option>
	</select>

	<section class="flex justify-center items-center flex-col gap-10 mt-10">
		{#if contriesData}
			{#each contriesData as country (country.name)}
				<!-- vefiry the region  -->
				{#if country.region === selectedContinent || selectedContinent === 'all' || selectedContinent == ''}
					<!-- verify the search -->
					{#if country.name.toLowerCase().includes(searchCountry.toLowerCase())}
						<Card
							countryName={country.name}
							capital={country.capital}
							flagImgSrc={country.flags.png}
							region={country.region}
							population={country.population}
						/>
					{/if}
				{/if}
			{/each}
      {#if !hasCountries}
        <p>no countries found</p>
      {/if}
		{:else}
			<p class="text-center text-lg italic">Loading...</p>
		{/if}
	</section>
</main>

<style>
</style>