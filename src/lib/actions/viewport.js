// @ts-nocheck
/*
    A viewport action that:

    - fires event `enterViewport` when element enters the viewport
    - adds css class `.onscreen` when element enters the viewport
  - fires event `exitViewport` when element leaves the viewport
      - adds css class `.offscreen` when element leaves the viewport
    - can be set to run once, by passing `once: true` to the action's options 

 forked from: https://svelte.dev/repl/1c57533d63774c818203a7a5898eb34d
*/

let intersectionObserver

function ensureIntersectionObserver() {
    if (intersectionObserver) return

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
                const className = entry.isIntersecting ? 'onscreen' : 'offscreen'
                const element = entry.target

                element.dispatchEvent(new CustomEvent(eventName))

                element.classList.remove('onscreen', 'offscreen')
                element.classList.add(className)

                if (entry.isIntersecting && element.viewportOptions.once) {
                    intersectionObserver.unobserve(element)
                }
            })
        }
    )
}

export default function viewport(element, options = {}) {
    element.viewportOptions = options

    ensureIntersectionObserver()

    intersectionObserver.observe(element)

    return {
        update(options = {}) {
            element.viewportOptions = options
            intersectionObserver.observe(element)
        },
        destroy() {
            intersectionObserver.unobserve(element)
        }
    }
}