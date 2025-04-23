import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/simple-expense-calculator/', // Must have leading and trailing slashes
})