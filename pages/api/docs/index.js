import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../../swaggerConfig';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(swaggerUi.serve);
handler.get(swaggerUi.setup(swaggerDocument));

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};