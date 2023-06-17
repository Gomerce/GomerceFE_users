import axiosInstance from './axios'

/**
 *
 * @param url: string
 * @param token: string
 * @returns {Promise<any>}
 */
export const fetchRequest = async (url, token) => {
  const { data } = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

/**
 *
 * @param url: string
 * @param body: any
 * @param token: string
 * @param contentType: 'application/json' | 'multipart/form-data'
 * @returns {Promise<any>}
 */
export const mutatePostRequest = async (
  url,
  body,
  token,
  contentType
) => {
  const { data } = await axiosInstance.post(url, body, {
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

/**
 *
 * @param url: string
 * @param body: any
 * @param token: string
 * @param contentType: 'application/json' | 'multipart/form-data'
 * @returns {Promise<any>}
 */
export const mutatePatchRequest = async (
  url,
  body,
  token,
  contentType
) => {
  const { data } = await axiosInstance.patch(url, body, {
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

/**
 *
 * @param url: string
 * @param body: any
 * @param token: string
 * @param contentType: 'application/json' | 'multipart/form-data'
 * @returns {Promise<any>}
 */
export const mutatePutRequest = async (
  url,
  body,
  token,
  contentType
) => {
  const { data } = await axiosInstance.put(url, body, {
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

/**
 *
 * @param url: string
 * @param token: string
 * @returns {Promise<void>}
 */
export const mutateDeleteRequest = async (url, token) => {
  await axiosInstance.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
