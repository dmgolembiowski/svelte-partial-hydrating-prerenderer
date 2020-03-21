// https://svelte.dev/docs#bind_element
// https://svelte.dev/docs#use_action
export function hydrate(node, componentProps) {
    // Injected by mark-hydratable-component.js
    window.markHydratableComponent &&
        window.markHydratableComponent(node, componentProps);
}
