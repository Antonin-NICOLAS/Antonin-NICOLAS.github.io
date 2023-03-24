import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: './src/medias/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox,
            fs: {
                // Le chemin absolu vers votre dossier contenant les fichiers GLB
                strict: true,
                allow: ['/medias/glb/'],
        },
    },
    plugins: [reactRefresh()],
    build: {
        outDir: resolve(__dirname, 'dist'),
        assetsDir: 'medias',
        emptyOutDir: true,
        chunkSizeWarningLimit: 2500,
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'src/index.html'),
            evolution: resolve(__dirname, 'src/evolution.html'),
            stage: resolve(__dirname, 'src/stage.html'),
            apropos: resolve(__dirname, 'src/a-propos.html'),
            motivation: resolve(__dirname, 'src/motivation.html'),
          },
        },
    },
}
