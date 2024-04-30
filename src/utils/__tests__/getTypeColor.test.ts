import getTypeColor from '../getTypeColor';

describe('getTypeColor', () => {
  it('should return a color string for a valid type', () => {
    expect(getTypeColor('electric')).toBe('#FFC100');
  });

  it('should return white color hex code string for an invalid type', () => {
    expect(getTypeColor('example')).toBe('#FFF');
  });
});
