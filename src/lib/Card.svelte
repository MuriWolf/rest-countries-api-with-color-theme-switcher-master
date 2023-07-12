<script>
	export let countryName = 'unknown';
	export let population = 'unknown';
	export let region = 'unknown';
	export let capital = 'unknown';
	export let flagImgSrc = 'https://flagcdn.com/w320/us.png';
</script>

<a href="/card-details/{countryName}">
	<div class="bg-white dark:bg-gray-800 max-w-xs shadow--medium rounded-lg overflow-hidden">
		<img src={flagImgSrc} alt="" />
		<div class="p-7 pb-11">
			<h3 class="text-xl font-extrabold mb-4">{countryName}</h3>
			<div class="flex flex-col gap-1">
				<p><strong class="font-semibold">Population: </strong>{population}</p>
				<p><strong class="font-semibold">Region: </strong>{region}</p>
				<p><strong class="font-semibold">Capital: </strong>{capital}</p>
			</div>
		</div>
	</div>
</a>
