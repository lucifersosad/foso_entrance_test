import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
  	container: {
  		center: true,
  		padding: '15px',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			// Reference từ @theme inline
  			border: 'hsl(var(--color-border))',
  			input: 'hsl(var(--color-input))',
  			ring: 'hsl(var(--color-ring))',
  			background: 'hsl(var(--color-background))',
  			foreground: 'hsl(var(--color-foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--color-primary))',
  				foreground: 'hsl(var(--color-primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--color-secondary))',
  				foreground: 'hsl(var(--color-secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--color-destructive))',
  				foreground: 'hsl(var(--color-destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--color-muted))',
  				foreground: 'hsl(var(--color-muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--color-accent))',
  				foreground: 'hsl(var(--color-accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--color-popover))',
  				foreground: 'hsl(var(--color-popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--color-card))',
  				foreground: 'hsl(var(--color-card-foreground))'
  			},
  			// Custom colors từ @theme inline
  			rose: {
  				primary: 'var(--color-rose-primary)',
  				secondary: 'var(--color-rose-secondary)'
  			},
  			gray: {
  				primary: 'var(--color-gray-primary)',
  				secondary: 'var(--color-gray-secondary)',
  				background: 'var(--color-gray-background)',
  				text: 'var(--color-gray-text)',
  				disabled: 'var(--color-gray-disabled)'
  			},
  			blue: {
  				primary: 'var(--color-blue-primary)'
  			},
  			orange: {
  				primary: 'var(--color-orange-primary)'
  			},
  			green: {
  				primary: 'var(--color-green-primary)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			primary: 'var(--border-radius-primary)'
  		},
  		padding: {
  			primary: 'var(--spacing-primary)'
  		},
  		keyframes: {
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
  			},
				"slide-in-from-left": {
          "0%": { transform: "translate(-150%, -50%)" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
        "slide-out-to-left": {
          "0%": { transform: "translate(-50%, -50%)" },
          "100%": { transform: "translate(-150%, -50%)" },
        },
				"fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
				"slide-in": {
					"0%": { transform: "translateX(-150%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-out": {
					"0%": { transform: "translateX(150%)" },
					"100%": { transform: "translateX(0)" }
				},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				"slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-out-to-left": "slide-out-to-left 0.3s ease-in",
				"fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-in",
				"slide-in": "slide-in 0.3s ease-out",
				"slide-out": "slide-out 0.3s ease-out",
  		}
  	}
  },
} satisfies Config

export default config