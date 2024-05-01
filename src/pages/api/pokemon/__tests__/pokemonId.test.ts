import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../[pokemonId].page';

type HttpRequest = {
  req: NextApiRequest;
  res: NextApiResponse & { _getJSONData: Function };
};

global.fetch = jest.fn();

const mockedPokemon = {
  id: 22,
  name: 'pokemon',
  height: 12,
  weight: 40,
  abilities: [
    {
      ability: {
        name: 'ability',
      },
    },
  ],
  types: [
    {
      types: {
        name: 'default',
      },
    },
  ],
  stats: [
    {
      base_stat: 100,
      stat: {
        name: 'stat',
      },
    },
  ],
};

describe('/api/[pokemonId]', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a pokemon object for a valid pokemon ID', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockedPokemon),
      status: 200,
    });

    const { req, res }: HttpRequest = createMocks({
      method: 'GET',
      query: {
        pokemonId: 'pikachu',
      },
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toHaveProperty('name', 'pokemon');
  });

  describe('/api/[pokemonId]', () => {
    it('should return an error for an invalid pokemon ID', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        statusText: 'Random error message',
        status: 404,
      });

      const { req, res }: HttpRequest = createMocks({
        method: 'GET',
        query: {
          pokemonId: '1000000',
        },
      });

      await handler(req, res);

      expect(res.statusCode).toBe(404);
      expect(res._getJSONData()).toHaveProperty(
        'message',
        'Random error message. Try again!',
      );
    });
  });
});
