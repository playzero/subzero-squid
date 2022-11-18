import { IdentityUpsertData } from '../types/identity';

import { Identity } from '../../model';

import { get } from './getters';
import { Store } from '@subsquid/substrate-processor';

function getIdentity(store: Store, identity: string): Promise<Identity | null> {
	return get(store, Identity, identity);
}

async function upsertIdentity(store: Store, identity: string, data: IdentityUpsertData | null): Promise<Identity> {
	/*
	 * 1) Get existing identity
	 * 2) If not found, create new one
	 */
	let entity = await getIdentity(store, identity);
	if (!entity) {
		entity = new Identity();
		entity.id = identity;
		entity.address = identity;
	}

	if (data) {
		entity.displayName = data.displayName;
		entity.legalName = data.legalName;
		entity.email = data.email;
		entity.riot = data.riot;
		entity.image = data.image;
		entity.twitter = data.twitter;
		entity.web = data.web;
		entity.web3name = data.web3name;
		entity.discord = data.discord;
	}

	await store.save(entity);

	return entity;
}

// Exports
export { getIdentity, upsertIdentity };
