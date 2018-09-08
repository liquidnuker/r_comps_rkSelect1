// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import('./RkSelect1.jsx')
});