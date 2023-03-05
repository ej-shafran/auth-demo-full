declare namespace NodeJS {
    interface ProcessEnv {
        DB_NAME: string;
        
        DB_HOST: string;
        DB_PORT: number;

        DB_USERNAME: string;
        DB_PASSWORD: string;

        TYPEORM_LOGGING: "on" | "off";
        TYPEORM_SYNC: "on" | "off";
    }
}