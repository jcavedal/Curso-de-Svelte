import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Chavi',
		lastName: 'Cavedal'
	}
});

export default app;