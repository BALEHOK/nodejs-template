import { Service } from './service';

it('should be amazing', () => {
  const actual = new Service().do('yes');
  expect(actual).toBe('amazing');
});
it('should ask for input', () => {
  const actual = new Service().do(null);
  expect(actual).toBe('give me something');
});
