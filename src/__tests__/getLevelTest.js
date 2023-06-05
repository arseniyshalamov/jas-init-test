import getLevel from '../js/Mocks/getLevel';
import fetchData from '../js/Mocks/http';

jest.mock('../js/Mocks/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel status "ok"', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 1');
});

test('getLevel status "ok"', () => {
  fetchData.mockReturnValue({});
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
