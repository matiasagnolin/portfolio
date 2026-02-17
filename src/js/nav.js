/**
 * nav.js
 * Resolves internal URLs using Vite's BASE_URL so they work
 * both in local dev (/) and any production base path.
 *
 * import.meta.env.BASE_URL is injected at build time by Vite.
 * In dev:  BASE_URL = "/"
 * In prod: BASE_URL = "/" (custom domain) or "/portfolio/" (gh-pages without custom domain)
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, '') // strip trailing slash

/**
 * Resolves a root-relative path against the Vite base.
 * resolve('/docs') → '/docs'        (custom domain)
 * resolve('/docs') → '/portfolio/docs' (no custom domain)
 */
export function resolve(path) {
  return base + path
}

/**
 * Patches all [data-nav-href] anchor elements in the document
 * with their resolved URLs. Call once on DOMContentLoaded.
 *
 * Usage in HTML:  <a data-nav-href="/docs">Case Study</a>
 */
export function patchNavLinks() {
  document.querySelectorAll('[data-nav-href]').forEach((el) => {
    el.setAttribute('href', resolve(el.dataset.navHref))
  })
}

document.addEventListener('DOMContentLoaded', patchNavLinks)
