import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);

  if (initialized) {
    console.log('MongoDB já está conectado');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'next-house',
    });
    initialized = true;
    console.log('MongoDB conectado com sucesso');
    
  } catch (error) {
    console.log('Erro ao conectart MongoDB:', error);
  }
};