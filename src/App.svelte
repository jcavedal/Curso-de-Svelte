<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";
	let svelteLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbE4nJzFo9qHn8wMCj8Vlr3qv9dWa2Hm0XA&usqp=CAU";

	const data = {
		name: "Javier",
		lastName: "Cavedal",
		nickName: "Chavi",
		age: 24
	}

</script> 

<main>
	<h1>Hello {data.nickName} {data.lastName}!</h1>
	<About />
	<Text />
	<Person {...data}/>
	<Skills/>
	<img src={svelteLogo} alt="Svelte">
</main>

<style>

	:global(body) {
		background-color: #f2eee2;
		color: #0095FF;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #00FF6A;
	}

	:global(:root) {
		font-size: 22px;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width:20%;
	}

	h1 {
		color: #ff6a00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:global(button) {
		background-color: #ff6a00;
	}
</style>