<script>
	import { onMount } from 'svelte';
	/*** @type {{ data: {slug: string | number} }}*/
	export let data;

	/**
	 * @typedef {Object} Country
	 * @property {string} name
	 * @property {string[]} topLevelDomain
	 * @property {string} alpha2Code
	 * @property {string} alpha3Code
	 * @property {string[]} callingCodes
	 * @property {string} capital
	 * @property {string[]} altSpellings
	 * @property {string} subregion
	 * @property {string} region
	 * @property {number} population
	 * @property {[number, number]} latlng
	 * @property {string} demonym
	 * @property {number} area
	 * @property {string[]} timezones
	 * @property {string[]} borders
	 * @property {string} nativeName
	 * @property {string} numericCode
	 * @property {{ svg: string, png: string }} flags
	 * @property {{ code: string, name: string, symbol: string }[]} currencies
	 * @property {{ iso639_1: string, iso639_2: string, name: string, nativeName: string }[]} languages
	 * @property {{ [key: string]: string }} translations
	 * @property {string} flag
	 * @property {{ acronym: string, name: string }[]} regionalBlocs
	 * @property {string} cioc
	 * @property {boolean} independent
	 */
	/** @type {Country} */
	let countryData;
    /**
	 * @type {any}
	 */
    let countryLanguages = [];
	onMount(async () => {
		await fetch('../data.json')
			.then((res) => res.json())
			.then((dataJson) => {
				countryData = dataJson.find((/** @type {any}*/ obj) => obj['name'] === data.data.slug);
                countryData.languages.forEach(lang => {
                    countryLanguages.push(lang.name);
                })
			});
	});
</script>

<a href="/"><div class="p-3 shadow bg-red-400 inline-block">back</div></a>

<article>
	{#if countryData}
		<img src={countryData.flags.png} alt="" />
		<h1>{countryData.name}</h1>
		<ul class="flex flex-col gap-2">
			<li><strong>Population: </strong>{countryData.population.toLocaleString("en")}</li>
			<li><strong>Native Name: </strong>{countryData.nativeName}</li>
			<li><strong>Region: </strong>{countryData.region}</li>
			<li><strong>Sub Region: </strong>{countryData.subregion}</li>
			<li><strong>Capital: </strong>{countryData.capital}</li>
		</ul>
		<ul class="flex flex-col gap-2 mt-8">
			<li><strong>Top Level Domain: </strong>{countryData.topLevelDomain}</li>
			<li><strong>Currencies: </strong>{countryData.currencies[0].name}</li> <li><strong>languages: </strong>{countryLanguages.join(', ')}</li>
		</ul>
		<h2 class="text-xl font-semibold">Border Countries</h2>
		<div class="flex gap-1">
			{#each countryData.borders as borderCountry}
				<div class="bg-red-400 px-2">{borderCountry}</div>
			{/each}
		</div>
	{:else}
		<p>loading...</p>
	{/if}
</article>
