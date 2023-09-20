<script lang="ts">
	export let heroSection: HTMLElement;
	export let content: any;
</script>

<section id="hero" class="relative h-screen w-screen min-w-full border-2" bind:this={heroSection}>
	<div class="z-10 flex h-full w-full place-content-center bg-opacity-80">
		<div class="flex flex-col place-content-center items-center gap-6 rounded-full">
			<img src="/Zbranch.png" alt={content.heroContent.logoAlt} width="150px" />
			<h1 class="anim pt-6 text-5xl font-extrabold italic sm:text-6xl">
				{content.heroContent.title}
			</h1>
			<h2 class="p-8 text-4xl font-extrabold sm:text-5xl">{content.heroContent.subtitle}</h2>
			<div class="cta-zone flex flex-col-reverse overflow-y-hidden sm:flex-row sm:gap-6">
				<a
					class="bg-initial btn mx-auto my-8 w-max text-2xl text-neutral-600 hover:text-neutral-950"
					href={content.heroContent.cta1Href}>{content.heroContent.cta1}</a
				>
				<a
					class="btn variant-filled-primary mx-auto my-8 w-max border-b-4 border-primary-900 text-2xl hover:translate-y-1"
					href="#plans">{content.heroContent.cta2}</a
				>
			</div>
		</div>
	</div>
	<div class="z-0">
		<div class="blob-left slideInRight">
			<img
				src="/demidonut1.svg"
				alt="blob"
				class="absolute -left-4 top-0 w-24 md:left-0 md:top-20 md:w-[150px] 2xl:w-[240px]"
			/>
			<img
				src="/blobSquareMulti.svg"
				alt="blob"
				class="absolute -left-4 top-0 w-24 md:left-0 md:top-20 md:w-[150px] 2xl:w-[240px]"
			/>
		</div>
		<div class="blob-right slideInLeft">
			<img
				src="/demidonut2.svg"
				alt="blob"
				class="absolute -right-4 bottom-1/2 z-0 w-24 md:visible md:bottom-40 md:right-5 md:w-[150px] 2xl:w-[240px]"
			/>
			<img
				src="/circleDots.svg"
				alt="blob"
				class="absolute -right-4 bottom-1/2 z-0 w-24 md:visible md:bottom-40 md:right-5 md:w-[150px] 2xl:w-[240px]"
			/>
		</div>
	</div>
</section>
