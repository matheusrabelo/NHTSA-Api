import logger from './logger';

test('logger should log in console', () => {
    global.console = { log: jest.fn() };
    logger.log('Log', { data: 123 });
    // eslint-disable-next-line
    expect(console.log).toBeCalled();
});
