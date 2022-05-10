import nodemailer from 'nodemailer';

const enviar = async (req, res) => {
  const {nome, phone, mensagem} = req.body;
  const transport = nodemailer.createTransport({
    //host: 'smtp.gmail.com',
    host: 'mail.consultoriolivre.com.br',
    //port: 587,
    port: 587,
    secure: false,
    auth:{
      user: 'nao.responda@consultoriolivre.com.br',
      pass: '-@?&I,@GOYa3'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    const enviarEmail = await transport.sendMail({
      from: 'nao.responda@consultoriolivre.com.br',
      to: 'ebarrosjr@gmail.com',
      subject: '[Nutri Debora Ribeiro] Contato via site',
      html: `<h3>De ${nome}</h3><h4>De ${phone}</h4><p>${mensagem}</p>`,
    });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
}

export default enviar;