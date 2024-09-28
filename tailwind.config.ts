import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
    	extend: {
    		screens: {
    			xlc: '1370px'
    		},
    		fontFamily: {
    			main: ['var(--font-bai_jamjuree)']
    		},
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			dark: 'hsl(267.69deg 20.63% 12.35%)',
    			'raisin-black-1': 'hsl(234, 14%, 14%)',
    			'raisin-black-2': 'hsl(231, 12%, 12%)',
    			'raisin-black-3': 'hsl(228, 12%, 17%)',
    			'eerie-black': 'hsl(240, 11%, 9%)',
    			'light-gray': '#ebebeb',
    			xiketic: 'hsl(275, 24%, 10%)',
    			onyx: 'hsl(240, 5%, 26%)',
    			platium: 'hsl(0, 4%, 91%)',
    			'gradient-primary': 'linear-gradient(90deg, hsl(258.75deg 100% 56.08%), hsl(204.47deg 100% 50%) 100%);',
    			silver: '#C0C0C0',
    			'gray-8': '#888888',
    			'light-dark': '#303030',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			dashboadBorder: 'hsl(var(--dashboard-border))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		boxShadow: {
    			'shadow-1': '0 3px 7px hsla(345, 75%, 30%, 0.2), inset 0 3px 7px 0 hsla(335, 53%, 14%, 0.4)'
    		},
    		keyframes: {
    			fadeInUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate3d(0,100%,0)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateZ(0)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			fadeInUp: 'fadeInUp .5s linear forwards',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		borderRadius: {
    			xlg: 'calc(var(--radius) + 2px)',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
