declare global {
    namespace App {
        interface Locals {
            user: {
                id: number;
                nombre: string;
            } | null;
        }
        interface PageData {
            user?: {
                id: number;
                nombre: string;
            } | null;
        }
    }
}

export {};