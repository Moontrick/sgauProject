
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string
            NODE_ENV: 'DEV' | 'PROD' | 'TEST'
        }
    }
}

export {}