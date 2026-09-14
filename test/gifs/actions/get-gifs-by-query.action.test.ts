/// <reference types="vite/client" />

import { describe, test, expect } from 'vitest';
import { giphyApi } from '../../../src/gifs/api/giphy.api';
import { getGifsByQuery } from '../../../src/gifs/actions/get-gifs-by-query.action';

describe('getGifsByQuery', () => {
    test('should return a list of gifs ', async () => {
        const gifs = await getGifsByQuery('goku');
        const [gif1] = gifs;
        expect(gifs.length).toBe(20);
        expect(gif1).toStrictEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});