import {error} from '@sveltejs/kit';
import { namesCountries } from "../../../../static/namesCountries";

export async function load({params}) {
    let data = params;
    let country = namesCountries.find((/** @type {any} */ name) => name === data.slug);
    if(!country) throw error(404);
    return {data}
}