import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/ISR_retenido.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieISRRetenido(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieISRRetenido; 