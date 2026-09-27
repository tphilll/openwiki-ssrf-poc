// Configuration handling for Demo Project
export const DEFAULTS={retries:3,timeout:1000};
export function load(env){return {...DEFAULTS,...env};}
