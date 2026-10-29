import { useNavigate } from 'react-router-dom';
import JciaPage from './JciaPage';

const JciaRoute = () => {
  const navigate = useNavigate();
  return <JciaPage onBack={() => navigate('/')} />;
};

export default JciaRoute;
