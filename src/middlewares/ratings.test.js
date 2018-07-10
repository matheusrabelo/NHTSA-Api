import { addRatings } from './ratings';

test('should add rating', async () => {
    const ctx = {
        query: {
            withRating: 'true',
        },
        state: {
            ratingsService: {
                getCrashRating: jest.fn().mockResolvedValue('5'),
            },
        },
        body: {
            Count: 1,
            Message: 'Results returned successfully',
            Results: [
                {
                    VehicleDescription: '2018 Vehicle',
                    VehicleId: 1001,
                },
            ],
        },
    };
    const next = jest.fn().mockResolvedValue();
    await addRatings(ctx, next);
    expect(ctx.body.Count).toBe(1);
    expect(ctx.body.Results[0].CrashRating).toBe('5');
});
