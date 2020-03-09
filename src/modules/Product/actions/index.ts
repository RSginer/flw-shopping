import { config } from '../../../config';
import axios from 'axios';
export * from './types';

export async function fetchProducts() {
  return await axios.get(`${config.serverUri}/grocery`, {});
}