import PocketBase from 'pocketbase';
import type { TypedPocketBase } from './pocketbase-typegen';

export const pb = new PocketBase("http://127.0.0.1:8090/") as TypedPocketBase;