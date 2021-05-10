import useSWR from 'swr'
import { Repository } from '../repositories/Repository';

function useFetch<Data = any, Error = any>(repository: Repository, method: string, payload: any = '') {

  const swrName = getSwrNameReference(repository, method, payload);

  const { data, error, mutate } = useSWR<Data, Error>(swrName, async (swrName) => {
    const response = await repository[method](payload);

    return response.data;
  })

  return { data, error, mutate }
}

function getSwrNameReference (repository: Repository, method: string, payload: object) {
  return repository.constructor.name + "|" + method + '|' + JSON.stringify(payload);
}


export { useFetch, getSwrNameReference };
