let loaderPromise = null

/**
 * Lazily registers the <model-viewer> custom element exactly once,
 * shared across every component that needs it.
 */
export function ensureModelViewer() {
  if (typeof window === 'undefined') return null
  if (!loaderPromise) {
    loaderPromise = import('@google/model-viewer')
  }
  return loaderPromise
}
