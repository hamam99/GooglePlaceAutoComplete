import Axios from 'axios';
import ListUrl from '../ListUrl';

class AxiosWrapper {
  public get = (route: string): Promise<any> => {
    return Axios.get(ListUrl.BASE_URL + route);
  };

  public post = (route: string, paylaod: any): Promise<any> => {
    return Axios.post(ListUrl.BASE_URL + route, paylaod);
  };
}

export default new AxiosWrapper();
