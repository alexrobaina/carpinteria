import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export function useGetProducts(storeId: string) {
  return useQuery({
    queryKey: ['products', storeId],
    queryFn: async () => {
      const { data } = await api.get(`/stores/${storeId}/products`)
      return data
    },
    enabled: !!storeId,
  })
} 