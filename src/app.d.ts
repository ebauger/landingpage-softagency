// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	interface Platform {
		env?: {
			YOUR_KV_NAMESPACE: KVNamespace;
			YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
		};
	}
}
