<script lang>
	const experienceItems = [
		{
			employer: 'Infrastructure For Information Inc.',
			job: 'Software Developer',
			location: 'Toronto (Hybrid)',
			time: 'May 2024 - Aug 2025',
			description: 'doing coop intern things',
			image: '',
			link: 'https://www.i4i.com/'
		},
		{
			employer: 'Iki Design Studios (Riipen Level Up Program)',
			job: 'Full Stack Developer',
			location: 'Remote',
			time: 'May 2024 - Jun 2024',
			link: 'https://levelup.riipen.com/users/4LA7MbBO',
			description: 'made react stuff',
			image: ''
		},
		{
			employer: 'Seafood City',
			job: 'Cashier',
			location: 'Scarborough',
			time: 'Apr 2022 - Aug 2022',
			link: 'https://www.seafoodcity.com/',
			description: 'cashed out ppl',
			image: ''
		}
	];
</script>

<div class="flex flex-col items-center w-screen">
	<div class="xl:max-w-screen-xl max-w-screen-sm">
		<div class="text-2xl text-center p-12">
			hi. im <span class="text-6xl ml-8">Hiro Miko Reyes</span>.<br />
			i like coding and music. <br />
			this is a barebones portfolio website.<br />
		</div>

		<div class="underline text-3xl">experience</div>
		{#each experienceItems as item, i}
			<div class="flex flex-col card px-4 py-8 m-4">
				<a href={item.link} class="text-2xl hover:text-primary-600 hover:animate-pulse ease-in">{item.employer}</a>
				{item.job} <br />
				{item.time} <br />
				{item.location} <br />
				<hr class="my-2" />
				<p class="text-center">
					{item.description} <br />
				</p>
			</div>
		{/each}

		<div class="underline text-3xl">projects</div>
	</div>
</div>
