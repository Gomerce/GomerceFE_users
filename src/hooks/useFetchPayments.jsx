import { useCallback, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchRequest } from '../utils/fetchers'
import { PAYMENT_KEY } from '../constants'

const useFetchPayments = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const token = await getAccessTokenSilently()
      const data = await fetchRequest(PAYMENT_KEY, token)
      setResponse(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setError(e)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { response, loading, error }
}

export default useFetchPayments
