import { atom } from 'nanostores';

/** @type {Map<string, atom<any>>} */
const contextMap = new Map();

/**
 * Create a shared atom, which can be retrieved via the same function with the same name.
 * @param {string} name - A key to retrieve the shared atom, or to use to store a new atom.
 * @param {any} [initial] - An initial value to set the shared atom equal to, if it doesn't already exist.
 * @returns {atom<any>} An atom associated with the key `name`.
 */
export const useSharedAtom = (name, initial = null) => {
    if (contextMap.has(name)) return contextMap.get(name);
    const context = atom(initial);
    contextMap.set(name, context);
    return context;
}