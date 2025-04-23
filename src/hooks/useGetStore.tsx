import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { api } from '../services/api'
import { StoreType } from '@/types'

export function useGetStore(storeId: string | undefined): UseQueryResult<StoreType, Error> {
  return useQuery({
    queryKey: ['store', storeId],
    queryFn: async (): Promise<StoreType> => {
      const { data } = await api.get(`/store/${storeId}`)
      return data
    },
    enabled: !!storeId,
  })
} 