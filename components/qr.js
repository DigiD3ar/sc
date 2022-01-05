import { QrReader } from '@blackbox-vision/react-qr-reader';

const MyQrReader = ({ onError, onResult }) => 
  <QrReader
     onError={onError}
     onResult={onResult}
     style={{ width: `100%` }}
     constraints={{ facingMode: 'environment' }}
  />
  
 export default MyQrReader;