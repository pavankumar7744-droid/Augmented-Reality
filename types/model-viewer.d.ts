import type React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          poster?: string
          ar?: boolean
          'ar-modes'?: string
          'ar-scale'?: string
          'ar-placement'?: string
          'camera-controls'?: boolean
          'auto-rotate'?: boolean
          'auto-rotate-delay'?: string | number
          'rotation-per-second'?: string
          'camera-orbit'?: string
          'min-camera-orbit'?: string
          'max-camera-orbit'?: string
          'field-of-view'?: string
          'shadow-intensity'?: string | number
          'shadow-softness'?: string | number
          exposure?: string | number
          'environment-image'?: string
          'interaction-prompt'?: string
          loading?: string
          reveal?: string
          'tone-mapping'?: string
          'disable-zoom'?: boolean
          'disable-tap'?: boolean
        },
        HTMLElement
      >
    }
  }
}
