import type { DBSchema } from 'idb';

export interface HighliteSchema extends DBSchema {
    resources: {
        key: string; //resource name
        value: {
            updatedAt: number; //timestamp of last update
            data: string; //base64 encoded data
        };
    };
    plugins: {
        key: string; // Plugin Name
        value: {
            config: {
                repository_owner: string;
                repository_name: string;
                asset_sha: string;
                display_name?: string;
                display_author?: string;
                display_description?: string;
            };
            blob: Blob;
        };
    };
    settings: {
        key: string; // User Name
        value: Record<string, Record<string, boolean | number | string>>; // Plugin Name -> Setting Name -> Value
    };
    drop_logs: {
        key: number; //NPC defId
        value: {
            defId: number;
            name: string;
            killCount: number;
            drops: {
                [itemId: number]: {
                    name: string;
                    quantity: number;
                    totalDropped: number;
                };
            };
            lastUpdated: number;
        };
    };
    data: {
        key: string; // User Name
        value: {
            [pluginName: string]: any; // Plugin Name -> Data
        }
    }
}
