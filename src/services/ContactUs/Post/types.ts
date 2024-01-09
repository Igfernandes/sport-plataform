export type PostContactUsPayload = {
  nome: string;
  email: string;
  celular: string;
  estado: string;
  cidade: string;
  setor: string;
  assunto: string;
  mensagem: string;
};

export type PostContactUsRequest = {
  success?: () => void;
  error?: () => void;
};

export type PostContactUsResponse = {
  success?: boolean;
};
