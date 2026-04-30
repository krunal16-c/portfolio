import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A1917',
          light: '#2E2C28',
          pale: '#EEECEA',
        },
        rust: {
          DEFAULT: '#B54520',
          light: '#C95830',
          pale: '#FBEEE9',
        },
        sand: '#FAFAF7',
        paper: '#F2EDE3',
        ink: '#1A1917',
        muted: '#78726C',
        warm: '#DDD5C8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up-delay': 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.14s forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-up-late': 'fadeUp 0.8s ease 0.22s forwards',
        'fade-up-later': 'fadeUp 0.8s ease 0.38s forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.muted'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.rust.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-bullets': theme('colors.warm'),
            '--tw-prose-hr': theme('colors.warm'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.rust.DEFAULT'),
            '--tw-prose-code': theme('colors.charcoal.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.charcoal.DEFAULT'),
            maxWidth: 'none',
            'h1,h2,h3,h4': { fontFamily: theme('fontFamily.display').join(', ') },
            'p,li,blockquote': { fontFamily: theme('fontFamily.sans').join(', ') },
            code: { backgroundColor: theme('colors.paper'), padding: '0.15em 0.4em', borderRadius: '3px', fontWeight: '400' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#a8a29e',
            '--tw-prose-headings': '#f5f5f4',
            '--tw-prose-links': theme('colors.rust.light'),
            '--tw-prose-bold': '#f5f5f4',
            '--tw-prose-bullets': '#44403c',
            '--tw-prose-hr': '#44403c',
            '--tw-prose-quotes': '#f5f5f4',
            '--tw-prose-quote-borders': theme('colors.rust.light'),
            '--tw-prose-code': '#f5f5f4',
          },
        },
      }),
    },
  },
  plugins: [typography],
}
