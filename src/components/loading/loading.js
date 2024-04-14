import loadingGif from '../../assets/loading.gif';
import './index.scss';

function LoadingIcon() {
  return (
    <>
      <div className="loading">
        <img className="loading__image" src={loadingGif} alt="loading..." />;
      </div>
    </>
  );
}

export default LoadingIcon;
