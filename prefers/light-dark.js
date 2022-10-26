import { atom } from 'nanostores';
import { supportsPreferences } from "../supports.js";
/**
 * When a user prefers a light color scheme.
 * If not supported, defaults to `true`.
 * @type {atom<boolean>}
 */
 export const prefersLight = atom(supportsPreferences ? window.matchMedia('(prefers-color-scheme: light)').matches : true);
 supportsPreferences && window.matchMedia('(prefers-color-scheme: light')
     .addEventListener('change', ({ matches }) => prefersLight.set(matches));
 
 /**
  * When a user prefers a dark color scheme.
  * If not supported, defaults to `false`.
  * @type {atom<boolean>}
 */
 export const prefersDark = computed(prefersLight, light => !light);
 