export interface QueryParams {
    [key: string]: string | undefined
}

export function generateQueryString(queryParams?: QueryParams) {
    return queryParams
        ? Object.keys(queryParams)
              .filter((key) => !!queryParams[key])
              .map((key) => {
                  if (queryParams[key]) {
                      return `${key}=${queryParams[key]}`
                  }

                  return ''
              })
              .join('&')
        : ''
}

export default async function baseFetch(
    path: string,
    queryParams?: QueryParams
) {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api/'
            : process.env.API_URL

    const reqPath = `${path}${
        queryParams ? `?${generateQueryString(queryParams)}` : ''
    }`

    return fetch(`${baseUrl}${reqPath}`, { cache: 'no-cache' })
}
