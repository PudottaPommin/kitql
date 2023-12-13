/* eslint-disable */
/** 
 * This file was generated by 'vite-plugin-kit-routes'
 * 
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
export const PAGE__ROOT = `/`
export const PAGE_subGroup = `/subGroup`
export const PAGE_subGroup_user = `/subGroup/user`
export const PAGE_subGroup2 = (first: (string | number), params?: {  }) => {
  return `/subGroup2${appendSp({ first })}` 
}
export const PAGE_contract = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }, sp?: Record<string, string | number>) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/contract${appendSp(sp)}` 
}
export const PAGE_contract_id = (id: (string | number), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/contract/${id}` 
}
export const PAGE_gp_one = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/gp/one` 
}
export const PAGE_gp_two = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/gp/two` 
}
export const PAGE_main = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/main` 
}
export const PAGE_match_id_ab = (id: (Parameters<typeof import('../params/ab.ts').match>[0]), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/match/${id}` 
}
export const PAGE_match_id_int = (id: (number), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/match/${id}` 
}
export const PAGE_site = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }, sp?: Record<string, string | number>) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site${appendSp({ ...sp, limit: params?.limit })}` 
}
export const PAGE_site_id = (params?: { lang?: ('fr' | 'hu' | undefined), id?: (string), limit?: (number), demo?: (string) }) => {
  params = params ?? {}
  params.lang = params.lang ?? "fr"; 
  params.id = params.id ?? "Vienna"; 
  return `${params?.lang ? `/${params?.lang}`: ''}/site/${params.id}${appendSp({ limit: params?.limit, demo: params?.demo })}` 
}
export const PAGE_site_contract_siteId_contractId = (params: { siteId: (string | number), contractId: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site_contract/${params.siteId}-${params.contractId}${appendSp({ limit: params?.limit })}` 
}
export const PAGE_a_rest_z = (rest: (string | number)[], params?: {  }) => {
  return `/a/${rest?.join('/')}/z` 
}
export const PAGE_lay_normal = `/lay/normal`
export const PAGE_lay_root_layout = `/lay/root-layout`
export const PAGE_lay_skip = `/lay/skip`
export const PAGE_sp = `/sp`

/**
 * SERVERS
 */
export const SERVER_GET_server_func_get = `/server_func_get`
export const SERVER_POST_server_func_post = `/server_func_post`
export const SERVER_GET_contract = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/contract` 
}
export const SERVER_POST_contract = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/contract` 
}
export const SERVER_GET_site = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site` 
}
export const SERVER_GET_api_graphql = `/api/graphql`
export const SERVER_POST_api_graphql = `/api/graphql`
export const SERVER_GET_data_errors_locale_json = (locale: (string | number), params?: {  }) => {
  return `/data/errors/${locale}.json` 
}

/**
 * ACTIONS
 */
export const ACTION_default_contract_id = (id: (string | number), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/contract/${id}${appendSp({ limit: params?.limit })}` 
}
export const ACTION_create_site = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site?/create` 
}
export const ACTION_update_site_id = (id: (string | number), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site/${id}?/update` 
}
export const ACTION_delete_site_id = (id: (string | number), params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site/${id}?/delete` 
}
export const ACTION_noSatisfies_site_contract = (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
  return `${params?.lang ? `/${params?.lang}`: ''}/site_contract?/noSatisfies` 
}
export const ACTION_send_site_contract_siteId_contractId = (params: { siteId: (string | number), contractId: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string), extra?: ('A' | 'B') }) => {
  params.extra = params.extra ?? "A"; 
  return `${params?.lang ? `/${params?.lang}`: ''}/site_contract/${params.siteId}-${params.contractId}?/send${appendSp({ extra: params?.extra }, '&')}` 
}

/**
 * LINKS
 */
export const LINK_twitter = `https://twitter.com/jycouet`
export const LINK_twitter_post = (params: { name: (string | number), id: (string | number) }) => {
  return `https://twitter.com/${params.name}/status/${params.id}` 
}
export const LINK_gravatar = (str: (string | number), params?: { s?: (number), d?: ("retro" | "identicon") }) => {
  params = params ?? {}
  params.s = params.s ?? 75; 
  params.d = params.d ?? "identicon"; 
  return `https://www.gravatar.com/avatar/${str}${appendSp({ s: params?.s, d: params?.d })}` 
}

/**
 * Append search params to a string
 */
const appendSp = (sp?: Record<string, string | number | undefined>, prefix: '?' | '&' = '?') => {
  if (sp === undefined) return ''
  const mapping = Object.entries(sp)
    .filter(c => c[1] !== undefined)
    .map(c => [c[0], String(c[1])])

  const formated = new URLSearchParams(mapping).toString()
  if (formated) {
    return `${prefix}${formated}`
  }
  return ''
}

/**
 * get the current search params
 * 
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */ 
export const currentSp = () => {
  const params = new URLSearchParams(window.location.search)
  const record: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    record[key] = value
  }
  return record
}

/**
* Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
* 
* Full example:
* ```ts
* import type { KIT_ROUTES } from '$lib/ROUTES'
* import { kitRoutes } from 'vite-plugin-kit-routes'
* 
* kitRoutes<KIT_ROUTES>({
*  PAGES: {
*    // here, key of object will be typed!
*  }
* })
* ```
*/
export type KIT_ROUTES = { 
  PAGES: { '_ROOT': never, 'subGroup': never, 'subGroup_user': never, 'subGroup2': never, 'contract': 'lang', 'contract_id': 'lang' | 'id', 'gp_one': 'lang', 'gp_two': 'lang', 'main': 'lang', 'match_id_ab': 'lang' | 'id', 'match_id_int': 'lang' | 'id', 'site': 'lang', 'site_id': 'lang' | 'id', 'site_contract_siteId_contractId': 'siteId' | 'contractId' | 'lang', 'a_rest_z': 'rest', 'lay_normal': never, 'lay_root_layout': never, 'lay_skip': never, 'sp': never }
  SERVERS: { 'GET_server_func_get': never, 'POST_server_func_post': never, 'GET_contract': 'lang', 'POST_contract': 'lang', 'GET_site': 'lang', 'GET_api_graphql': never, 'POST_api_graphql': never, 'GET_data_errors_locale_json': 'locale' }
  ACTIONS: { 'default_contract_id': 'lang' | 'id', 'create_site': 'lang', 'update_site_id': 'lang' | 'id', 'delete_site_id': 'lang' | 'id', 'noSatisfies_site_contract': 'lang', 'send_site_contract_siteId_contractId': 'siteId' | 'contractId' | 'lang' }
  LINKS: { 'twitter': never, 'twitter_post': 'name' | 'id', 'gravatar': 'str' }
  Params: { first: never, lang: never, id: never, limit: never, demo: never, siteId: never, contractId: never, rest: never, locale: never, extra: never, name: never, str: never, s: never, d: never }
}
