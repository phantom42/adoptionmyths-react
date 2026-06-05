import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { IncomingMessage, ServerResponse } from 'http';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
	const env = loadEnv(mode, process.cwd(), '');

	function adminAuth(req: IncomingMessage, res: ServerResponse, next: () => void) {
		const auth = req.headers['authorization'];
		if (auth) {
			const [, encoded] = auth.split(' ');
			const [user, pass] = Buffer.from(encoded, 'base64').toString().split(':');
			if (user === env.ADMIN_USER && pass === env.ADMIN_PASS) return next();
		}
		res.statusCode = 401;
		res.setHeader('WWW-Authenticate', 'Basic realm="Admin"');
		res.end('Unauthorized');
	}

	return {
		plugins: [
			react(),
			tailwindcss(),
			{
				name: 'admin-auth',
				configureServer(server) {
					server.middlewares.use('/admin', adminAuth);
				},
			},
		],
		server: {
			port: 5173,
			proxy: {
				"/api": {
					target: env.VITE_API_URL,
					changeOrigin: true
				}
			}
		},
		test: {
			environment: 'jsdom',
			globals: true,
			setupFiles: './src/test/setup.ts',
		}
	}
})
