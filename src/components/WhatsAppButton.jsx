import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phone = '919486365972';
  const message = encodeURIComponent('Hi! I am interested in a tour package. Can you help me?');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="whatsapp-pulse" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="28" height="28">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.785L0 32l8.418-2.007A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.771-1.851l-.485-.288-5.003 1.194 1.214-4.878-.316-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.878c-.399-.199-2.358-1.163-2.724-1.296-.366-.133-.632-.199-.898.2-.266.398-1.031 1.296-1.264 1.562-.232.265-.465.298-.864.1-.399-.2-1.685-.621-3.21-1.98-1.186-1.058-1.988-2.364-2.22-2.763-.232-.398-.025-.614.174-.812.179-.179.399-.465.598-.698.2-.232.266-.398.399-.664.133-.265.067-.498-.033-.698-.1-.199-.898-2.165-1.231-2.963-.324-.778-.653-.673-.898-.686l-.764-.013c-.266 0-.698.1-1.064.498-.366.398-1.397 1.364-1.397 3.33 0 1.965 1.43 3.863 1.629 4.129.199.265 2.814 4.296 6.82 6.026.954.412 1.698.658 2.279.843.957.305 1.829.262 2.517.159.767-.114 2.358-.964 2.691-1.895.332-.931.332-1.729.232-1.895-.099-.166-.365-.266-.764-.465z"/>
      </svg>
      <span className="whatsapp-label">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
