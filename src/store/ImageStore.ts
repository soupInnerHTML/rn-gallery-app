import {action, flow, makeAutoObservable, observable} from 'mobx';
import {IImage} from '../types/image';
import {api} from '../api';
import {AxiosResponse} from 'axios';
import {IMAGES_PER_PAGE} from '../constants/api';

class ImageStore {
  @observable images: IImage[] = [];
  @observable page = 1;
  @observable loading = false;
  @observable error = '';

  constructor() {
    makeAutoObservable(this);
    this.fetchImages();
  }

  @flow.bound *fetchImages() {
    if (!this.loading) {
      this.loading = true;
      try {
        const response: AxiosResponse<IImage[]> = yield api.get('photos', {
          params: {
            page: this.page,
            per_page: IMAGES_PER_PAGE,
          },
        });
        const images = response.data.filter(
          ({id}) => !this.images.some(existing => existing.id === id),
        );
        this.images = [...this.images, ...images];
        this.page++;
        this.loading = false;
      } catch (e) {
        this.setError('Error fetching images. Please, try to use vpn');
      }
    }
  }

  @flow.bound *likePhoto(id: string) {
    try {
      yield api.post(`photos/${id}/like`);
    } catch (e) {
      this.setError('This functionality will be added in the future.');
    }
  }

  @action.bound refreshImages = async () => {
    this.page = 1;
    this.images = [];
    await this.fetchImages();
  };

  @action.bound setError(error: string) {
    this.error = error;
    this.loading = false;
  }
}

export const imageStore = new ImageStore();
