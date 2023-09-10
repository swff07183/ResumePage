import { rest } from 'msw';
import { selfIntroduction, skills } from './extra';
import { BASE_URL } from '@/api/client';

const selfIntroductionHandler = [
  rest.get(`${BASE_URL}/self-introduction`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(selfIntroduction));
  }),
  rest.post('/self-introduction', async (req, res, ctx) => {
    // selfIntroduction.push({
    //   title: 'hi',
    //   content: 'hello',
    // });

    return res(ctx.status(201), ctx.json(selfIntroduction));
  }),
];

const skillHandler = [
  rest.get(`${BASE_URL}/skill`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(skills));
  }),
  rest.post(`${BASE_URL}/skill`, async (req, res, ctx) => {
    skills.push({
      title: 'React',
    });

    return res(ctx.status(201), ctx.json(skills));
  }),
];

export const handlers = [...selfIntroductionHandler, ...skillHandler];
