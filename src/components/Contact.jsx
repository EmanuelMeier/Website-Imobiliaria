import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      toast.success("Formulário Enviado com Sucesso!");
      event.target.reset();
    }, 2000);
  };

  return (
    <div>
      <ToastContainer />
      <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' 
        id='Contato'
      >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
          Fale <span className='underline underline-offset-4 decoration-1 font-light'>Conosco</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
          Pronto para Fazer uma Mudança? Vamos Construir Seu Futuro Juntos
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
              Seu Nome
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                type="text" 
                name='Name' 
                placeholder='Seu Nome' 
                required 
              />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Seu Email
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                type="email" 
                name='Email' 
                placeholder='Seu Email' 
                required 
              />
            </div>
          </div>
          <div className='my-6 text-left'>
            Mensagem
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' 
              name="Message" 
              placeholder='Mensagem' 
              required
            ></textarea>
          </div>
          <button 
            className='bg-blue-600 text-white py-2 px-12 mb-10 rounded' 
            type="submit" 
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
